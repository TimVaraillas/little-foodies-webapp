<script setup lang="ts">
const props = defineProps<{ title: string }>();
</script>

<template>
  <h1 class="title text-2xl text-slate-800">{{ props.title }}</h1>
</template>

<style scoped lang="scss">
.title {
  font-family: "Leckerli One", cursive;
}
</style>
