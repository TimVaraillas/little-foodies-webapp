<script setup lang="ts">
const props = defineProps<{ msg: string }>();
</script>

<template>
  <h1 class="text-3xl font-bold underline">{{ props.msg }}</h1>
</template>

<style scoped lang="scss"></style>
