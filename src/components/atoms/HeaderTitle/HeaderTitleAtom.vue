<script setup lang="ts">
const props = defineProps({
  text: String,
});
</script>

<template>
  <h2 class="text-3xl font-bold uppercase tracking-wider text-amber-500">
    <slot v-if="!props.text"></slot>
    <span v-else>{{ props.text }}</span>
  </h2>
</template>

<style scoped lang="scss"></style>
