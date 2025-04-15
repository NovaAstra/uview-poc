<script>
export default {
  name: "Legend",
  props: {
    color: String,
  },
};
</script>

<template>
  <div class="legend">
    <span class="legend-radio" :style="{ background: color }"></span>

    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.legend {
  display: inline-flex;
  justify-content: flex-start;

  &-radio {
    border-radius: 50%;
    width: 30upx;
    height: 30upx;
    margin-top: 10upx;
    margin-right: 30upx;
  }
}
</style>
