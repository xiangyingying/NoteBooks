import Vue from 'vue';
import Router from 'vue-router';
import Music from '@/pages/Music'
import Mv from '@/pages/Mv'
import All from '@/pages/All'
Vue.use(Router);
export default new Router({
    mode:"hash",
    routes:[
        {
            path:'/music',
            name:"music",
            component:Music
        },
        {
            path:'/mv',
            name:"mv",
            component:Mv
        },
        {
            path:'/all',
            name:"all",
            component:All
        },
        {
            path:'/detail',
            name:"detail",
            /* 异步路由 */
            component:()=>import('@/pages/Detail')
        }

    ]
})