<script setup lang="ts">
import { ref, Ref, computed } from "vue";
import { storeToRefs } from "pinia";

import { useFoodStore } from "@/stores/food.store";

import NavBar from "@components/organisms/NavBar/NavBarOrganism.vue";
import HeaderOrganism from "@components/organisms/Header/HeaderOrganism.vue";
import InputText from "@components/atoms/InputText/InputTextAtom.vue";
import SelectAtom from "@components/atoms/Select/SelectAtom.vue";
import FoodGridOrganism from "@components/organisms/FoodGrid/FoodGridOrganism.vue";

const props = defineProps<{ title: string }>();

const store = useFoodStore();
const { categories, foodByCategories } = storeToRefs(store);

const search = ref("");

const categoriesSelected: Ref<string[] | null> = ref(null);

const seasons: any[] = [
  { value: "spring", label: "Printemps" },
  { value: "summer", label: "Été" },
  { value: "automn", label: "Automne" },
  { value: "winter", label: "Hiver" },
];
const seasonsSelected: Ref<string[] | null> = ref(null);

const introductoryAge: any[] = [
  { value: "4", label: "à partir de 4 mois" },
  { value: "6", label: "à partir de 6 mois" },
  { value: "9", label: "à partir de 9 mois" },
  { value: "12", label: "à partir de 12 mois" },
];
const introductoryAgeSelected: Ref<string | null> = ref(null);
const parsedIntroductoryAgeSelected = computed(() =>
  introductoryAgeSelected.value ? parseInt(introductoryAgeSelected.value) : null
);

const allergens = ["Oui", "Non"];
const allergensSelected: Ref<string | null> = ref(null);
const parsedAllergensSelected = computed(() =>
  allergensSelected.value
    ? allergensSelected.value === "Oui"
      ? true
      : false
    : null
);
</script>

<template>
  <nav-bar :app-title="props.title" />
  <header-organism title="Diversification alimentaire">
    <template #subtitle>
      <span><b>Jules</b> a déjà goûté...</span>
    </template>

    <template #content>
      <div class="w-full grid grid-cols-12 gap-4">
        <input-text
          class="col-start-3 col-span-8 focus:outline-none"
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
          mode="tags"
          placeholder="Catégories"
          v-model="categoriesSelected"
          :options="categories"
          value-prop="id"
          label-prop="name"
          size="sm"
          :closeOnSelect="false"
        />
        <select-atom
          class="mx-1 mb-1 select-filter"
          mode="tags"
          placeholder="Saisons"
          v-model="seasonsSelected"
          :options="seasons"
          size="sm"
          :closeOnSelect="false"
        />
        <select-atom
          class="mx-1 mb-1 select-filter"
          mode="single"
          placeholder="Âge d'introduction"
          v-model="introductoryAgeSelected"
          :options="introductoryAge"
          size="sm"
        />
        <select-atom
          class="mx-1 mb-1 select-filter"
          mode="single"
          placeholder="Allergènes majeurs"
          v-model="allergensSelected"
          :options="allergens"
          size="sm"
        />
      </div>
    </template>
  </header-organism>
  <div v-if="foodByCategories" class="container mx-auto my-16">
    <food-grid-organism
      :food-by-categories="
        foodByCategories(
          search,
          categoriesSelected,
          seasonsSelected,
          parsedIntroductoryAgeSelected,
          parsedAllergensSelected
        )
      "
    />
  </div>
</template>

<style scoped lang="scss">
.select-filter {
  flex: 1 1 200px;
}
</style>
