<script setup lang="ts">
import { ref, Ref, computed, onMounted } from "vue";

import FoodGridTemplate from "@/components/templates/FoodGrid/FoodGridTemplate.vue";

import { useFoodStore } from "@/stores/food.store";

import type { FoodsByCategory } from "@/types/food.type";
import type { SelectOption } from "@/types/select.type";

const store = useFoodStore();

const foodByCategories = computed((): FoodsByCategory[] =>
  store.foodsByCategories(
    search.value,
    categories.value,
    seasons.value,
    introductoryAge.value,
    allergens.value
  )
);

const categoriesSelectOptions = computed(
  (): SelectOption[] => store.categoriesSelectOptions
);

const pageSubtitle = ref("<b>Jules</b> a déjà goûté...");

const search: Ref<string> = ref("");
const categories: Ref<any[]> = ref([]);
const seasons: Ref<any[]> = ref([]);
const introductoryAge: Ref<number | null> = ref(null);
const allergens: Ref<boolean | null> = ref(null);

const filtersStructure = {
  categories: {
    placeholder: "Catégorie",
    options: [],
    closeOnSelect: false,
    valueProp: "id",
    labelProp: "name",
  },
  seasons: {
    placeholder: "Saison",
    options: [
      { value: "spring", label: "Printemps" },
      { value: "summer", label: "Été" },
      { value: "automn", label: "Automne" },
      { value: "winter", label: "Hiver" },
    ],
    closeOnSelect: false,
  },
  introductoryAge: {
    placeholder: "Âge d'introduction",
    options: [
      { value: "4", label: "à partir de 4 mois" },
      { value: "6", label: "à partir de 6 mois" },
      { value: "9", label: "à partir de 9 mois" },
      { value: "12", label: "à partir de 12 mois" },
    ],
  },
  allergens: {
    placeholder: "Présence d'allergènes majeurs",
    options: [
      { value: "Oui", label: "Oui" },
      { value: "Non", label: "Non" },
    ],
  },
};

onMounted(async () => {
  await store.fetchCategories();
  await store.fetchFoods();
});
</script>

<template>
  <FoodGridTemplate
    page-title="Diversification alimentaire"
    :page-subtitle="pageSubtitle"
    :filters-structure="filtersStructure"
    v-model:search="search"
    v-model:categories="categories"
    v-model:seasons="seasons"
    v-model:introductory-age="introductoryAge"
    v-model:allergens="allergens"
    :food-by-categories="foodByCategories"
  />
</template>

<style scoped lang="scss">
.select-filter {
  flex: 1 1 200px;
}
</style>
