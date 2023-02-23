<script setup lang="ts">
import HeaderTitle from "@components/atoms/HeaderTitle/HeaderTitleAtom.vue";
import HeaderSubtitle from "@components/atoms/HeaderSubtitle/HeaderSubtitleAtom.vue";

const props = defineProps<{
  title?: string;
  subtitle?: string;
}>();
</script>

<template>
  <div class="bg-amber-100 py-14">
    <div class="container flex flex-col items-center justify-center mx-auto">
      <div class="title mb-3">
        <header-title v-if="props.title" :text="props.title" />
        <header-title v-else>
          <slot name="title"></slot>
        </header-title>
      </div>
      <div class="subtitle">
        <header-subtitle v-if="props.subtitle" :text="props.subtitle" />
        <header-subtitle v-else>
          <slot name="subtitle"></slot>
        </header-subtitle>
      </div>
      <div class="mt-12 w-full">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
