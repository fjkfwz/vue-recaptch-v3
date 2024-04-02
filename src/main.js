import { createApp } from "vue";
import App from "./App.vue";
import { VueReCaptcha } from "vue-recaptcha-v3";

createApp(App).use(VueReCaptcha, { siteKey: "6LejEqYpAAAAAJsc4oBEPFvGEI0paqbzV3aUF5V0" }).mount("#app");
