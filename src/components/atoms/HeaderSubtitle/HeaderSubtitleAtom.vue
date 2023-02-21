<script setup lang="ts">
const props = defineProps({
  text: String,
});
</script>

<template>
  <h3 class="text-2xl text-slate-800">
    <slot v-if="!props.text"></slot>
    <span v-else>{{ props.text }}</span>
  </h3>
</template>

<style scoped lang="scss"></style>
