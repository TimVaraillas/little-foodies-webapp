<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  flow: {
    type: String,
    validator(value: string) {
      return ["row", "column", "dense", "row dense", "column dense"].includes(
        value
      );
    },
    default: () => "row",
  },
  columns: {
    type: Number,
    validator(value: number) {
      return value > 0 && value <= 12 ? true : false;
    },
  },
  rows: {
    type: Number,
    validator(value: number) {
      return value > 0 ? true : false;
    },
  },
  gap: String,
});

const componentStyle = computed(() => ({
  ...(props.columns
    ? { "grid-template-columns": `repeat(${props.columns}, minmax(0, 1fr))` }
    : {}),
  ...(props.rows
    ? { "grid-template-rows": `repeat(${props.rows}, minmax(0, 1fr))` }
    : {}),
  ...(props.gap ? { gap: props.gap } : {}),
  ...(props.flow ? { "grid-auto-flow": props.flow } : {}),
}));
</script>

<template>
  <div class="w-full grid" :style="componentStyle">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss"></style>
