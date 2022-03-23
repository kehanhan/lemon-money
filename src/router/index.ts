import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Money from "@/views/Money.vue";
import Billing from "@/views/Billing.vue";
import Stats from "@/views/Stats.vue";
import NotFound from "@/views/NotFound.vue";
import TagSetting from "@/components/Money/TagSetting.vue";
import AddTag from "@/components/Money/AddTag.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/money",
  },
  {
    path: "/money",
    component: Money,
  },
  {
    path: "/billing",
    component: Billing,
  },
  {
    path: "/stats",
    component: Stats,
  },
  {
    path: "/tag-setting",
    component: TagSetting,
  },
  {
    path: "/addTag",
    component: AddTag,
  },
  {
    path: "*",
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
