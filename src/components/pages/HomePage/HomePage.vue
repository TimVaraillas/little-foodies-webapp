<script setup lang="ts">
import { ref } from "vue";
import NavBar from "@components/organisms/NavBar/NavBarOrganism.vue";
import HeaderComponent from "@components/organisms/Header/HeaderOrganism.vue";
import InputText from "@components/atoms/InputText/InputTextAtom.vue";

const props = defineProps<{ title: string }>();

const search = ref("");
</script>

<template>
  <nav-bar :app-title="props.title" />
  <header-component title="Diversification alimentaire">
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
    </template>
  </header-component>
</template>

<style scoped lang="scss"></style>
