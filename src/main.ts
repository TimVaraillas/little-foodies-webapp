import { createApp } from "vue";
import App from "./App.vue";

import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import icons from "./assets/icons";
library.add(...icons);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
