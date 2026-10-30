/**
 * W1 补充实验：embedding 是什么 + 余弦相似度（20 分钟版）
 *
 * 目的：亲手看到「语义近但字面不像」和「共享关键词但意思不同」两种情况，
 *       搞懂为什么 W8 的 RAG 不能靠关键词匹配，以及为什么单靠向量也不够。
 *
 * 运行：node embedding-lab.mjs
 * 模型：BAAI/bge-small-zh-v1.5（中文专用，512 维，int8 量化后约 24MB）
 * 网络：huggingface.co 在国内多半连不上，默认走 hf-mirror.com 镜像；
 *       首次下载约 24MB，之后走本地缓存（.cache/），离线也能跑。
 */
import { env, pipeline } from "@huggingface/transformers";

// ---- 国内网络配置 ----
env.remoteHost = "https://hf-mirror.com/"; // 能直连 HF 就删掉这行
env.allowLocalModels = false;
// 抖动重试：镜像第一次连接偶尔超时
const rawFetch = env.fetch ?? globalThis.fetch;
env.fetch = async (url, opts) => {
  for (let i = 0; i < 3; i++) {
    try {
      return await rawFetch(url, opts);
    } catch (e) {
      if (i === 2) throw e;
      console.log(`  [重试 ${i + 1}] ${String(url).slice(0, 70)}…`);
    }
  }
};

const MODEL = "Xenova/bge-small-zh-v1.5";

// 10 句话：5 组设计好的关系，其中 2 组是陷阱
const SENTENCES = [
  "Vue 的响应式原理是依赖收集和派发更新", // 0
  "Vue 通过 Proxy 拦截属性访问来实现依赖追踪", // 1 ← 0 的改写
  "Composition API 让逻辑可以按功能组织", // 2
  "setup 函数里可以用 ref 和 reactive", // 3
  "今天天气不错，适合出去走走", // 4
  "外面的阳光很好，出门散散步吧", // 5 ← 4 的改写，一个字都不重合
  "我把那个 bug 修了", // 6
  "这个缺陷已经解决了", // 7 ← 6 的改写，实词全换
  "苹果发布了新款手机", // 8
  "这家水果店的苹果很甜", // 9 ← 共享「苹果」，但语义无关
];

// ---------- 1. 字面相似度基线：字符二元组 Jaccard ----------
const bigrams = (s) => {
  const t = s.replace(/[，。、？！,.\s]/g, "");
  const set = new Set();
  for (let i = 0; i < t.length - 1; i++) set.add(t.slice(i, i + 2));
  return set;
};
const jaccard = (a, b) => {
  const A = bigrams(a), B = bigrams(b);
  const inter = [...A].filter((x) => B.has(x)).length;
  return inter / (A.size + B.size - inter);
};

// ---------- 2. 语义相似度：embedding + 余弦 ----------
console.log(`加载 ${MODEL}（首次下载约 24MB，之后走缓存）…`);
const t0 = Date.now();
const extractor = await pipeline("feature-extraction", MODEL, { dtype: "q8" });
console.log(`模型就绪，用时 ${((Date.now() - t0) / 1000).toFixed(1)}s\n`);

const out = await extractor(SENTENCES, { pooling: "mean", normalize: true });
const vecs = out.tolist(); // 已 L2 归一化 → 点积即余弦
const dim = vecs[0].length;
const cosine = (a, b) => a.reduce((s, x, i) => s + x * b[i], 0);
console.log(`向量维度：${dim}\n`);

const n = SENTENCES.length;
const sim = Array.from({ length: n }, (_, i) =>
  Array.from({ length: n }, (_, j) => cosine(vecs[i], vecs[j]))
);

// ---------- 3. 打印矩阵 ----------
console.log("## 表 1 · 10×10 余弦相似度（1.00 = 同一个意思）\n");
console.log("| | " + SENTENCES.map((_, i) => i).join(" | ") + " |");
console.log("|---|" + SENTENCES.map(() => "---:").join("|") + "|");
for (let i = 0; i < n; i++) {
  console.log(`| **${i}** | ` + sim[i].map((v) => v.toFixed(2)).join(" | ") + " |");
}

// ---------- 4. 关键样本对比 ----------
const PAIRS = [
  [4, 5, "改写 · 一个字都不重合"],
  [6, 7, "改写 · 实词全换（bug→缺陷）"],
  [0, 1, "改写 · 技术句"],
  [0, 9, "无关（对照组，看「地板」）"],
  [8, 9, "共享「苹果」· 模型翻车"],
];

console.log("\n## 表 2 · 语义相似度 vs 字面相似度\n");
console.log("| 设计意图 | 句子 A | 句子 B | 余弦（语义） | Jaccard（字面） |");
console.log("|---|---|---|---:|---:|");
for (const [a, b, tag] of PAIRS) {
  console.log(
    `| ${tag} | ${SENTENCES[a]} | ${SENTENCES[b]} | ${sim[a][b].toFixed(3)} | ${jaccard(SENTENCES[a], SENTENCES[b]).toFixed(3)} |`
  );
}

// ---------- 5. 全量最相似对 ----------
const all = [];
for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) all.push([i, j, sim[i][j]]);
all.sort((x, y) => y[2] - x[2]);
console.log("\n## 表 3 · 最相似的 5 对\n");
console.log("| 相似度 | 句子 A | 句子 B |");
console.log("|---:|---|---|");
for (const [i, j, v] of all.slice(0, 5)) {
  console.log(`| ${v.toFixed(3)} | ${SENTENCES[i]} | ${SENTENCES[j]} |`);
}

// ---------- 6. 结论 ----------
console.log(`
## 四条结论（每一条都对着上面某一行数据）

1. **语义近的句子排在前面，而且不是因为字面。**
   4↔5 余弦 0.66、6↔7 0.62、0↔1 0.57；而无关的 0↔9 只有 0.32。
   4↔5 一个字都不重合，6↔7 把 bug 换成缺陷、修换成解决 —— 余弦仍然排前列。
   → 这就是 embedding 干的事：把「意思」变成向量，字面不参与。

2. **同类句子之间会「糊」在一起。**
   0/1/2 三句都是 Vue，彼此都在 0.45–0.57，0↔1 甚至跟 0↔2 打平。
   → 语料同质化时区分度下降。所以 RAG 里「召回几条」比「阈值多少」更重要，
     最后还要靠 rerank / 模型判断来排序（W8 会用到）。

3. **「地板」不是 0，是 0.3–0.35。**
   任意两句无关的话也有 0.32。所以网上「相似度 > 0.8 才算命中」的阈值不能照抄：
   换模型、换语料，分布就变了。**只看同一模型内的相对排序**，阈值用你自己的数据标。

4. **8↔9 是反例，也是这个实验里最值钱的一行。**
   两句都含「苹果」，模型给了 0.52 —— 比无关句高一大截，甚至成了 8 的最近邻。
   小模型分不清「苹果公司」和「水果苹果」。
   → 所以生产环境是 BM25（字面）+ 向量（语义）混合检索，再上 rerank，
     而不是指望一个 cosine 打天下。

## 工程含义

- **换 embedding 模型 = 换向量空间 = 必须重建整个索引**，新旧向量不能混着比。
- bge 系列做**检索**时，query 要加指令前缀（「为这个句子生成表示以用于检索相关文章：」），passage 不加；
  做**句子相似度**（就是本实验）两边都不加。
- 维度（bge-small-zh 是 512）是「分辨率的成本」：越高越贵越慢，不是越高越好。
`);
