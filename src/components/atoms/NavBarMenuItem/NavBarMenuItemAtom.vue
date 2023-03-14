<script setup lang="ts">
import type { NavBarMenuItem } from "@/types/menu.type";

const props = defineProps<{
  menuItem: NavBarMenuItem;
}>();
</script>

<template>
  <li class="mr-6 text-slate-800 font-medium hover:text-amber-500">
    <router-link
      :to="props.menuItem.url"
      active-class="text-amber-500 font-extrabold"
    >
      {{ props.menuItem.name }}
    </router-link>
  </li>
</template>

<style scoped lang="scss"></style>
