<script setup lang="ts">
import ImageAtom from "@/components/atoms/Image/ImageAtom.vue";
import TextAtom from "@/components/atoms/Text/TextAtom.vue";

const props = defineProps<{
  image?: string;
  text?: string;
}>();
</script>

<template>
  <div
    class="p-6 flex items-center justify-start border border-slate-300 rounded-lg"
  >
    <image-atom
      v-if="props.image"
      :src="props.image"
      height="40px"
      width="40px"
    />
    <text-atom class="ml-4" size="xl" weight="bold">
      {{ props.text }}
    </text-atom>
  </div>
</template>

<style scoped lang="scss"></style>
