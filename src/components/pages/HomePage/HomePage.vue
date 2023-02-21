<script setup lang="ts">
import NavBar from "../../organisms/NavBar/NavBarOrganism.vue";
import HeaderComponent from "../../organisms/Header/HeaderOrganism.vue";

const props = defineProps<{ title: string }>();
</script>

<template>
  <nav-bar :app-title="props.title" />
  <header-component title="Diversification alimentaire">
    <template #subtitle>
      <span><b>Jules</b> a déjà goûté...</span>
    </template>
  </header-component>
</template>

<style scoped lang="scss"></style>
