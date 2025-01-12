<template>
  <view class="content">
    <ImageCropper :imgSrc="require('./1.jpg')" @getImg="getImg"/>
  </view>
</template>

<script>
import ImageCropper from "@/components/ImageCropper/ImageCropper.vue";

export default {
  components: {
    ImageCropper,
  },
  data() {
    return {
      visible: true,
    };
  },
  onLoad() { },
  methods: {
    getImg(src){
      console.log(src)
    }
  },
};
</script>

<style></style>
