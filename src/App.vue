<script setup lang="ts">
import { ref, Ref, onMounted, onUnmounted } from "vue";
import { RouterView } from "vue-router";
import { storeToRefs } from "pinia";

import { router } from "@/helpers/router";

import NavBarOrganism from "@/components/organisms/NavBar/NavBarOrganism.vue";

import { useAuthStore } from "@/stores/auth.store";

import type { MenuItem, NavBarMenuItem } from "@/types/menu.type";
import type { User } from "@/types/user.type";

const authStore = useAuthStore();

const logoUrl: Ref<string> = ref("/img/logo.svg");

const { user } = storeToRefs(authStore);

const navBarMenu: Ref<NavBarMenuItem[]> = ref([
  {
    name: "Diversification alimentaire",
    url: "/",
  },
]);

const avatarMenu: Ref<MenuItem[][]> = ref([
  [
    {
      name: "Ma famille",
      handler: () => router.push("/family"),
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
  <nav-bar-organism
    class="sticky top-0 z-20 transition-all duration-300"
    :class="{ 'shadow-md': windowScrolled }"
    :logo-url="logoUrl"
    :user="(user as User)"
    :avatar-menu="avatarMenu"
    :nav-menu="navBarMenu"
  />
  <RouterView />
</template>

<style scoped></style>
