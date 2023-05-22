import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@/assets/style/common.css";
import "@/assets/fonts/font.css";
import VueCarousel from "vue-carousel";
import axios from "axios";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueCarousel);
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
