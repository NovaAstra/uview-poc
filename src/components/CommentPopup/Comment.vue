

<script>
import { cloneDeep } from "lodash-es";
import Option from "./Option.vue";
import { temporary, regex } from "./data";

export default {
  name: "Comment",
  components: {
    Option,
  },
  props: {
    value: {
      type: Object,
      default: () => cloneDeep(temporary),
    },
  },
  provide() {
    return {
      root: this,
    };
  },
  methods: {
    renderElements(h) {
      if (!this.value || !this.value?.template) return [];

      const matches = [];
      let index = 0;
      let match;

      while ((match = regex.exec(this.value.template)) !== null) {
        matches.push(
          h("text", null, this.value.template.slice(index, match.index)),

          h("Option", {
            props: {
              field: match[1],
            },
          })
        );

        index = match.index + match[0].length;
      }

      const content = this.value.template.slice(index);

      if (content) {
        matches.push(h("text", null, content));
      }

      return matches;
    },
    onUpdateField(field, value) {
      this.$set(this.value[field], "value", value);
    },
    getFieldProps(field) {
      return this.value[field] || {};
    },
  },
  render(h) {
    return h(
      "view",
      {
        class: "comment",
      },
      this.renderElements(h)
    );
  },
};
</script>

<style lang="scss" scoped>
.comment {
  font-family: PingFangSC, PingFang SC;
  font-weight: 400;
  font-size: 32px;
  color: #333333;
  line-height: 52px;
  text-align: left;
  font-style: normal;
}
</style>