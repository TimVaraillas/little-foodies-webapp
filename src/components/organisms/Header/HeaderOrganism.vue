<script setup lang="ts">
import TitleAtom from "@components/atoms/Title/TitleAtom.vue";
import SubtitleAtom from "@components/atoms/Subtitle/SubtitleAtom.vue";

const props = defineProps<{
  title?: string;
  subtitle?: string;
}>();
</script>

<template>
  <div class="bg-amber-100 py-14">
    <div class="container flex flex-col items-center justify-center mx-auto">
      <div class="title mb-3">
        <title-atom v-if="props.title" :text="props.title" />
        <title-atom v-else><slot name="title"></slot></title-atom>
      </div>
      <div class="subtitle">
        <subtitle-atom v-if="props.subtitle" :text="props.subtitle" />
        <subtitle-atom v-else>
          <slot name="subtitle"></slot>
        </subtitle-atom>
      </div>
      <div class="mt-12 w-full">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
