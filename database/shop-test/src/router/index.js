import Vue from 'vue'
import VueRouter from 'vue-router'
import Goods from '../views/Goods.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Goods',
    component:Goods
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
