<template>
  <view
    class="basic-modal-mask"
    v-if="value"
    @click.stop="$emit('input', false)"
  >
    <view class="basic-modal" :style="modalStyle" @click.stop>
      <view
        class="basic-modal-header"
        :style="headerStyle"
        :class="headerClass"
      >
        <slot name="title">
          <span class="basic-modal-title">{{ title }}</span>
        </slot>
      </view>
      <view class="basic-modal-body">
        <slot></slot>
      </view>
      <view
        class="basic-modal-footer"
        :style="footerStyle"
        :class="footerClass"
      >
        <u-button
          class="cancel-btn"
          v-if="showCancelBtn && !cancelBtnGhost"
          @click="$emit('cancel')"
        >
          取消
        </u-button>
        <text
          v-if="showCancelBtn && cancelBtnGhost"
          class="cancel-btn-ghost"
          @click="
            $emit('cancel');
            $emit('input', false);
          "
        >
          取消
        </text>
        <u-button
          class="confirm-btn"
          v-if="showConfirmBtn"
          @click="$emit('comfirm')"
          >确认</u-button
        >
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "BasicModal",
  props: {
    value: Boolean,
    title: String,
    headerStyle: Object,
    headerClass: [String, Array, Object],
    footerStyle: Object,
    footerClass: [String, Array, Object],
    showCancelBtn: {
      type: Boolean,
      default: false,
    },
    showConfirmBtn: {
      type: Boolean,
      default: true,
    },
    cancelBtnGhost: Boolean,
    width: [String, Number], // 新增宽度属性
    height: [String, Number], // 新增高度属性
  },
  data() {
    return {};
  },
  computed: {
    modalStyle() {
      return {
        width: this.width + "px",
        height: this.height + "px",
      };
    },
  },
};
</script>

<style lang="scss">
:root {
  --my-offset: 1;
}

.basic-modal {
  background: #ffffff;
  border-radius: calc(30px);
  overflow: hidden;
  padding: calc(20px * var(--my-offset)) calc(81px * var(--my-offset));
  display: flex;
  flex-direction: column;
  &-header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(155px * var(--my-offset));
  }
  &-title {
    font-weight: 600;
    font-size: calc(42px * var(--my-offset));
    color: #000000;
    text-align: center;
    font-style: normal;
  }
  &-body {
    flex: 1;
  }
  &-footer {
    height: calc(199px * var(--my-offset));
    display: flex;
    justify-content: center;
    align-items: center;
    uni-button {
      width: calc(260px * var(--my-offset));
      height: calc(80px * var(--my-offset));
      line-height: calc(80px * var(--my-offset));
      border-radius: calc(6px * var(--my-offset));
      font-weight: 500;
      font-size: calc(32px * var(--my-offset));
      text-align: center;
      font-style: normal;
      margin: 0;
      & + uni-button {
        margin-left: calc(40px * var(--my-offset));
      }
    }
    .cancel-btn {
      color: #33ab8e;
      border: calc(2px * var(--my-offset)) solid #33ab8e;
      &-ghost {
        font-weight: 500;
        font-size: calc(32px * var(--my-offset));
        color: #33ab8e;
      }
    }
    .confirm-btn {
      background: linear-gradient(101deg, #57b977 0%, #089ca8 100%);
      color: #ffffff;
    }
  }
  &-mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
  }
}
</style>