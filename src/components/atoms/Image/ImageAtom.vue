<script setup lang="ts">
const props = defineProps<{
  src?: string;
  height?: string;
  width?: string;
}>();
</script>

<template>
  <img
    :src="props.src"
    :style="{
      height: props.height,
      width: props.width,
    }"
  />
</template>

<style scoped lang="scss"></style>
