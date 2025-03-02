<template>
  <view class="content">
    <!-- <div @click="visible = true">{{ data.content || '没有数据' }}</div> -->

    <ChartRoom :visible.sync="visible" v-model="data" />
  </view>
</template>

<script>
import ChartRoom from "@/components/ChartRoom/index.vue";
import { data } from "./data"

export default {
  components: {
    ChartRoom,
  },
  data() {
    return {
      visible: false,
      data
    };
  },
  onLoad() { },
  methods: {
    getImg(src) {
      console.log(src)
    }
  },
};
</script>

<style></style>
