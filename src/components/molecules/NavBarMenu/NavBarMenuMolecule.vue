<script setup lang="ts">
import { Ref, ref, onMounted, onUnmounted } from "vue";

import IconAtom from "@/components/atoms/Icon/IconAtom.vue";
import NavBarMenuItemAtom from "@/components/atoms/NavBarMenuItem/NavBarMenuItemAtom.vue";

import type { NavBarMenuItem } from "@/types/menu.type";

const props = defineProps<{
  menu: NavBarMenuItem[];
}>();

const windowWidth: Ref<number> = ref(window.innerWidth);
const menuOpen: Ref<boolean> = ref(false);

const onResize = () => {
  windowWidth.value = window.innerWidth;
};

const onCloseMenu = () => {
  if (menuOpen.value) {
    menuOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener("resize", onResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", onResize);
});
</script>

<template>
  <ul v-if="windowWidth >= 1024" class="h-full grow flex items-center">
    <nav-bar-menu-item-atom
      v-for="item in props.menu"
      :key="item.name"
      :menu-item="item"
    />
  </ul>
  <div v-else v-click-out="onCloseMenu">
    <div @click="() => (menuOpen = !menuOpen)">
      <icon-atom
        icon="bars"
        class="hover:text-amber-500 hover:cursor-pointer hover:scale-125 ease-in-out transition-all"
      />
    </div>
    <div
      v-if="menuOpen"
      class="z-10 left-2 right-2 mt-6 absolute shadow-lg rounded-lg"
    >
      <div class="bg-white rounded-lg">
        <ul class="divide-y divide-slate-100">
          <div class="px-6 py-6" v-for="item in props.menu" :key="item.name">
            <nav-bar-menu-item-atom :menu-item="item" @click="onCloseMenu" />
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
