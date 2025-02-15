<template>
  <view class="content">
    <div @click="visible = true">{{ data.content || '没有数据' }}</div>

    <CommentPopup :visible.sync="visible" v-model="data" />
  </view>
</template>

<script>
import CommentPopup from "@/components/CommentPopup/CommentPopup.vue";
import { data } from "./data"

export default {
  components: {
    CommentPopup,
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
