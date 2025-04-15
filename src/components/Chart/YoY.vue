<script>
export default {
  name: "YoY",
  props: {
    title: String,
    total: [String, Number],
    rate: [String, Number],
    mode: {
      type: String,
      default: "default",
    },
  },
};
</script>

<template>
  <div :class="['yoy', `yoy-${mode}`]">
    <span class="yoy-title">{{ title }}</span>
    <strong class="yoy-total">{{ total }}</strong>
    <span class="yoy-rate">
      同比
      <em>{{ rate }}%</em>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.yoy {
  display: inline-flex;
  flex-direction: column;
  gap: 12upx;

  &-card {
    background-color: #f0f8ff;
    border-radius: 16upx;
    gap: 16upx;
    padding: 40upx;

    .yoy-title{
      font-size: 24upx;
    }

    .yoy-total {
      font-weight: 400;
    }
  }

  &-title {
    font-size: 34upx;
  }

  &-total {
    font-size: 40upx;
    margin-left: 10upx;
  }

  &-rate {
    font-size: 34upx;

    em {
      color: red;
      margin-left: 20upx;
    }
  }
}
</style>
