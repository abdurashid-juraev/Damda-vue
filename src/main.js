import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import store from "./store/store";
import i18n from "./i18n";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import { routes } from "./router/routes";
import SlideUpDown from "vue-slide-up-down";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VCalendar from "v-calendar";
import axios from "axios";
axios.defaults.baseURL = "https://api.gastromahalla.uz/v1/";
const router = new VueRouter({
  routes,
  mode: "history",
});

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.component("v-select", vSelect);
Vue.component("slide-up-down", SlideUpDown);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VCalendar);
Vue.use(axios);

new Vue({
  render: (h) => h(App),
  router,
  store,
  i18n,
}).$mount("#app");
