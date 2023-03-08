<script setup lang="ts">
import { computed } from "vue";

import NavBar from "@components/organisms/NavBar/NavBarOrganism.vue";
import HeaderOrganism from "@components/organisms/Header/HeaderOrganism.vue";
import InputText from "@components/atoms/InputText/InputTextAtom.vue";
import SelectAtom from "@components/atoms/Select/SelectAtom.vue";
import FoodGridOrganism from "@components/organisms/FoodGrid/FoodGridOrganism.vue";

const props = defineProps<{
  pageTitle?: string;
  pageSubtitle?: string;
  filtersStructure: {
    categories: any;
    seasons: any;
    introductoryAge: any;
    allergens: any;
  };
  search: string;
  categories: string[];
  seasons: string[];
  introductoryAge: number | null;
  allergens: boolean | null;
  foodByCategories: any[];
}>();

const emit = defineEmits([
  "update:search",
  "update:categories",
  "update:seasons",
  "update:introductoryAge",
  "update:allergens",
]);

const internalSearch = computed({
  get: () => props.search,
  set: (value) => {
    emit("update:search", value);
  },
});

const internalCategories = computed({
  get: () => props.categories,
  set: (value) => {
    emit("update:categories", value);
  },
});

const internalSeasons = computed({
  get: () => props.seasons,
  set: (value) => {
    emit("update:seasons", value);
  },
});

const internalIntroductoryAge = computed({
  get: (): string | null => props.introductoryAge?.toString() || null,
  set: (value) => {
    emit("update:introductoryAge", value ? parseInt(value) : null);
  },
});

const internalAllergens = computed({
  get: (): string | null =>
    props.allergens === true ? "Oui" : props.allergens === false ? "Non" : null,
  set: (value) => {
    emit("update:allergens", value ? (value === "Oui" ? true : false) : null);
  },
});
</script>

<template>
  <nav-bar />
  <header-organism :title="props.pageTitle">
    <template #subtitle>
      <span v-html="props.pageSubtitle"></span>
    </template>

    <template #content>
      <div class="w-full grid grid-cols-12 gap-4">
        <input-text
          class="col-start-3 col-span-8 focus:outline-none"
          v-model="internalSearch"
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
          v-model="internalCategories"
          v-bind="props.filtersStructure.categories"
        />
        <select-atom
          class="mx-1 mb-1 select-filter"
          size="sm"
          mode="tags"
          v-model="internalSeasons"
          v-bind="props.filtersStructure.seasons"
        />
        <select-atom
          class="mx-1 mb-1 select-filter"
          size="sm"
          mode="single"
          v-model="internalIntroductoryAge"
          v-bind="props.filtersStructure.introductoryAge"
        />
        <select-atom
          class="mx-1 mb-1 select-filter"
          size="sm"
          mode="single"
          v-model="internalAllergens"
          v-bind="props.filtersStructure.allergens"
        />
      </div>
    </template>
  </header-organism>
  <div v-if="foodByCategories" class="container mx-auto my-16">
    <food-grid-organism :food-by-categories="foodByCategories" />
  </div>
  <div class="container mx-auto my-16"></div>
</template>

<style scoped lang="scss">
.select-filter {
  flex: 1 1 200px;
}
</style>
