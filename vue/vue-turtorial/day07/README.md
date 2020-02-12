#### 一 单向数据流

在vue中子组件不能直接修改父组件传递过来的参数,在子组件中修改后不能回传给父组件。方法：定义一个事件进行回传

子组件

```
 methods:{
            handleAdd(){
                 this.$emit("add")
            }
        }
```

父组件

```
 <count :data="count" @add="handleAdd"></count>
```

```
methods:{
    handleAdd(){
      this.count++;
    }
  }
```

#### 二 双向数据流(importent)

可以修改

父组件

```
<test :data.sync="count"></test>
```

子组件

```
methods:{
            add(){
                this.$emit('update:data',12)
            }
        }
```

#### 三 模态框

子组件

```
<template>
    <div class="container">
        <button @click="handleCancel">取消</button>
    </div>
</template>

<script>
    export default {
        ...
        methods:{
            handleCancel(){
                this.$emit('cancel')
            }
        }
    }
</script>

<style scoped>
    .container{
        position: absolute;
        top: 0;
        left: 0;
        background: pink;
        right: 0;
        bottom: 0;
        opacity: .5;
    }
</style>
```

主组件

```
<template>
  <div class="about">
    <modal v-show="isShow" @cancel="handleCancel"/>
    <button @click="toggle">切换</button>
  </div>
</template>
<script>
...
export default {
  ...
  data(){
    return{
      isShow:false
    }
  },
  methods:{
    toggle(){
      this.isShow=!this.isShow
    },
    handleCancel(){
      this.isShow=false
    }
  }
}
</script>
```

#### 四 页面跳转

```
<router-link to="/detail" tag="button">
跳转到detail
</router-link>       
```

#### 五 动态路由

配置    router/indx.js   用id传

tag里面用什么跳转传什么

```
{
    path: '/detail/:id',
    name: 'detail',
    component: () => import( '../views/Detail.vue')
  },
```

```
//主页面
<router-link :to='`/detail?id=${item.id}`' tag="p">
    跳转到detail
  </router-link>
```

```
 //跳转页面
 mounted(){
            console.log(this.$route.params)
        }
```

#### 六 keep-alive  包裹路由-组件。缓存组件。之后组件不会被销毁。组件对应的几个生命周期函数不会重新触发。

```
<keep-alive>
      <router-view />
</keep-alive>
```

##### 当组件在 keep-alive内被切换，它的 `activated` 和 `deactivated` 这两个生命周期钩子函数将会被对应执行。发送的请求只会发送一次，不会触发跳转的页面的mounted生命周期函数

##### 3-2 解决mounted生命周期不执行的问题

1.exclude 
Tips:一定要给组件name属性

```
export default {
  name: "Detail",
  data() {
    return {
      imgUrl: ""
    };
  },
  mounted() {
    ...
  }
};
</script>
```

  keep-alive

```
<keep-alive exclude="Detail">
      <router-view />
</keep-alive>
```

2.不加exclude时，在activated() 生命周期执行函数

#### 七 动态组件

```
<button @click="handleToggle">toggle</button>    
        <keep-alive>
            <component :is="isToggle?'two':'one'"></component> 
        </keep-alive> 
     ...   
  data(){
            return{
                isToggle:false,
                one:"One",
                two:"Two"
            }
        },
       components:{
           One,
           Two
       },
       methods:{
          handleToggle(){
               this.isToggle=!this.isToggle
           }
       },
```

#### 八 vant-ui的局部导入

##### 5-1 安装依赖

```
yarn add vant  babel-plugin-import
```

##### 5-2 配置babel.config.js

```
module.exports = {
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
};
```

##### 5-3 main.js中配置

```
import { Button } from 'vant';
Vue.use(Button);
```