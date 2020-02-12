import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "amfe-flexible/index.js"
import Vant from 'vant'
import 'vant/lib/index.css'
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
Vue.use(Lazyload);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
