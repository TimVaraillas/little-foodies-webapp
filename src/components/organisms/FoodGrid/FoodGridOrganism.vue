<script setup lang="ts">
import FoodItemMolecule from "@components/molecules/FoodItem/FoodItemMolecule.vue";
import TextAtom from "@components/atoms/Text/TextAtom.vue";

import type { FoodsByCategory } from "@/types/food.type";

const props = defineProps<{
  foodByCategories: FoodsByCategory[];
}>();
</script>

<template>
  <div
    class="w-full grid grid-cols-12 gap-4 mb-14"
    v-for="category in props.foodByCategories"
    :key="category.category"
  >
    <text-atom class="col-span-12 text-center mb-6" size="3xl" weight="bold">
      {{ category.category }}
    </text-atom>
    <food-item-molecule
      v-for="item in category.foods"
      :key="item._id"
      v-bind="item"
    />
  </div>
</template>

<style scoped lang="scss"></style>
