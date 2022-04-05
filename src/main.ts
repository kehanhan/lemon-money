import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store/store";
import Nav from "@/components/Nav.vue";
import Layout from "@/components/Layout.vue";
import Icon from "@/components/Icon.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

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

if (document.documentElement.clientWidth > 500) {
  window.alert("推荐使用手机扫码打开本页面");
  const img = document.createElement("img");
  img.id = "qrcode";
  img.src = "/qrcode.png";
  img.style.position = "fixed";
  img.style.left = "50%";
  img.style.top = "50%";
  img.style.transform = "translate(-50%,-50%)";
  img.style.boxShadow = "0 0 10px rgba(0,0,0,0.25)";
  document.body.appendChild(img);
}

window.onclick = function (e: MouseEvent) {
  const qrcode = document.getElementById("qrcode");
  qrcode!.style.display = "none";
};
