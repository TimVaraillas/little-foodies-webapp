import { createApp, provide, h } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import App from "./App.vue";

import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import icons from "./assets/icons";
library.add(...icons);

const cache = new InMemoryCache();
const apolloClient = new ApolloClient({
  cache,
  uri: "http://localhost:4000/graphql",
});

createApp({
  setup: () => {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
})
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
