<script setup lang="ts">
import ImageAtom from "@/components/atoms/Image/ImageAtom.vue";
import TextAtom from "@/components/atoms/Text/TextAtom.vue";

const props = defineProps<{
  id: string;
  image?: string;
  name?: string;
}>();

const emit = defineEmits(["item-click"]);

const onClick = (foodId: string) => {
  emit("item-click", foodId);
};
</script>

<template>
  <div
    class="p-6 flex items-center justify-start border-2 border-slate-300 rounded-lg hover:border-amber-400 hover:ring-4 hover:ring-amber-50 hover:cursor-pointer sm:col-span-12 md:col-span-12 lg:col-span-6 xl:col-span-4 2xl:col-span-3"
    @click="onClick(props.id)"
  >
    <image-atom :src="`/img/food/${props.image}`" height="40px" width="40px" />
    <text-atom class="ml-4" size="xl" weight="bold">
      {{ props.name }}
    </text-atom>
  </div>
</template>

<style scoped lang="scss"></style>
