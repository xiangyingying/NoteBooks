import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import { Button } from 'vant';
Vue.use(Button);
Vue.prototype.axios=axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
