<script setup lang="ts">
import CardAtom from "@/components/atoms/Card/CardAtom.vue";
import GridItemAtom from "@/components/atoms/GridItem/GridItemAtom.vue";
import ImageAtom from "@/components/atoms/Image/ImageAtom.vue";
import TextAtom from "@/components/atoms/Text/TextAtom.vue";
import TitleAtom from "@/components/atoms/Title/TitleAtom.vue";
import GridMolecule from "@/components/molecules/Grid/GridMolecule.vue";

import type { FoodsByCategory } from "@/types/food.type";

const props = defineProps<{
  foodByCategories: FoodsByCategory[];
}>();

const emit = defineEmits(["item-click"]);

const onItemClick = (foodId: string) => {
  emit("item-click", foodId);
};
</script>

<template>
  <div
    class="w-full mb-20"
    v-for="category in props.foodByCategories"
    :key="category.category"
  >
    <title-atom class="text-center mb-12" :level="2">
      {{ category.category }}
    </title-atom>

    <grid-molecule :columns="12" gap="16px">
      <grid-item-atom
        v-for="food in category.foods"
        :key="food._id"
        :span="3"
        :xl-span="4"
        :lg-span="4"
        :md-span="6"
        :sm-span="12"
      >
        <card-atom
          class="hover:cursor-pointer"
          ring="hover"
          @click="() => onItemClick(food._id)"
        >
          <div class="flex items-center justify-start">
            <image-atom
              :src="`/img/food/${food.image}`"
              height="40px"
              width="40px"
            />
            <text-atom class="ml-4" size="xl" weight="bold">
              {{ food.name }}
            </text-atom>
          </div>
        </card-atom>
      </grid-item-atom>
    </grid-molecule>
  </div>
</template>

<style scoped lang="scss"></style>
