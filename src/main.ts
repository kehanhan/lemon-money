import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Nav from "@/components/Nav.vue";
import Layout from "@/components/Layout.vue";
import Icon from "@/components/Icon.vue";
import CostTagListModel from "@/models/costTagListModel";
import IncomeTagListModel from "@/models/incomeTagListModel";

Vue.config.productionTip = false;
Vue.component("Nav", Nav);
Vue.component("Layout", Layout);
Vue.component("Icon", Icon);

window.selectedType = "-";
window.costTagList = CostTagListModel.fetch();
window.incomeTagList = IncomeTagListModel.fetch();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
