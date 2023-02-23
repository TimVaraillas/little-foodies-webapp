<script setup lang="ts">
import AppTitle from "@components/atoms/AppTitle/AppTitleAtom.vue";

const props = defineProps<{ appTitle: string }>();
</script>

<template>
  <nav class="bg-amber-100 h-16">
    <div
      class="h-full container flex flex-wrap items-center justify-between mx-auto"
    >
      <app-title :title="props.appTitle" />
    </div>
  </nav>
</template>

<style scoped lang="scss"></style>
