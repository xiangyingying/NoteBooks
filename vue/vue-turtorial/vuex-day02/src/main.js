import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vant from 'vant'
import {Loading} from 'vant'
Vue.prototype.axios=axios
Vue.use(Loading)
Vue.use(Vant)

axios.interceptors.request.use(function (config) {
  store.state.isLoading = true;
  return config;
});


axios.interceptors.response.use(function (response) {
  store.state.isLoading=false;
  return response;
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
