<template>
  <BasicModal
    title="预勘探意见"
    :show-cancel-btn="true"
    :cancel-btn-ghost="false"
    :showDefView="false"
    v-model="modelVisible"
    :width="1200"
    :height="667"
    @comfirm="onComfirm"
  >
    <Comment v-model="modelValue" />
  </BasicModal>
</template>

<script>
import { cloneDeep } from "lodash-es";
import BasicModal from "@/components/Modal.vue";
import Comment from "./Comment.vue";
import { temporary, regex } from "./data";

export default {
  name: "CommentPopup",
  inheritAttrs: false,
  components: {
    BasicModal,
    Comment,
  },
  props: {
    visible: Boolean,
    value: {
      type: Object,
      default: () => cloneDeep(temporary),
    },
  },
  data() {
    return {
      modelValue: cloneDeep(this.value),
    };
  },
  computed: {
    modelVisible: {
      get() {
        return this.visible;
      },
      set(value) {
        this.$emit("update:visible", value);
      },
    },
  },
  methods: {
    onComfirm() {
      this.modelValue.content = this.modelValue.template.replace(
        regex,
        (match, field) => {
          const props = this.modelValue[field];
          if (props && props.value !== undefined) {
            if (typeof props.value === "object" && props.value.name) {
              return props.value.name;
            }

            return props.value;
          }

          return "";
        }
      );

      this.$emit("input", this.modelValue);

      this.modelVisible = false;
    },
  },
};
</script>