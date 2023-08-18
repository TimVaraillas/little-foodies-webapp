<script setup lang="ts">
import { computed } from "vue";

type Size = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
type Variant = "normal" | "italic";
type Weight = "thin" | "light" | "normal" | "medium" | "bold" | "extrabold";

interface Props {
  size?: Size;
  variant?: Variant;
  weight?: Weight;
}

const props = withDefaults(defineProps<Props>(), {
  size: "md",
  variant: "normal",
  weight: "normal",
});

const weightMapping = {
  thin: 100,
  light: 300,
  normal: 400,
  medium: 500,
  bold: 700,
  extrabold: 900,
};

const componentStyle = computed((): any => ({
  fontWeight: weightMapping[props.weight],
}));

const componentClass = computed(() => ({
  [`text-${props.size}`]: true,
  ...(props.variant === "italic" ? { italic: true } : {}),
}));
</script>

<template>
  <p :class="componentClass" :style="componentStyle">
    <slot></slot>
  </p>
</template>

<style scoped lang="scss"></style>
