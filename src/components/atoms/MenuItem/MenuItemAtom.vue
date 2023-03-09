<script setup lang="ts">
import type { MenuItem } from "@/types/menu.type";

const props = defineProps<{
  item: MenuItem;
}>();
</script>

<template>
  <li @click="() => props.item.handler()">
    <span
      class="block px-4 py-2 hover:bg-slate-100 cursor-pointer"
      :class="[...(props.item.color ? [`text-${props.item.color}`] : [])]"
    >
      {{ props.item.name }}
    </span>
  </li>
</template>
