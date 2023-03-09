<script setup lang="ts">
import { ref, Ref, computed, onMounted } from "vue";

import InputTextAtom from "@/components/atoms/InputText/InputTextAtom.vue";
import SelectAtom from "@/components/atoms/Select/SelectAtom.vue";
import NavBarOrganism from "@/components/organisms/NavBar/NavBarOrganism.vue";
import HeaderOrganism from "@/components/organisms/Header/HeaderOrganism.vue";
import FoodGridOrganism from "@/components/organisms/FoodGrid/FoodGridOrganism.vue";

import { useFoodStore } from "@/stores/food.store";

import type { FoodsByCategory } from "@/types/food.type";
import type { SelectOption } from "@/types/select.type";

const foodStore = useFoodStore();

const foodByCategories = computed((): FoodsByCategory[] =>
  foodStore.foodsByCategories(
    search.value,
    categories.value,
    seasons.value,
    introductoryAge.value,
    allergens.value
  )
);

const search: Ref<string> = ref("");
const categories: Ref<any[]> = ref([]);
const seasons: Ref<any[]> = ref([]);
const introductoryAge: Ref<number | null> = ref(null);
const allergens: Ref<boolean | null> = ref(null);

const categoriesSelectOptions = computed(
  (): SelectOption[] => foodStore.categoriesSelectOptions
);
const seasonsSelectOptions: Ref<SelectOption[]> = ref([
  { value: "spring", label: "Printemps" },
  { value: "summer", label: "Été" },
  { value: "automn", label: "Automne" },
  { value: "winter", label: "Hiver" },
]);
const introductoryAgeSelectOptions: Ref<SelectOption[]> = ref([
  { value: "4", label: "à partir de 4 mois" },
  { value: "6", label: "à partir de 6 mois" },
  { value: "9", label: "à partir de 9 mois" },
  { value: "12", label: "à partir de 12 mois" },
]);
const allergensSelectOptions: Ref<SelectOption[]> = ref([
  { value: "Oui", label: "Oui" },
  { value: "Non", label: "Non" },
]);

onMounted(async () => {
  await foodStore.fetchCategories();
  await foodStore.fetchFoods();
});
</script>

<template>
  <nav-bar-organism />
  <header-organism title="Diversification alimentaire">
    <template #subtitle>
      <span><b>Jules</b> a déjà goûté...</span>
    </template>

    <template #content>
      <div class="w-full grid grid-cols-12 gap-4">
        <input-text-atom
          class="col-start-3 col-span-8"
          v-model="search"
          placeholder="Rechercher des aliments"
          prepend-icon="fa-solid fa-magnifying-glass"
          clearable
          size="lg"
        />
      </div>
      <div class="flex flex-wrap items-center justify-center my-3">
        <select-atom
          class="mx-1 mb-1 select-filter"
          size="sm"
          mode="tags"
          placeholder="Catégories"
          v-model="categories"
          :closeOnSelect="false"
          :options="categoriesSelectOptions"
        />
        <select-atom
          class="mx-1 mb-1 select-filter"
          size="sm"
          mode="tags"
          placeholder="Saisons"
          v-model="seasons"
          :closeOnSelect="false"
          :options="seasonsSelectOptions"
        />
        <select-atom
          class="mx-1 mb-1 select-filter"
          size="sm"
          mode="single"
          placeholder="Âge d'introduction"
          v-model="introductoryAge"
          :options="introductoryAgeSelectOptions"
        />
        <select-atom
          class="mx-1 mb-1 select-filter"
          size="sm"
          mode="single"
          placeholder="Présence d'allergènes majeurs"
          v-model="allergens"
          :options="allergensSelectOptions"
        />
      </div>
    </template>
  </header-organism>
  <div v-if="foodByCategories" class="container mx-auto my-16">
    <food-grid-organism :food-by-categories="foodByCategories" />
  </div>
</template>

<style scoped lang="scss">
.select-filter {
  flex: 1 1 200px;
}
</style>
