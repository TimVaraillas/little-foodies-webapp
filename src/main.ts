import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import icons from "./assets/icons";
library.add(...icons);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
