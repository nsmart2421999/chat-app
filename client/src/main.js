import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import socketio from "socket.io-client";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.prototype.$eventBus = new Vue();

Vue.prototype.$socketio = socketio("ws://localhost:3000");

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
