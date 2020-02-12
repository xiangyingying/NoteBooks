import Vue from 'vue';
import '../assets/index.css';
import App from './App.vue';
import axios from 'axios'
const root=document.createElement("div")
Vue.prototype.axios=axios;
document.body.append(root)
new Vue({
    render:h=>h(App)
}).$mount(root)
