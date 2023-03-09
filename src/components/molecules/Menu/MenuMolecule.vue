<script setup lang="ts">
import MenuItemAtom from "@/components/atoms/MenuItem/MenuItemAtom.vue";

import type { MenuItem } from "@/types/menu.type";

const props = defineProps<{
  menu: MenuItem[][];
}>();
</script>

<template>
  <div class="bg-white divide-y divide-slate-100 rounded-lg">
    <slot name="prepend"></slot>
    <ul
      v-for="(menuGroup, index) in props.menu"
      :key="index"
      class="py-1 text-sm text-slate-700"
    >
      <menu-item-atom
        v-for="item of menuGroup"
        :key="item.name"
        :item="item"
      ></menu-item-atom>
    </ul>
    <slot name="append"></slot>
  </div>
</template>
