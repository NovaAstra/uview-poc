<script>
export default {
  name: "Title",
};
</script>

<template>
  <div class="title">
    <span class="title-ov">案件总览</span>
    <u-button type="primary" :plain="true" size="mini">德阳市</u-button>
  </div>
</template>

<style lang="scss" scoped>
.title {
  display: flex;
  align-items: center;
  gap: 30upx;

 

  .u-btn {
    margin: 0;
  }

  &-ov {
    font-weight: bold;
    font-size: 40upx;
  }
}
</style>
