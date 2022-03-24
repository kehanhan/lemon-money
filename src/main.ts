import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Nav from "@/components/Nav.vue";
import Layout from "@/components/Layout.vue";
import Icon from "@/components/Icon.vue";
import TagListModel from "@/models/TagListModel";

Vue.config.productionTip = false;
Vue.component("Nav", Nav);
Vue.component("Layout", Layout);
Vue.component("Icon", Icon);

window.selectedType = "-";
window.tagIcons = [
  "clothes",
  "food",
  "fun",
  "housing",
  "traffic",
  "bonus",
  "finance",
  "living-cost",
  "lottery",
  "part-time",
  "refund",
  "reimbursements",
  "salary",
];
window.costTagList = TagListModel.fetch("-");
window.incomeTagList = TagListModel.fetch("+");
window.newTag = (name: string, icon: string) => TagListModel.new(name, icon);
window.removeTag = (name: string) => TagListModel.remove(name);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
