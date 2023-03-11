<script setup lang="ts">
import TitleAtom from "@/components/atoms/Title/TitleAtom.vue";

const props = defineProps<{
  title?: string;
  subtitle?: string;
}>();
</script>

<template>
  <div class="bg-amber-100 py-14">
    <div class="container flex flex-col items-center justify-center mx-auto">
      <div class="mb-3">
        <title-atom class="uppercase text-amber-500" :level="1">
          <span v-if="props.title">{{ props.title }}</span>
          <slot v-else name="title"></slot>
        </title-atom>
      </div>
      <div>
        <title-atom :level="3">
          <span v-if="props.subtitle">{{ props.subtitle }}</span>
          <slot name="subtitle"></slot>
        </title-atom>
      </div>
      <div class="mt-12 w-full">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
