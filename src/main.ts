import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/base.css";
import clickEffect from "@/utils/click";
const app = createApp(App);
clickEffect();
app.use(createPinia());
app.use(router);

app.mount("#app");
