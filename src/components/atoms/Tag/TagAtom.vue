<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    color?: "primary" | "danger" | "success" | "info" | "default";
    size?: "sm" | "md" | "lg" | "xl";
    outline?: boolean;
    pills?: boolean;
  }>(),
  {
    color: "default",
    size: "md",
  }
);

const componentClass = computed(() => ({
  [props.color]: true,
  border: props.outline,
  rounded: !props.pills,
  "rounded-full": props.pills,
  "text-xs px-2.5 py-1": props.size === "sm",
  "text-sm px-3 py-1.5": props.size === "md",
  "text-md px-4 py-2": props.size === "lg",
  "text-lg px-4 py-2.5": props.size === "xl",
}));
</script>

<template>
  <span class="inline-block font-medium" :class="componentClass">
    <slot></slot>
  </span>
</template>

<style scoped lang="scss">
@mixin tag($color) {
  background-color: $color;
  color: theme("colors.white");

  &.border {
    background-color: transparent;
    color: $color;
    border-color: $color;
  }
}
.primary {
  @include tag(theme("colors.amber.500"));
}
.danger {
  @include tag(theme("colors.rose.500"));
}
.success {
  @include tag(theme("colors.emerald.500"));
}
.info {
  @include tag(theme("colors.sky.500"));
}
.default {
  @include tag(theme("colors.slate.500"));
}
</style>
