### 一 vuex

#### 1 获取vuex-state里面的数据

store/index.js

```
export default new Vuex.Store({
  state: {
    city:"武汉"
  },
```

##### 1-1 vue  在mounted()和computed()都可以获取，可以跨页面传参

```
  <p>{{city}}</p>
   ...
  mounted(){
    console.log(this.$store.state.city)
  },
  computed:{
    city(){
      return this.$store.state.city
    }
   ...
```

##### 1-2 通过this.$store.dispatch 向vuex的actions派发一个事件，同时传递一个参数

tip:给组件@click事件加native

```
@click.native="handleClick(item)"
```

```
   methods:{
             handleClick(city){
                 this.$store.dispatch("changeCity",city)
             }
         },
```

##### 1-3 在vuex的actions接收dispatch派发过来的的参数

```
actions: {
    changeCity(ctx,city){
      /* ctx表示上下文 相当于this.$store
      city是自定义事件传递过来的参数 */
      ctx.commit("toggleCity",city)
    }
  },
```

##### 1-4  在actions使用commit方法向mutations提交一个事件，同时传递一个参数

```
ctx.commit("toggleCity",city)
```

##### 1-5  在mutations接收commit方法提交过来的事件，同时改变state中的状态

```
mutations: {
    toggleCity(state,city){
      state.city=city;
    }
  },
```

![](E:\我的\Vue\Vue-cli\vuex-demo\src\assets\vuex流程图.jpg)

### 二 数据持久化

```
function getCity(){
  let defaultCity="武汉";
  if(localStorage.getItem("city")){
    defaultCity=localStorage.getItem("city")
  }
  return defaultCity
}
export default new Vuex.Store({
  state: {
    city:getCity()
  },
  mutations: {
     changeCity(state,city){
       state.city=city
     }
  },
  actions: {
    changeCity(ctx,city){
      ctx.commit("changeCity",city)
      localStorage.setItem("city",city)
    }
  },
```

### 三 地图

##### 1、登陆开发者平台

```
http://lbsyun.baidu.com/
```

![map.png](https://cdn.nlark.com/yuque/0/2019/png/327963/1574148645803-d90f259f-4c19-451d-b9ed-8440f7795a64.png)

##### 2、创建应用获取AK

```
fwtB4BCFQhxa7ejuWTsy6GBDIEtGGGqG
```

![map02.png](https://cdn.nlark.com/yuque/0/2019/png/327963/1574148971254-94d8ed6d-71b0-45f1-8bc2-faa34fba964a.png)

##### [3、api文档](http://lbsyun.baidu.com/index.php?title=jspopular)

```
http://lbsyun.baidu.com/index.php?title=jspopular
```

##### [4、坐标拾取](http://api.map.baidu.com/lbsapi/getpoint/index.html)

```
http://api.map.baidu.com/lbsapi/getpoint/index.html
```

##### 5、demo

```
http://lbsyun.baidu.com/jsdemo.htm#a1_2
```

### 四 子路由-嵌套路由

##### 1.在主路由的children里面配置子路由

```
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
    ]
  },
```

##### 2.在主路由对应 的组件中去设置router-view

目的：router-view去装载这些子路由，router-view本质是一个动态路由

```
<router-link to="/films/nowPlaying">正在热映</router-link>       //导航栏，对两个子路由进行切换
<router-link to="/films/comingSoon">即将上映</router-link>
<router-view></router-view>
```

##### 3.路由重定向

```
...
redirect:"/films/nowPlaying"
```

```
const router = new VueRouter({
  routes: [
    { path: '/a', redirect: '/b' }
  ]
})
```

或

```
{
    path:'/',
    redirect:"/films/nowPlaying"
  }
```

### 五 vw

#### 1 在项目根目录的`postcss.config.js`文件中增加配置项

- `postcss.config.js`全部内容

```
module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-aspect-ratio-mini": {}, 
      "postcss-write-svg": {
        utf8: false
      },
      "postcss-cssnext": {},
      "postcss-px-to-viewport": {
        viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750 
        viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置 
        unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除） 
        viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw 
        selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类，可以自定义，        可以无限添加,建议定义一至两个通用的类名 
        minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值 
        mediaQuery: false // 允许在媒体查询中转换`px` 
      }, 
      "postcss-viewport-units":{},
      "cssnano": {
        preset: "advanced",
        autoprefixer: false,
        "postcss-zindex": false
      },
  }
}
```

#### 3. 使用`npm`下载相关包

```
npm i cssnano postcss-aspect-ratio-mini postcss-cssnext postcss-px-to-viewport postcss-viewport-units postcss-write-svg -S

npm i cssnano-preset-advanced -D
npm i postcss-import postcss-url autoprefixer -D
```

#### 4. 在`index.html`引入js插件并使用该插件

```
<script src="//g.alicdn.com/fdilab/lib3rd/viewport-units-buggyfill/0.6.2/??viewport-         units-buggyfill.hacks.min.js,viewport-units-buggyfill.min.js"></script>
    <script>
      window.onload = function () {
        window.viewportUnitsBuggyfill.init({
          hacks: window.viewportUnitsBuggyfillHacks
        });
      }
</script>
```

六 渐隐渐显的导航

1.style样式的绑定

2.生命周期

3.事件监听

```

    <h1 class="nav" :style="{opacity:opacity}">This is an about page</h1>

</template>
<script>
export default {
  data(){
    return{
      opacity:0.2
    }
  },
  mounted(){
    window.addEventListener("scroll",this.handle)
  },
  methods:{
    handle(){
      var height=document.documentElement.scrollTop     //是window的事件
     /* if(height>300){
        this.opacity=1
        console.log(this.opacity)
      }else{
        this.opacity=0.2
      }  */
      
      var opacity=height/300;
      if(opacity>1){
        opacity=1
      }
     this.opacity=opacity
    } 
  }
} ,
destroyed(){
  window.removeEventListener("scroll",this.handle)       //对影响页面移除事件监听
}
}
</script>
<style scoped>
      .nav{
        width: 100%;height: 20px;
        background: pink;
        position: fixed;
        top: 0;left: 0;
      }
      .about{
        height: 1500px;
      }
</style>

```

六 使用scss

安装插件Easy Sass