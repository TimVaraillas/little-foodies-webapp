<script setup lang="ts">
import ImageAtom from "@/components/atoms/Image/ImageAtom.vue";
import TagAtom from "@/components/atoms/Tag/TagAtom.vue";
import TextAtom from "@/components/atoms/Text/TextAtom.vue";
import TitleAtom from "@/components/atoms/Title/TitleAtom.vue";

import type { Food } from "@/types/food.type";

const props = defineProps<{
  food: Food;
}>();

const seasonMapping = {
  spring: "Printemps",
  summer: "Été",
  automn: "Automne",
  winter: "Hiver",
};
</script>

<template>
  <div class="divide-y">
    <div class="py-8 text-center flex flex-col items-center">
      <image-atom
        :src="`/img/food/${props.food.image}`"
        height="150px"
      ></image-atom>
      <title-atom class="mt-6" :level="2">{{ props.food.name }}</title-atom>
    </div>
    <div class="py-6">
      <div class="bg-slate-100 rounded-lg p-6">
        <div class="mb-4 flex items-center flex-wrap">
          <text-atom class="mr-4">Catégorie : </text-atom>
          <text-atom weight="extrabold">
            {{ props.food.category.name }}
          </text-atom>
        </div>
        <div class="mb-4 flex items-center flex-wrap">
          <text-atom class="mr-4">Saison de consommation : </text-atom>
          <div>
            <tag-atom
              v-for="season in props.food.season"
              :key="season"
              class="m-1"
              color="primary"
            >
              {{ seasonMapping[season] }}
            </tag-atom>
          </div>
        </div>
        <div class="mb-4 flex items-center flex-wrap">
          <text-atom class="mr-4">Contient des allergènes majeurs : </text-atom>
          <tag-atom
            class="m-1"
            :color="props.food.main_allergens ? 'danger' : 'success'"
            outline
          >
            {{ props.food.main_allergens ? "Oui" : "Non" }}
          </tag-atom>
        </div>
        <div class="mb-4 flex items-center flex-wrap">
          <text-atom class="mr-4">Âge d'introduction conseillé : </text-atom>
          <text-atom weight="extrabold">
            Pas avant {{ props.food.introductory_month }} mois
          </text-atom>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
