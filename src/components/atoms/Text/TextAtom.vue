<script setup lang="ts">
import { computed } from "vue";

type Size =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl";

type Weight =
  | "thin"
  | "extralight"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"
  | "black";

type LetterSpacing =
  | "tighter"
  | "tight"
  | "normal"
  | "wide"
  | "wider"
  | "widest";

interface Props {
  letterSpacing?: LetterSpacing;
  size?: Size;
  style?: "normal" | "italic";
  weight?: Weight;
}

const props = withDefaults(defineProps<Props>(), {
  letterSpacing: "normal",
  size: "md",
  style: "normal",
  weight: "normal",
});

const styleClass = computed(() => ({
  [`tracking-${props.letterSpacing}`]: true,
  [`text-${props.size}`]: true,
  ...(props.style === "italic" ? { italic: true } : {}),
  [`font-${props.weight}`]: true,
}));
</script>

<template>
  <p :class="styleClass">
    <slot></slot>
  </p>
</template>

<style scoped lang="scss"></style>
