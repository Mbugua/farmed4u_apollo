import "@/helpers/component-hooks";
import "../node_modules/ionicons/dist/ionicons";
import "../node_modules/bulma/css/bulma.min.css";
import "@/assets/css/main.css";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { ValidationProvider, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "This field is required"
});

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ion-/];

new Vue({
  router,
  store,
  components: {
    ValidationProvider
  },
  render: h => h(App)
}).$mount("#app");
