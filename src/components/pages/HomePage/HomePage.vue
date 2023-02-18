<script setup lang="ts">
import NavBar from "../../organisms/NavBar/NavBarOrganism.vue";
const props = defineProps<{ title: string }>();
</script>

<template>
  <nav-bar :app-title="props.title"></nav-bar>
</template>

<style scoped lang="scss"></style>
