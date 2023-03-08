import { createRouter, createWebHistory } from "vue-router";

import LoginPage from "@/components/pages/Login/LoginPage.vue";
import FoodGridPage from "@/components/pages/FoodGrid/FoodGridPage.vue";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    { path: "/", component: FoodGridPage },
    { path: "/login", component: LoginPage },
  ],
});
