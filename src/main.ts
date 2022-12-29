import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedState from "pinia-plugin-persistedstate";
import App from "./App.vue";
import router from "./router";
import { globalRegister } from "./global";
import "./assets/css/global.less";
import clickEffect from "@/utils/click";

const pinia = createPinia();
pinia.use(piniaPluginPersistedState);

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(globalRegister);
app.mount("#app");

clickEffect();
