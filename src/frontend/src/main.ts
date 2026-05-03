import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Nora from "@primeuix/themes/aura";
import router from "./router";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App);
app.use(pinia);
app.use(PrimeVue, {
  theme: {
    preset: Nora,
  },
});
app.use(router);
app.use(VueQueryPlugin);

app.mount("#app");
