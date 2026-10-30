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
// 换模型gpt2，查看token数
const enc = getEncoding("gpt-4");
//gpt2  116 42 270 33
// o200k_base  32 40 76 32



const p1_tokens = enc.encode(p1);
console.log(p1_tokens.length);
const p2_tokens = enc.encode(p2);
console.log(p2_tokens.length);
const p3_tokens = enc.encode(p3);
console.log(p3_tokens.length);
const p4_tokens = enc.encode(p4);
console.log(p4_tokens.length);
