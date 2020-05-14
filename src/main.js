import "core-js/stable";
import "regenerator-runtime/runtime";
import "intersection-observer"; // Optional

import Vue from "vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import Clipboard from "v-clipboard";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from "./router";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.use(Clipboard);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
