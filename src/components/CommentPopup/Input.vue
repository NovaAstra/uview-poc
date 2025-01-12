<template>
  <view class="comment-input">
    <u-input
      :clearable="false"
      placeholder=""
      :style="{ width: inputWidth + 'px' }"
      :value="value"
      @input="onInput"
    />

    <view class="input-measure">{{ value || " " }}</view>
  </view>
</template>

<script>
export default {
  name: "Input",
  inheritAttrs: false,
  props: {
    value: String,
    field: String,
  },
  inject: ["root"],
  data() {
    return {
      inputWidth: 80,
    };
  },
  methods: {
    onInput(e) {
      this.root.onUpdateField(this.field, e);
      this.$nextTick(() => {
        this.calculateInputWidth();
      });
    },
    calculateInputWidth() {
      const query = uni.createSelectorQuery().in(this);
      query
        .select(".input-measure")
        .boundingClientRect((rect) => {
          if (rect) {
            this.inputWidth = Math.max(80, rect.width / 2);
          }
        })
        .exec();
    },
  },
};
</script>

<style lang="scss">
.comment-input {
  display: inline-flex;
  border: none;
  border-bottom: 3px solid;
  border-color: #393b3d !important;
  background: none;
  padding: 0;
  margin: 0 12px;
  outline: none;
  text-align: left;

  .input-measure {
    position: absolute;
    visibility: hidden;
    white-space: nowrap;
    font-size: 32px;
    display: inline-flex;
  }

  input {
    font-size: 32px;
    color: red !important;
  }

  input::placeholder {
    color: #aaa;
    font-style: italic;
  }
  input::focus {
    border-bottom: 1px solid #3498db;
  }
}
</style>