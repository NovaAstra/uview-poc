<template>
  <component class="option" :is="tag" v-bind="property"></component>
</template>

<script>
import { omit } from "lodash-es";

export default {
  name: "Option",
  inheritAttrs: false,
  components: {
    Input: () => import("./Input.vue"),
    Direction: () => import("./Direction.vue"),
  },
  props: {
    field: String,
  },
  inject: ["root"],
  computed: {
    property() {
      return {
        field: this.field,
        ...omit(this.root.getFieldProps(this.field), []),
      };
    },
    tag() {
      return this.property.type === "input" ? "Input" : "Direction";
    },
  },
};
</script>

<style lang="scss" scoped>
.option {
  display: inline-flex;
}
</style>