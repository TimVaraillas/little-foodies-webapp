<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    src: string;
    alt?: string;
  }>(),
  {
    alt: "Logo",
  }
);
</script>

<template>
  <img class="max-h-full" :src="props.src" :alt="props.alt" />
</template>

<style scoped lang="scss"></style>
