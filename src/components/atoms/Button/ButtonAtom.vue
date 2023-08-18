<script setup lang="ts">
type Size = "xs" | "sm" | "md" | "lg" | "xl";
type Color = "primary" | "default" | "info" | "success" | "warning" | "error";

interface Props {
  modelValue?: string;
  prependIcon?: string;
  size?: Size;
  color: Color;
}

const props = withDefaults(defineProps<Props>(), {
  size: "md",
  color: "default",
});

const inputClass = {
  "px-3 py-1 text-xs": props.size === "xs",
  "px-3 py-1.5 text-sm": props.size === "sm",
  "px-4 py-2.5 text-base": props.size === "md",
  "pl-4 pr-5 py-4 text-lg": props.size === "lg",
  "pl-4 pr-5 py-6 text-xl": props.size === "xl",
  [props.color]: true,
};
</script>

<template>
  <button
    class="button cursor-pointer focus:outline-none focus:ring-4 font-medium rounded-lg"
    :class="inputClass"
  >
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
@mixin colorButton($textColor, $bgColor, $hoverBgColor, $ringColor) {
  color: $textColor;
  background-color: $bgColor;
  &:hover {
    background-color: $hoverBgColor;
  }
  &:focus {
    --tw-ring-color: $ringColor;
  }
}
.button {
  &.primary {
    @include colorButton(
      theme("colors.white"),
      theme("colors.amber.500"),
      theme("colors.amber.400"),
      theme("colors.amber.200")
    );
  }
  &.default {
    @include colorButton(
      theme("colors.white"),
      theme("colors.slate.400"),
      theme("colors.slate.300"),
      theme("colors.slate.200")
    );
  }
  &.info {
    @include colorButton(
      theme("colors.white"),
      theme("colors.sky.500"),
      theme("colors.sky.400"),
      theme("colors.sky.200")
    );
  }
  &.success {
    @include colorButton(
      theme("colors.white"),
      theme("colors.emerald.500"),
      theme("colors.emerald.400"),
      theme("colors.emerald.200")
    );
  }
  &.warning {
    @include colorButton(
      theme("colors.white"),
      theme("colors.amber.500"),
      theme("colors.amber.400"),
      theme("colors.amber.200")
    );
  }
  &.error {
    @include colorButton(
      theme("colors.white"),
      theme("colors.rose.500"),
      theme("colors.rose.400"),
      theme("colors.rose.200")
    );
  }
}
</style>
