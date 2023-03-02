<script setup lang="ts">
import FoodItemMolecule from "@components/molecules/FoodItem/FoodItemMolecule.vue";
import TextAtom from "@components/atoms/Text/TextAtom.vue";

const props = defineProps<{
  foodByCategories: any[];
}>();
</script>

<template>
  <div
    class="w-full grid grid-cols-12 gap-4 mb-14"
    v-for="category in props.foodByCategories"
    :key="category"
  >
    <text-atom class="col-span-12 text-center mb-6" size="3xl" weight="bold">{{ category.category }}</text-atom>
    <food-item-molecule
      v-for="item in category.food"
      :key="item"
      v-bind="item"
    />
  </div>
</template>

<style scoped lang="scss"></style>
