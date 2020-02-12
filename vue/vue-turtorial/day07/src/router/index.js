import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/About.vue')
  },
  {
    path: '/center',
    name: 'center',
    component: () => import( '../views/Center.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import( '../views/Detail.vue')
  },
  {
    path: '/movie',
    name: 'movie',
    component: () => import( '../views/Movie.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
