import { createApp } from "vue";
import App from "./App.vue";
// import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";

/**
 * Plugins
 */
// import i18n from "@/plugins/vue-i18n";
// import head from "@/plugins/vueuse-head";

/**
 * Styles
 */
// import "virtual:windi.css"; // tailwindcss demon
// import "@/assets/sass/main.sass";

/**
 * init app
 */
createApp(App).use(ElementPlus).mount("#app");
