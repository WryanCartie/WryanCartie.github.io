import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import VueAnimXYZ from '@animxyz/vue3'
import '@animxyz/core';

const app = createApp(App )
app.use(VueAnimXYZ)

app.mount("#app");
