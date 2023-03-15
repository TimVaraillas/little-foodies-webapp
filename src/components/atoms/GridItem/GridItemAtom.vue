<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  flow: {
    type: String,
    validator(value: string) {
      return ["row", "column"].includes(value);
    },
    default: () => "row",
  },
  span: {
    type: Number,
    validator(value: number) {
      return value > 0 && value <= 12 ? true : false;
    },
    default: () => 1,
  },
  start: {
    type: Number,
    validator(value: number) {
      return value > -1 && value <= 13 ? true : false;
    },
  },
  end: {
    type: Number,
    validator(value: number) {
      return value > -1 && value <= 13 ? true : false;
    },
  },
});

const flowKeyword = computed(() => (props.flow === "row" ? "column" : "row"));

const componentStyle = computed(() => ({
  [`grid-${flowKeyword.value}`]: `span ${props.span} / span ${props.span}`,
  ...(props.start
    ? { [`grid-${flowKeyword.value}-start`]: `${props.start}` }
    : {}),
  ...(props.end ? { [`grid-${flowKeyword.value}-end`]: `${props.end}` } : {}),
}));
</script>

<template>
  <div :style="componentStyle">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss"></style>
