import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 注册自定义组件
import request from "@/helper/request";

Vue.config.productionTip = false;
Vue.prototype.request = request;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
