<script setup lang="ts">
type Size = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";

interface Props {
  icon: string;
  size?: Size;
}

const props = withDefaults(defineProps<Props>(), {
  size: "md",
});
</script>

<template>
  <span :class="`text-${props.size}`">
    <i class="fa-solid" :class="`fa-${props.icon}`"></i>
  </span>
</template>

<style scoped lang="scss"></style>
