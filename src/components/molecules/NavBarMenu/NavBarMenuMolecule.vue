<script setup lang="ts">
import NavBarMenuItemAtom from "@/components/atoms/NavBarMenuItem/NavBarMenuItemAtom.vue";

import type { NavBarMenuItem } from "@/types/menu.type";

const props = defineProps<{
  menu: NavBarMenuItem[];
}>();
</script>

<template>
  <ul class="h-full grow flex items-center p-4">
    <nav-bar-menu-item-atom
      v-for="item in props.menu"
      :key="item.name"
      :menu-item="item"
    />
  </ul>
</template>

<style scoped lang="scss"></style>
