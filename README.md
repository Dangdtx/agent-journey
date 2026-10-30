# 从 Vue 前端到 Agent 工程师：20/24 周学习计划（2026）

> 版本：2026-10-27  
> 适用对象：以 JavaScript / Vue 为主、了解 TS / React / Node.js、Python 只有基础的前端开发者  
> 推荐起点：**轻量主线 20 周 / 每周 5–6 小时（约 100–120 小时）**，先做出 1 个上线项目。  
> 进阶：**标准版 24 周 / 每周 10–12 小时（约 288 小时）**，补 Python/后端/第三作品，适合冲刺求职。  
> 目标岗位：**AI 应用工程师 / Agent 工程师（前端·全栈方向）**，不是大模型算法岗

---

## 先说结论

你不应该去和科班算法工程师拼训练、拼论文、拼 CUDA。你真正的机会在三个交叉点：

1. **Agent 产品的前端体验**：流式输出、工具调用可视化、审批/中断/恢复、生成式 UI、可观测性面板——这些是前端的主场，而且大多数 AI 团队做得很粗糙。
2. **Agent Harness 工程**：loop、tools、context、memory、permissions、orchestration、extensibility。2026 年的共识是 **Agent = Model + Harness**，而 harness 是软件工程，不是算法研究。
3. **评测与可靠性**：能不能把 demo 做到可上线，取决于 eval、trace、权限、沙箱、成本控制。这是前端/应用工程师最容易补、也最能形成差异化的能力。

一句话定位：

> **不是“前端转算法”，而是“前端工程师升级为能独立交付 AI 产品的 Agent 工程师”。**

你的学习主线应该是：

```
现有前端能力（Vue / TS / 浏览器 / 状态管理 / 产品感）
        ↓
LLM 原理边界（够用即可，不啃数学）
        ↓
Agent 核心（loop / tools / context / memory）
        ↓
Harness 工程（可靠性 / 权限 / 评测 / 观测）
        ↓
AI 前端产品（流式 / 工具 UI / 审批 / 生成式 UI）
        ↓
3 个可验证作品 + 求职闭环
```

---

## 两条路线：先学会，再加强

| | 轻量主线（推荐起点） | 标准版（进阶/冲刺） |
|---|---|---|
| 周期 | 20 周 | 24 周 |
| 每周 | 5–6h | 10–12h |
| 总投入 | 100–120h | 约 288h |
| 作品 | 1 个上线项目 | 3 个（旗舰 + lab + 开源） |
| 语言 | 主线 TypeScript | TS + Python/FastAPI |
| 后端 | Nuxt/Hono + SQLite | NestJS + Postgres + Redis |
| 评测 | 10 条 + 失败日志 | 30 条 + 回归 + 红队 |
| 适合 | 先学会、先有作品、在职 | 冲 AI 应用/全栈岗、补 JD 关键词 |

**建议**：先走轻量主线，W19 有上线项目后，再根据目标 JD 决定是否进入标准版加餐。不要同时跑两条完整路线。

轻量主线全文见 [`05-轻量主线-20周.md`](./05-轻量主线-20周.md)，进度表见 [`轻量主线-20周.csv`](./轻量主线-20周.csv)。

---

## 标准版 24 周路线图（进阶/冲刺）

| 周 | 阶段 | 主题 | 必须交付的东西 |
|---|---|---|---|
| 0 | 准备 | 环境、基线、学习契约 | 学习仓库 + 工具链 + 自评表 |
| 1 | LLM 原理 | Token / Embedding / Transformer | 词元与向量实验 |
| 2 | LLM 原理 | 自回归 / 采样 / KV Cache / Context Rot | 原理一页纸 + 采样实验 |
| 3 | Agent 基础 | Agent Loop / LLM API / Tool | `mini-agent` v0 |
| 4 | Agent 基础 | 工具系统 / 错误处理 / 权限 | 5 个工具 + trace |
| 5 | Agent 基础 | Memory / Subagent / 意图 / RAG 入门 | `mini-agent` v1 + Web UI |
| 6 | Agent 工程 | Prompt / Context Engineering | 上下文优化报告 |
| 7 | Agent 工程 | Harness 五个可靠性子系统 | Harness Scorecard |
| 8 | Agent 工程 | Loop / Graph / Cache Engineering | maker-checker + graph 实验 |
| 9 | 源码 | Claude Code 机制拆解 | 移植 skill loading / compaction |
| 10 | 源码 | pi / OpenClaw / DeepSeek Harness / 论文 | 2 张架构图 + 对比文 |
| 11 | AI 前端 | Streaming / Chat UI / 状态 | `Agent Workbench` v0 |
| 12 | AI 前端 | Tool UI / Generative UI / 审批 | Workbench v1 |
| 13 | AI 前端 | Trace / Eval 面板 / AG-UI | Workbench v2 |
| 14 | AI 前端 | React 移植 / 性能 / 部署 | 公网 demo + 视频 |
| 15 | RAG / 记忆 | 检索 / 引用 / 权限 / 记忆 | 知识库 v1 |
| 16 | 评测 | Eval harness / Trace / 失败分类 | 30 用例评测报告 |
| 17 | 安全 | Prompt Injection / 沙箱 / 红队 | 安全备忘 + 回归用例 |
| 18 | 后端 | NestJS / SSE / Postgres / Redis | 后端 v1 |
| 19 | Python | FastAPI 最小闭环 | Python 微服务 |
| 20 | 部署 | Docker / CI / 压测 / 成本 | 生产化 v1 |
| 21 | 开源 | PR / MCP Server / Skill Pack | 2 个 PR（至少 1 个合并） |
| 22 | 品牌 | 博客 / 视频 / 简历 / 作品集 | 作品集 |
| 23 | 求职 | 投递 / 模拟面 / 八股 | 30 份投递 |
| 24 | 求职 | 系统设计 / 复盘 / 谈薪 | 面试闭环 |

更细的标准版周任务、资料、验收标准见 [`02-24周学习计划.md`](./02-24周学习计划.md)；轻量版见 [`05-轻量主线-20周.md`](./05-轻量主线-20周.md)。

---

## 三个作品（标准版；轻量版只做 1 个）

> 标准版做 3 个；轻量主线只做 **1 个上线项目**（`mini-agent` 是 lab，MCP 是加餐）。先看 [`05-轻量主线-20周.md`](./05-轻量主线-20周.md)。

### 作品 1：`mini-agent`（学习底座，不必惊艳）

- 300–800 行 TypeScript，CLI + 简单 Web UI
- 5 个工具：读文件、写文件、搜索、HTTP 请求、计算/命令
- 有 loop、max steps、timeout、retry、tool error 回传、JSONL trace
- 有 subagent、简单 memory、context compaction
- 目的：证明你理解 Agent 的最小内核，而不是只会调框架

### 作品 2：`Agent Workbench`（旗舰项目，求职主打）

一个面向**前端代码库**的 Agent 工作台：

- 连接一个 Vue/React 仓库，让 Agent 做 code review、修 bug、补测试、生成组件文档
- 聊天 + 计划 + 工具调用卡片 + diff + 人工审批 + 中断/恢复 + trace + 成本/延迟
- 后端 NestJS + AI SDK + Postgres + Redis；前端 Nuxt/Vue + AI SDK + assistant-ui
- 有 `AGENTS.md`、`feature_list.json`、`init.sh`、progress log、verification
- 30 条评测用例，报告 pass@1 / pass^3 / 成本 / 延迟
- 目的：同时证明 Agent 工程能力、前端产品能力、评测与安全意识

### 作品 3：`Vue MCP Server + Skill Pack`（协议与开源）

- 为 Vue 组件库做一个 MCP Server：列组件、查 props、搜文档、生成用法、lint 片段
- 配一个 `SKILL.md`：什么时候用、步骤、验收标准
- 20 条评测，发布到 npm + GitHub
- 目的：证明你懂 MCP、Skills、协议边界，且有开源产出

作品集叙事：

> **“我把 6 年前端工程能力，迁移到了 Agent 的可靠性和用户体验上。”**

不是“我学了很多课”，而是“我交付了 3 个能跑、能评测、能讲清楚取舍的东西”。

---

## 文件导航

| 文件 | 内容 | 什么时候看 |
|---|---|---|
| [`README.md`](./README.md) | 总览、路线图、时间预算、启动清单 | 现在 |
| [`01-定位与策略.md`](./01-定位与策略.md) | 能力盘点、市场判断、目标岗位、参考路线点评、年龄策略 | 第 0 周 |
| [`05-轻量主线-20周.md`](./05-轻量主线-20周.md) | 推荐起点：20 周 / 每周 5–6h / 1 个上线项目 | 现在 |
| [`06-计划复核-2026-10.md`](./06-计划复核-2026-10.md) | 2026-10-30 复核：3 个知识缺口 + 5 处过期事实，改了什么、为什么 | W1 复盘后 / 每 4 周 |
| [`02-24周学习计划.md`](./02-24周学习计划.md) | 标准版：每个阶段的概念讲解、资料、任务、验收、必答题 | 进阶/冲刺 |
| [`03-项目与求职.md`](./03-项目与求职.md) | 项目的详细规格、简历、面试题库、系统设计 | 第 3 周起 / 第 20 周 |
| [`04-资源清单.md`](./04-资源清单.md) | 已核验的课程、文档、仓库、论文、工具 | 随时查 |
| [`进度表.csv`](./进度表.csv) | 标准版 24 周可打勾的进度表 | 每周复盘 |
| [`轻量主线-20周.csv`](./轻量主线-20周.csv) | 轻量版 20 周可打勾的进度表 | 每周复盘 |
| [`index.html`](./index.html) | 可视化路线图 + 本地进度勾选 | 想看得爽时 |

---

## 时间预算与缩放（标准版）

> 轻量主线的节奏是 **每周 5–6h、20 周**，见 [`05-轻量主线-20周.md`](./05-轻量主线-20周.md)。下面是标准版的 24 周节奏。

| 时段 | 时长 | 做什么 |
|---|---|---|
| 周一 | 1h | 读官方文档 + 记笔记 |
| 周二 | 1h | 做小实验 |
| 周三 | 1h | 做小实验 |
| 周四 | 1h | 读源码 |
| 周五 | 1h | 复盘 + 写博客/笔记 |
| 周六 | 4h | 主项目 |
| 周日 | 3h | 主项目 + 周复盘 |

如果每周时间不同：

| 每周投入 | 总周期 | 建议 |
|---|---|---|
| 5–6h | 20 周 | **轻量主线（05）**：只做 1 个上线项目 |
| 6h | 约 44–48 周 | 标准版内容，只走最低完成线 |
| 8h | 约 34–36 周 | 保留 3 个作品，但评测/开源减半 |
| 10–12h | 24 周 | 标准版方案 |
| 15–20h | 18–20 周 | 不建议长期 20h，容易崩；可短期冲刺 |

**最低完成线**：每个阶段末尾都标了。忙的时候只做最低线，不要中断。

---

## 7 天启动清单（现在就做）

- [ ] 先选路线：轻量主线（[`05`](./05-轻量主线-20周.md)，推荐）或标准版（[`02`](./02-24周学习计划.md)）；不要同时跑
- [ ] 建一个 GitHub 仓库 `agent-journey`，目录：`notes/`、`labs/`、`projects/`、`evals/`、`writing/`
- [ ] 装好 Node.js 22+、pnpm、Git、VS Code；确认 `node -v`、`pnpm -v`
- [ ] 选一个 AI 编程工具作为日常搭子：Claude Code / Codex CLI / Pi / 你正在用的 DeepSeek Harness
- [ ] 准备 2–3 个 API Key：DeepSeek（便宜、适合刷实验）、SiliconFlow 或 OpenRouter（模型多）、一个前沿模型（评估用）
- [ ] 设一个月度预算：**¥200–500**；实验用便宜模型，评测/对比再用贵模型
- [ ] 写一页 `notes/baseline.md`：JS/TS、Vue/React、Node、Python、后端、英语，各 1–5 分；写清“我 6 个月后想拿到什么”
- [ ] 在日历里锁定学习时段：轻量主线每周 5–6 小时，标准版 10–12 小时；告诉家人/室友
- [ ] 读完 [`01-定位与策略.md`](./01-定位与策略.md)，把目标岗位改成 3 个具体公司/岗位

---

## 三条硬规则

1. **输出优先**：每周必须有一个可运行/可阅读的产物，不能只看课。看课不算学习，交付才算。
2. **官方文档优先**：中文二手博客只用来入门；API、协议、源码以官方文档和代码为准。
3. **不要中断两周以上**：忙的时候每天 20 分钟维护节奏；中断越久，重启成本越高。

---

## 风险与边界（先说实话）

- 这套计划**提高概率，不保证结果**。2026 年 Agent 岗位在增长，但门槛也在提高；没有作品和工程深度，仅靠“会用 ChatGPT”拿不到 offer。
- 你不需要成为算法专家，但**不能完全不懂原理**；否则 context、token、采样、KV cache 这些工程决策你讲不清。
- Python 不能完全跳过。中国市场大量 JD 仍把 Python 作为硬筛；你只需要到“能读、能改、能写 FastAPI 服务”的程度，不需要到训练模型。
- 年龄歧视是真实存在的。策略不是“证明自己还能熬夜”，而是“证明自己能降低试错成本、能独立交付、能带人/带项目”。
- 2026 年变化很快：MCP、AG-UI、A2A、ACP、AI SDK、Claude Agent SDK 都可能在 12 个月内变。**学稳定概念，隔离易变接口**，不要把职业身份绑在某个框架上。

---

## 计划维护（应对破坏性变更）

- **每 4 周复盘一次**：删掉打不开/过时的链接，更新 SDK/协议版本，检查目标岗位 JD 是否变化。
- **2026-12-31 做一次趋势检查**：MCP / AG-UI / A2A / ACP 是否收敛；模型价格/上下文是否变化；Agent 岗位是否分化。
- **只改“易变层”**：模型名、SDK 版本、框架 API 可以换；你的 loop/context/eval/权限/前端体验不要重写。
- **不要因为一个新框架出现就重启计划**：先问它解决了你哪个真实失败模式，再决定是否投入。

---

## 参考资料（本计划的关键依据）

- Harness Engineering 论文（11 个生产级 coding harness 的源码解剖，2026-07）：[arXiv:2609.00006](https://arxiv.org/abs/2609.00006)
- Learn Harness Engineering（14 讲 + 8 个项目，中文站）：[walkinglabs.github.io/learn-harness-engineering/zh](https://walkinglabs.github.io/learn-harness-engineering/zh/)
- Learn Claude Code（17 节，从零实现 harness）：[github.com/shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code)
- Hello-Agents（中文系统教程）：[github.com/datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents)
- Agent Learning Hub（持续更新的路线/资料索引）：[github.com/datawhalechina/Agent-Learning-Hub](https://github.com/datawhalechina/Agent-Learning-Hub)
- AI Agent 岗位 JD 调研（2026-05）：[ai-agent-engineer-handbook](https://github.com/harrisliangsu/ai-agent-engineer-handbook/blob/main/interview-prep/jd-requirements.md)
- 前端转 Agent 岗位指南（2026-04）：[ai-agent-role-and-skills-guide](https://github.com/bakersean168/dailyuse/blob/00415bba1cae74a669ae69f9f07c22d129d06185/docs/guides/ai/ai-agent-role-and-skills-guide.md)
- Anthropic: Building effective agents / Context engineering / Evals / Long-running harnesses
- Vercel AI SDK v7（含 AI SDK Harnesses）：[ai-sdk.dev](https://ai-sdk.dev/docs/introduction)
- AG-UI 协议：[docs.ag-ui.com](https://docs.ag-ui.com/introduction)
- MCP 规范：[modelcontextprotocol.io](https://modelcontextprotocol.io/docs/getting-started/intro)
