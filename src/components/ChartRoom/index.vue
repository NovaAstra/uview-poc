<template>
  <view class="chart-room">
    <view class="send-chart__wrapper" ref="scroll-content">
      <template v-for="(item, index) in list">
        <view class="send-chart-item" data-type="user" :key="index">
          <view class="send-chart-item-content">
            <view></view>
            <view>{{ item.question }}</view>
          </view>
        </view>

        <template v-if="item.answers && item.answers.length > 0">
          <view
            class="send-chart-item"
            data-type="ai"
            :key="answer.answerUuid"
            v-for="answer in item.answers"
          >
            <view class="send-chart-item-content">
              <rich-text :nodes="parseMarkdown(answer.content)"></rich-text>
            </view>
          </view>
        </template>
      </template>

      <view class="scroll-bottom"></view>
    </view>

    <view class="send-input__wrapper">
      <u-input class="send-input" v-model="content"></u-input>
      <view class="send-input-action" @click="onSend"></view>
    </view>
  </view>
</template>

<script>
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
import "highlight.js/styles/default.css";

export default {
  name: "ChartRoom",
  data() {
    return {
      content: "",
      list: [
        {
          question: "11111111111111111111111",
          answers: [
            {
              answersTime: "2025-03-02 00:00:00",
              answerUuid: "chat3b25839a-92e8-453b-8e40-5d3bab24a961",
              content:
                "<think>\n嗯，用户发来的信息看起来有点复杂。首先，我注意到有很多文本内容，包括一些指令、问题以及似乎是回答的内容。但问题是用“11111111111111111111111”来表示的，可能是个占位符或者用户输入的时候出错了。\n\n接着，我看到这些文本中提到了专卖执法人员的工作考核方法，比如直接目标法和系统考核法。这可能意味着用户是在讨论绩效考核的问题，或者是对某种考核方式有疑问。但问题部分全部是数字“1”，看起来不够清楚，无法明确知道用户的真正需求是什么。\n\n另外，还有一些日志信息，比如时间、地区、案件编号等，这可能涉及到烟草专卖局的案例处理流程或者数据记录。不过用户的问题部分却全是数字，可能是在测试系统或者是误操作导致的信息混乱。\n\n考虑到这些情况，我需要进一步分析用户的真实意图。或许用户想了解这两种考核方法的具体内容和优缺点，或者对如何改进考核体系有疑问。也有可能用户提供了一些上下文信息，但问题本身没有明确表达出来，所以需要更详细的问题才能给出准确的回答。\n\n在这种情况下，作为助手，我应该建议用户提供一个更具体的问题，这样我可以更好地理解和回答他们的需求。同时，也可以询问用户是否需要帮助分析他们提供的文本内容，或者是否有其他方面的问题需要解答。\n</think>\n\n您好！您提到的内容似乎包含了一些关于专卖执法人员考核方法的讨论，但您的提问部分使用了“11111111111111111111111”作为问题，这可能是一个占位符或误输入。如果需要帮助，请提供一个具体的问题或更详细的上下文信息，我将尽力为您解答！",
              isLike: "",
              likeReason: "",
              likeTime: "2025-03-02 00:00:00",
            },
          ],
          questionTime: "2025-03-02 00:00:00",
        },
      ],
    };
  },
  methods: {
    parseMarkdown(content) {
      const md = new MarkdownIt();
      return md.render(content);
    },

    onSend() {
      const item = {
        question: this.content,
      };

      this.list.push(item);

      const answer = {
        answersTime: "2025-03-02 00:00:00",
        answerUuid: "chat322b25839a-92e8-453b-8e40-5d3bab24a961",
        content: '',
        loading: true,
        isLike: "",
        likeReason: "",
        likeTime: "2025-03-02 00:00:00",
        loading: true,
      };

      this.$set(item, "answers", [answer]);

      setTimeout(() => {
        const content = "<think>\n嗯，用有很多文本内容，包括一些似乎是回答";

        let index = 0;
        const interval = setInterval(() => {
          if (index < content.length) {
            this.$set(
              answer,
              "content",
              answer.content + content.charAt(index)
            );
            index++;
          } else {
            clearInterval(interval);
          }
        }, 100);

        this.$set(answer, "loading", false);
      }, 5000);
    },
  },
};
</script>

<style lang="scss" scoped>
.chart-room {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  .send-chart {
    &__wrapper {
      position: absolute;
      padding: 0 20upx;
      top: 0;
      left: 0;
      right: 0;
      bottom: 140upx;
      overflow: auto;
    }
    &-item {
      display: flex;
      margin-bottom: 15upx;
      .send-chart-item-content {
        width: fit-content;
        display: flex;
        padding: 10upx 16upx;
        border-radius: 12upx;
        flex-flow: column;
        min-height: 46upx;
        box-sizing: border-box;
        max-width: 100%;
        position: relative;
      }
      &[data-type="user"] {
        justify-content: flex-end;
        .send-chart-item-content {
          background-color: #2d65f7;
          color: #ffffff;
        }
      }
      &[data-type="ai"] {
        justify-content: flex-start;
        .send-chart-item-content {
          background-color: #ffffff;
        }
      }
    }
  }
  .send-input {
    &__wrapper {
      position: fixed;
      bottom: 40upx;
      height: 80upx;
      display: flex;
      align-items: center;
      gap: 16upx;
      padding: 0 16upx;
      left: 24px;
      right: 24px;
      background: #fafafa;
      border-radius: 40upx;
      border: 1px solid #dfe0e1;
    }

    &-action {
      width: 56upx;
      height: 56upx;
      border-radius: 50%;
      background-color: #bbbdbf;
    }
  }
}
</style>