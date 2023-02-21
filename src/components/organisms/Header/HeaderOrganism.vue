<script setup lang="ts">
import HeaderTitle from "../../atoms/HeaderTitle/HeaderTitleAtom.vue";
import HeaderSubtitle from "../../atoms/HeaderSubtitle/HeaderSubtitleAtom.vue";

const props = defineProps({
  title: String,
  subtitle: String,
});
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
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
