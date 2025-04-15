<script>
import Legend from "@/components/Chart/Legend.vue";
import Title from "@/components/Chart/Title.vue";
import YoY from "@/components/Chart/YoY.vue";

export default {
  name: "Overview",
  components: {
    Legend,
    YoY,
    Title
  },
  data() {
    return {
      list: [
        {
          title: "假烟案件",
          total: 30,
          rate: 60,
          color: "blue",
        },
        {
          title: "走私烟案件",
          total: 30,
          rate: 60,
          color: "orange",
        },
        {
          title: "真烟案件",
          total: 30,
          rate: 60,
          color: "red",
        },
        {
          title: "原辅料案件",
          total: 30,
          rate: 60,
        },
      ],
    };
  },
};
</script>

<template>
  <div class="overview">
    <Title />
    <div class="overview-seized">
      <span class="overview-seized-title">查获案件总量</span>
      <strong class="overview-seized-total">335</strong>
      <strong class="overview-seized-rate">13.56%</strong>
    </div>
    <div class="overview-chart">
      <Legend
        v-for="(item, index) in list"
        :key="index"
        :color="item.color"
        :class="{ 'fuliao-case': item.title === '原辅料案件' }"
      >
        <YoY
          :title="item.title"
          :total="item.total"
          :rate="item.rate"
          :mode="item.title === '原辅料案件' ? 'card' : 'default'"
        />
      </Legend>

      <div class="overview-chart-pie"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.overview {
  padding: 40upx;
  display: flex;
  flex-direction: column;
  gap: 40upx;
  &-seized {
    display: flex;
    gap: 20upx;
    &-title {
      font-size: 35upx;
      font-weight: bold;
    }

    &-total {
    }

    &-rate {
      color: red;
    }
  }

  &-chart {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 100upx 200upx;

    &-pie{
      position: absolute;
      top: 100upx;
      left: 33%;
      right: 28%;
      height: 300upx;
      border: 1px solid red;
    }

    .fuliao-case {
      position: absolute;
      right: 0;
      top: 400upx;
    }
  }
}
</style>
