<template>
  <view class="content">
    <!-- <div @click="visible = true">{{ data.content || '没有数据' }}</div> -->

    <!-- <ChartRoom :visible.sync="visible" v-model="data" /> -->

     <!-- <ul>
        <li v-for="(item, index) in streamData" :key="index">{{ item }}</li>
      </ul> -->

      <Overview />
  </view>
</template>

<script>
import ChartRoom from "@/components/ChartRoom/index.vue";
import Overview from "@/components/Chart/Overview.vue";
import { data } from "./data";
// import { sseEvents } from "@/components/SSE/event.js";

export default {
  components: {
    ChartRoom,
    Overview
  },
  data() {
    return {
      visible: false,
      data,

      streamData: [],
    };
  },
  onLoad() {
    // sseEvents((data) => {
    //   this.streamData.push(data);
    // });
  },
  methods: {
    getImg(src) {
      console.log(src);
    },
  },
};
</script>

<style></style>
