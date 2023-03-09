import { createRouter, createWebHistory } from "vue-router";

import LoginPage from "@/components/pages/Login/LoginPage.vue";
import FoodGridPage from "@/components/pages/FoodGrid/FoodGridPage.vue";

import { useAuthStore } from "@/stores/auth.store";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    { path: "/", component: FoodGridPage },
    { path: "/login", component: LoginPage },
  ],
});

router.beforeEach(async (to) => {
  const publicPages: string[] = [];
  const offlinePages: string[] = ["/login"];
  const authRequired: boolean = ![...publicPages, ...offlinePages].includes(
    to.path
  );
  const authStore = useAuthStore();

  if (authRequired && !authStore.user) {
    return "/login";
  }

  if (offlinePages.includes(to.path) && authStore.user) {
    return "/";
  }
});
