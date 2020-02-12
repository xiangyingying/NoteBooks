### 一 this.$store.commit()

##### 使用commit派发一个事件给mutations

1.派发事件

```
...
     <h2 @click="handleClick">{{this.$store.state.city}}</h2>
...
  methods:{
    handleClick(){
      this.$store.commit("changeCity")
    }
  }

```

2.接收store/index.js

```
  state: {
    city:"武汉"
  },
  /* 简单的更改状态(state)的逻辑*/
  mutations: {
    changeCity(state){
      state.city="成都"
    }
  }
```

例子：做一个加减操作

```
...
     <h2>{{this.$store.state.count}}</h2>
     <button @click="handleAdd">增加</button>
     <button @click="handleReduce">减少</button>
...

<script>
export default {
  name: 'home',
  methods:{
    handleAdd(){
      return this.$store.commit("add")
    },
    handleReduce(){
      return this.$store.commit("reduce")
    }
  }
}
</script>
```

```
state: {
    count:0
  },
  mutations: {
   add(state){
      state.count++
   },
   reduce(state){
     if(this.state.count<=0){
       state=0
     }else{
      state.count--
     }
   }
  },
```

或dispatch派发

```
return this.$store.dispatch("add")
```

```
actions: {
    add(ctx){
      ctx.commit("myAdd")
    }
  },
mutations:{
   myAdd(state){
      state.count+=1
   }
  },
```

### 二 mapState,mapActions,mapMutations,mapGetters

1.mapState

tips:当state里面存在多个状态时，用计算属性一条一条的取值很麻烦,使用辅助函数mapState效率很高

```
  state: {
    city:"重庆",
    name:"xiangyingying",
    age:18,
    sex:"女"
  },
```

```
  ...
   <h2>{{age}}</h2>
...
<script>
import {mapState} from 'vuex'
export default {
  name: 'home',
  computed: {
      ...mapState(['city','name','age','sex'])
  },
}
</script>
```

2.mapActions

映射actions()中的事件

```
 methods:{
    ...mapActions(['add','reduce']),
    handleAdd(){
      this.add()
    },
    handleReduce(){
     this.reduce()
    }
  }
```

改造

```
<button @click="add">增加</button>
<button @click="reduce">减少</button>
...
import {mapActions} from 'vuex'
export default {
  name: 'home',
  methods:{
    ...mapActions(['add','reduce']),
}
```

3.mapMutations

```
import {mapMutations} from 'vuex'
...
  methods:{
    ...mapMutations(['myAdd','myReduce']),
    handleAdd(){
      this.myAdd()
    },
    handleReduce(){
     this.myReduce()
    }
  }
```

改造

```
...
     <button @click="myAdd">增加</button>
     <button @click="myReduce">减少</button>
...
<script>
import {mapMutations} from 'vuex'
...
  methods:{
    ...mapMutations(['myAdd','myReduce'])
  }

```

4 getters    mapGetters:将store中方法的映射到computed()局部

```
 /* 对state中的数据进行再次处理 */
getters:{
    myCount(state){
      return "当前数量:"+state.count
    }
  },
```

```
<template>
  <div class="home">
     <h2>{{this.$store.state.count}}</h2>
     <button @click="myAdd">增加</button>
     <button @click="myReduce">减少</button>
     <h3>{{myCount}}</h3>
  </div>
</template>

<script>
import {mapMutations,mapGetters} from 'vuex'
export default {
  name: 'home',
  methods:{
    ...mapMutations(['myAdd','myReduce'])
  },
  computed: {
    ...mapGetters(['myCount'])
  },
}
</script>

```

### 三 moduls

作用：当store对象非常复杂的时候，我们可以需求将其拆分成不同的模块

1 新建modules文件夹，里面装info.js和user.js

<img src="E:\我的\Vue\Vue-cli\vuex-day02\src\assets\无标题.png" style="zoom: 80%;" />

info.js

```
const info={
    state:{
        tips:12,
        news:"新闻"
    },
    mutations:{},
    actions:{},
    getters:{}
}
export default info
```

user.js

```
const user={
    state:{
        name:"xiangyingying"
    },
    mutations:{},
    actions:{},
    getters:{}
}
export default user
```

index.js导入

```
import user from './modules/user'
import info from './modules/info'
export default new Vuex.Store({
  modules: {
    user,
    info
  }
})
```

vue使用

```
<h3>{{this.$store.state.info.tips}}</h3>
```

2 使用mapState,mapMutations

```
<template>
  <div class="home">
     <h2>首页</h2>
      <h3>{{news}}</h3>
      <h3>{{tips}}</h3>
      <h3>{{name}}</h3>
      <button @click="add">增加</button>         //达到增加，减少的效果
      <button @click="reduce">减少</button>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
  name: 'home',
  computed: {
    ...mapState({
      tips:state=>state.info.tips,
      news:state=>state.info.news,
      name:state=>state.user.name
    })
  },
  methods:{
    ...mapMutations(['add','reduce'])
  }
}
</script>
```

info.js

```
const info={
    state:{
        tips:12,
        news:"新闻"
    },
    mutations:{
        add(state){
            state.tips++        //增加
        },
        reduce(state){          //减少
            state.tips--
        }
    },
    actions:{},
    getters:{}
}
export default info
```

### 四  加载条

1.发送请求之前vuex isLoading  true   发送成功之后vuex isLoading  false

2.http拦截 axios拦截器

### 五 模块化

第一种 ：export default

```
//data.js
var a=10;
var b=3;
export default {
    a,b      //导出的是对象
}

//vue
import data from './data' 
console.log(data)         //{a: 10, b: 3}   是一个对象
```

第二种：export

```
//data.js
var a=10;
var b=3;
export {
    a,b      
}

//vue
import {a,b} from './data'
console.log(a)
console.log(b)
```

### 六 滑动

```
    <style>
        .wrapper{
            overflow-x: auto;
            overflow-y: hidden;
            border: 1px solid #333;
        }
        img{
            width: 250px;
        }
        .container{
            display: grid;
            grid-template-columns: repeat(5,250px);
            gap: 10px;    /* 左右间隔 */
        }
    </style>
</head>
<body>
    <div class="wrapper">
        <div class="container">
            <img src="src/assets/logo.png" alt="">
            <img src="src/assets/logo.png" alt="">
            <img src="src/assets/logo.png" alt="">
        </div>
    </div>
</body>
```

### 七 命名路由

```
//配置
{
    path: '/test',
    //命名路由
    name: 'test',
    component: () => import('../views/Test.vue')
  },
 
 //跳转
 
```

