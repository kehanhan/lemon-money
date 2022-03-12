import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Add from "@/views/Add.vue";
import Labels from "@/views/Labels.vue";
import Stats from "@/views/Stats.vue";
import NotFound from "@/views/NotFound.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/add",
  },
  {
    path: "/add",
    component: Add,
  },
  {
    path: "/labels",
    component: Labels,
  },
  {
    path: "/stats",
    component: Stats,
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
