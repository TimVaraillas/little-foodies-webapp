<script setup lang="ts">
type Size = "xs" | "sm" | "md" | "lg" | "xl";

interface Props {
  modelValue?: string;
  prependIcon?: string;
  size?: Size;
}

const props = withDefaults(defineProps<Props>(), {
  size: "md",
});

const inputClass = {
  "px-3 py-1 text-xs": props.size === "xs",
  "px-3 py-1.5 text-sm": props.size === "sm",
  "px-4 py-2.5 text-base": props.size === "md",
  "pl-4 pr-5 py-4 text-lg": props.size === "lg",
  "pl-4 pr-5 py-6 text-xl": props.size === "xl",
};
</script>

<template>
  <button
    class="focus:outline-none text-white bg-amber-500 hover:bg-amber-400 focus:ring-4 focus:ring-amber-200 font-medium rounded-lg"
    :class="inputClass"
  >
    <slot></slot>
  </button>
</template>

<style scoped lang="scss"></style>
