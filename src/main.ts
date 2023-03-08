import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import icons from "./assets/icons";
library.add(...icons);

const pinia = createPinia();

createApp(App)
  .use(pinia)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
