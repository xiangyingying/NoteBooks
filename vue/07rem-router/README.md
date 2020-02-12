# 一、rem实现适配

### 1.安装rem

```
yarn add lib-flexible postcss-pxtorem
```

### 2.postcss.config.js

```js
module.exports = {
    plugins: {
        "postcss-pxtorem": {
            "rootValue": 75,
            "propList": ["*"]
        }
    }
}
```

### 3.main.js导入

```
import 'lib-flexible/flexible.js'
```

### 4.rem是为移动端而生的要在pc和pad上跑动,一定要在App.vue文件中加

```JS
<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<style>

 #app{
    width:10rem;
    margin-left:auto;
    margin-right:auto;
}
</style>
```

###  5.样式重置

```
//main.js
import '@/assets/css/reset.css'
```

# 二、配置路由

### 2-1 配置路由

```js
//routers/index.js
import Vue from 'vue';
import Router from 'vue-router';
import Music from '@/views/Music.vue'
import Mv from '@/views/Mv.vue'
Vue.use(Router);
export default new Router({
    mode:"history",
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
        }
    ]
})
```

### 2-2  App.vue

```js
<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>
```

### 2-3 main.js

```
import router from './routers'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

```

### 2-4 router-link

```js
<template>
  <div id="app">
    <div id="nav"> 
      <router-link to="/music">音乐</router-link>
      <router-link to="/mv">MV</router-link>
    </div>
     <router-view></router-view>
  </div>
</template>
```

## 三、全局过滤器

```js
//main.js
Vue.filter("format",function(val){
  if(val.length>6){
    val = val.slice(0,6)+"..."
  }
  return val
})
```

## 四、全局组件

```
//main.js  注册
import BsBtn from '@/components/BsBtn.vue';
Vue.component('BsBtn',BsBtn)
```

## 五、slot

```
//用法和小程序一样
```

## 六、拆分配置文件

src/utils/config.js

```
import Vue from 'vue'
import BsBtn from '@/components/BsBtn.vue'
import 'lib-flexible/flexible.js'
import '@/assets/css/reset.css'
Vue.filter("format",function(val){
  if(val.length>6){
    val=val.slice(0,6)+"..."
  }
  return val;
})
Vue.component('BsBtn',BsBtn)
```

main.js

```
import Vue from 'vue'
import App from './App.vue'
import router from './routers'
//导入
import './utils/config.js'
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
```

