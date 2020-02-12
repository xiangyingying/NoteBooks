import Vue from 'vue';
import 'lib-flexible/flexible.js'
import '@/assets/css/reset.css'
import BsBtn from '@/components/BsBtn.vue';
import axios from 'axios'
Vue.filter("format", function (val) {
    if (val.length > 6) {
        val = val.slice(0, 6) + "..."
    }
    return val
})
axios.defaults.baseURL = 'http://192.168.14.49:5000';
Vue.prototype.axios = axios;
Vue.component('BsBtn', BsBtn)
export default Vue;