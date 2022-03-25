import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store/store";
import Nav from "@/components/Nav.vue";
import Layout from "@/components/Layout.vue";
import Icon from "@/components/Icon.vue";

//替换Vue的store
Vue.prototype.$store = store;
Vue.config.productionTip = false;
Vue.component("Nav", Nav);
Vue.component("Layout", Layout);
Vue.component("Icon", Icon);

new Vue({
  router,
  // store,
  render: (h) => h(App),
}).$mount("#app");
