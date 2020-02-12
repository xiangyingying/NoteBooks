####  一、数据持久化

```
localStorage     //localStorage仅支持字符串。使用JSON.stringify()和JSON.parse().
sessionStorage
```

#####  sessionStorage     当前页面有效，关闭页面或浏览器后被清除

1. 设置缓存,到控制台Application中SessionStorage中查看

```
 <input type="text" v-model="keyword" @keyup.enter="handleEnter">
 ...
  methods:{
    handleEnter(){
      sessionStorage.setItem("keyword",this.keyword)
    }
  }
```

2. 获取缓存，

```
mounted(){
    var keyword=sessionStorage.getItem('keyword');
    if(keyword){
      this.keyword=keyword
    }
  }
```

##### localStorage

将sessionStorage换成localStorage。localStorage：除非被清除，否则永久有效

3. localStorage如何接收数组

```
 methods:{
    handleEnter(){
      this.arr.push(this.keyword)
      var words=JSON.parse(localStorage.getItem("words"));    //2. 解析对象
      words.push(this.keyword);            //3. words为空数组
      localStorage.setItem("words",JSON.stringify(words))      //4. 数组变为字符串
    }
  },
   mounted(){
    localStorage.setItem('words',"[]")       //1. 无缓存，设置缓存
  } 
```

```
 methods:{
    handleEnter(){
      this.arr.push(this.keyword)
      var words=JSON.parse(localStorage.getItem("words"));
      words.push(this.keyword);
      localStorage.setItem("words",JSON.stringify(words))
    }
  },
   mounted(){
     let words=localStorage.getItem("words")        //5. 有缓存，得到缓存
     if(words){
       this.arr=JSON.parse("words")
     }else{
       localStorage.setItem('words',"[]")
     }
   
  } 
```

4. localStorage如何接收对象

```
 methods:{
    handleEnter(){
      this.arr.push({word:this.keyword,checked:false})
      var words=JSON.parse(localStorage.getItem("words"));
      words.push({"word":this.keyword,"checked":false});
      localStorage.setItem("words",JSON.stringify(words))
    }
  },
```

6. 深度增听，可以监听对象里面的值

```
 watch:{
    arr:{
      handler(newVal){
       var words=JSON.parse(localStorage.getItem("words"));
      words=newVal;
      localStorage.setItem("words",JSON.stringify(words))
      },
      deep:true
    }
  }
```

#### 二、生命周期

```
<template>
  <div class="about">
    <h1 ref="dom">This is an about page</h1>
    <input type="text" v-model="msg" ref="dom">
  </div>
</template>
<script>
export default {
  name:"About",
  data(){
    return{
      msg:"hello world"
    }
  },
  beforeCreate(){
    console.log("组件被创建之前")
    console.log(this.msg)      //undefined
  },
  created(){
    console.log(this.msg)       //hello world
    console.log(this.$refs.dom)     //undefined
    console.log("组件被创建好了")      
  },
  /* 组件被装载到真实DOM元素之前 */
  beforeMount(){
    console.log("组件被装载之前")        
  },
  mounted(){
    console.log(this.$refs.dom)         //<input type="text">
    console.log("组件被装载到DOM上")
    window.addEventListener("scroll",this.go())      //1
  },
  /* data的数据更新，update生命周期函数会触发 */
  beforeUpdate(){
    console.log("beforeUpdate")
  },
  updated(){
    console.log("updated")
  },
  /* 从本页面跳到另一个页面触发的函数*/
  beforeDestroy(){
    console.log("组件被销毁之前")
  },
  /* 从本页面跳到另一个页面触发的函数*/
  destroyed(){
    window.removeEventListener("scroll",this.go)
    console.log("组件被销毁的时候")
  },
  methods:{
    go(){
      console.log(1)
    }
  }
}
</script>
```

#### 三、Vant-ui

3-1 安装依赖

```
yarn add postcss-pxtorem amfe-flexible
```

3-2 main.js引入依赖

```
import "amfe-flexible/index.js"
```

3-3 postcss.config.js

```
module.exports = {
  plugins: {
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
```

tip:public/index.html 加上视口

```
<meta name="viewport" content="width=device-width,initial-scale=1.0">
```

