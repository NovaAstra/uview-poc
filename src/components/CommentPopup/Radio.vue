<template>
  <u-radio-group :value="modelValue" @change="onChange">
    <u-radio v-for="(item, index) in options" :key="index" :name="item.value">
      <span> {{ item.name }}</span>
    </u-radio>
  </u-radio-group>
</template>

<script>
export default {
  name: "Radio",
  props: {
    value: [String, Number, Object],
    options: {
      type: Array,
      default: () => [],
    },
  },
  inject: ["root"],
  computed: {
    modelValue() {
      if (Object.prototype.toString.call(this.value) === "[object Object]") {
        return this.value.value;
      }

      return this.value;
    },
  },
  methods: {
    onChange(e) {
      if (
        Object.prototype.toString.call(this.value) === "[object Object]" ||
        !this.value
      ) {
        const current = this.options.find((i) => i.value === e);
        this.$emit("input", current);
        return;
      }

      this.$emit("input", e);
    },
  },
};
</script>

<style lang="scss" scoped>
.u-radio-group {
  flex-direction: column;
}

::v-deep .u-radio__icon-wrap.u-radio__icon-wrap--circle {
  border: 2px solid #979797;
  width: 40px !important;
  height: 40px !important;
}

::v-deep .u-radio__label {
  font-size: 32px;
  margin-left: 42px;
}
</style>