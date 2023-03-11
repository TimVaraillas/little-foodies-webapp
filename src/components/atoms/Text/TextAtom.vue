<script setup lang="ts">
import { computed } from "vue";

type Size = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
type Style = "normal" | "italic";
type Weight = "thin" | "light" | "normal" | "medium" | "bold" | "extrabold";

interface Props {
  size?: Size;
  style?: Style;
  weight?: Weight;
}

const props = withDefaults(defineProps<Props>(), {
  size: "md",
  style: "normal",
  weight: "normal",
});

const sizeMapping: any = {
  thin: 100,
  light: 300,
  normal: 400,
  medium: 500,
  bold: 700,
  extrabold: 900,
};

const componentStyle = computed((): any => ({
  fontWeight: sizeMapping[props.weight],
}));

const styleClass = computed(() => ({
  [`text-${props.size}`]: true,
  ...(props.style === "italic" ? { italic: true } : {}),
}));
</script>

<template>
  <p :class="styleClass" :style="componentStyle">
    <slot></slot>
  </p>
</template>

<style scoped lang="scss"></style>
