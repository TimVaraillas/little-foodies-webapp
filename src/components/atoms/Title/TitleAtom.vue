<script setup lang="ts">
const props = defineProps({
  level: {
    type: Number,
    validator(value: number) {
      return value > 0 && value <= 5 ? true : false;
    },
    default: () => 1,
  },
});
</script>

<template>
  <h1 v-if="props.level <= 1" class="text-4xl font-bold">
    <slot></slot>
  </h1>
  <h2 v-else-if="props.level === 2" class="text-3xl font-bold">
    <slot></slot>
  </h2>
  <h3 v-else-if="props.level === 3" class="text-2xl font-bold">
    <slot></slot>
  </h3>
  <h4 v-else-if="props.level === 4" class="text-xl font-bold">
    <slot></slot>
  </h4>
  <h5 v-else-if="props.level >= 5" class="text-lg font-bold">
    <slot></slot>
  </h5>
</template>

<style scoped lang="scss"></style>
