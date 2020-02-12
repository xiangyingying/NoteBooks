import Vue from 'vue'
import VueRouter from 'vue-router'
import Films from '../views/Films.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/films',
    name: 'films',
    component: Films,
    children:[
      {
        path:'nowPlaying',
        component:()=>import('../views/NowPlaying.vue')
      },
      {
        path:'comingSoon',
        component:()=>import('../views/ComingSoon.vue')
      }
    ],
    /* redirect:"/films/nowPlaying" */
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/Detail.vue')
  },
  {
    path:'/',
    redirect:"/films/nowPlaying"
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
