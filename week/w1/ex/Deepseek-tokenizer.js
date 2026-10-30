import {countTokens} from "@deepseek-kit/tokenizer"

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
const count1 =await countTokens(p1)
console.log(count1) //26
const count2 =await countTokens(p2)
console.log(count2) //41
const count3 =await countTokens(p3)
console.log(count3) //76
const count4 =await countTokens(p4)
console.log(count4) //34
