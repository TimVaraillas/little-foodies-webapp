import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "@/App.vue";
import { router } from "@/helpers/router";
import handleOutsideClick from "@/directives/handleOutsideClick";

import "@/style.css";
import "@fortawesome/fontawesome-free/js/brands.min.js";
import "@fortawesome/fontawesome-free/js/solid.min.js";
import "@fortawesome/fontawesome-free/js/fontawesome.min.js";

const pinia = createPinia();

createApp(App)
  .use(router)
  .use(pinia)
  .directive("clickOut", handleOutsideClick)
  .mount("#app");
