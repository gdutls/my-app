import Vue from "vue";
import App from "./App.vue";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router";
import ElementUI from "element-ui";
import store from "@/store";
import "./api/mock";
Vue.config.productionTip = false;
//全局引入
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
