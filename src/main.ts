import "../node_modules/ionicons/dist/ionicons";
import "../node_modules/bulma/css/bulma.min.css";
import "@/assets/css/main.css";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
/* eslint-disable */
Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ion-/]

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
