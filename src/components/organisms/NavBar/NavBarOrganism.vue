<script setup lang="ts">
import { ref, Ref, onMounted, onUnmounted } from "vue";
import { storeToRefs } from "pinia";

import AppTitleAtom from "@/components/atoms/AppTitle/AppTitleAtom.vue";
import AvatarDropdownMolecule from "@/components/molecules/AvatarDropdown/AvatarDropdownMolecule.vue";

import { useAuthStore } from "@/stores/auth.store";

import type { MenuItem } from "@/types/menu.type";
import type { User } from "@/types/user.type";

const authStore = useAuthStore();

const props = withDefaults(
  defineProps<{
    appTitle?: string;
  }>(),
  {
    appTitle: "Little foodies",
  }
);

const { user } = storeToRefs(authStore);

const menu: Ref<MenuItem[][]> = ref([
  [
    {
      name: "Ma famille",
      handler: () => {},
    },
  ],
  [
    {
      name: "Se déconnecter",
      handler: () => {
        authStore.logout();
      },
      color: "rose-500",
    },
  ],
]);

const windowScrolled: Ref<boolean> = ref(false);

const onScroll = () => {
  windowScrolled.value = window.scrollY > 10 ? true : false;
};

onMounted(() => {
  window.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <nav
    class="bg-amber-100 h-16 sticky top-0 z-20 transition-all duration-300"
    :class="{ 'shadow-md': windowScrolled }"
  >
    <div
      class="h-full container flex flex-wrap items-center justify-between mx-auto"
    >
      <app-title-atom :title="props.appTitle" />
      <div>
        <avatar-dropdown-molecule
          v-if="user"
          :user="(user as User)"
          :menu="menu"
        />
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss"></style>
