import { Tiktoken } from "js-tiktoken/lite";
import o200k_base from "js-tiktoken/ranks/o200k_base";
import { getEncoding } from "js-tiktoken";
const p1 =
  "这是一段中文，没有其他含义，仅仅是为了测试而输入的，所以没有什么需要深入研究的，只需要看最后的测试结果就可以";
const p2 =
  "This is a piece of Chinese text with no other meaning. It was entered solely for testing purposes, so there is nothing that requires in-depth study—you only need to look at the final test results.";
const p3 = ` <Select
                  v-model="basicInfo.businessType"
                  :disabled="isDisabled"
                  style="width: 100%"
                >
                  <Option
                    v-for="(item, index) in businessTypeList"
                    :key="index"
                    :value="item.itemValue"
                    >{{ item.itemText }}</Option
                  >
                </Select>`;
// 10个emoji
const p4 =
  "emoji :smile: :joy: :laughing :grinning :smirk :smile :smile :smile :smile :smile";
// 注意：js-tiktoken 的 getEncoding 只认 gpt2 / r50k_base / p50k_base / p50k_edit /
// cl100k_base / o200k_base；"gpt-4" 是 Python tiktoken 的 model 别名，传进来会抛
// Error: Unknown encoding。想按模型名取编码，用 encodingForModel("gpt-4")。
const enc = getEncoding("cl100k_base"); // GPT-4 / GPT-3.5 时代的词表
// 实测（2026-10-30，node v22.14.0 / js-tiktoken 1.0.21）：
// cl100k_base  51 40 75 33
// o200k_base   32 40 76 32
// gpt2_r50k   116 42 270 33
// 完整四组 × 五个 tokenizer + 成本表见 w1-report.mjs



const p1_tokens = enc.encode(p1);
console.log(p1_tokens.length);
const p2_tokens = enc.encode(p2);
console.log(p2_tokens.length);
const p3_tokens = enc.encode(p3);
console.log(p3_tokens.length);
const p4_tokens = enc.encode(p4);
console.log(p4_tokens.length);
