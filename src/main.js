import Vue from "vue";
// Plugins
import "./plugins";
// Components
import "./components";
import App from "./App";
import i18n from "@/i18n";
import router from "./router";
import store from "@/store";
// Sync router with store
import { sync } from "vuex-router-sync";
// events
import VueEvents from "vue-events";

// Sync store with router
sync(store, router);

// use events
Vue.use(VueEvents);

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
