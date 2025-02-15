<template>
  <view class="comment-direction" @click.stop="onClick">
    <text>{{ text }}</text>

    <BasicModal
      title="请选择"
      :width="900"
      :height="600"
      v-model="visible"
      headerClass="modal-header-left"
      :show-cancel-btn="true"
      :confirm-btn-ghost="true"
      :cancel-btn-ghost="true"
      footerClass="modal-footer-right"
      @comfirm="onConfirm"
    >
      <component :is="tag" v-bind="property" v-model="modelValue"></component>
    </BasicModal>
  </view>
</template>

<script>
import { omit, cloneDeep } from "lodash-es";
import BasicModal from "@/components/Modal.vue";

export default {
  name: "Direction",
  inheritAttrs: false,
  components: {
    BasicModal,
    Radio: () => import("./Radio.vue"),
  },
  props: {
    value: [String, Number, Object],
    field: String,
  },
  inject: ["root"],
  data() {
    return {
      visible: false,

      modelValue: cloneDeep(this.value),
    };
  },
  computed: {
    property() {
      return {
        field: this.field,
        ...omit(this.root.getFieldProps(this.field), []),
      };
    },
    tag() {
      return this.property.type;
    },
    text() {
      if (Object.prototype.toString.call(this.value) === "[object Object]") {
        return this.value.name;
      }
      return this.value;
    },
  },
  methods: {
    onClick() {
      this.visible = true;
      console.log(13213)
    },

    onConfirm() {
      this.root.onUpdateField(this.field, this.modelValue);
      this.visible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.comment-direction {
  display: inline-flex;
  min-width: 80px;
  height: 30px;
  border-bottom: 3px solid #393b3d;
}
</style>