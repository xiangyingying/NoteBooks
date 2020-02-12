## 父子组件传值

## 一、定义一个子组件

>1.组件的名字是以大写字母开头的
>
>2.驼峰命名



```js
//1.components/Table.vue
<template>
  <div>
    <div>
      <span>name:张三</span>--
      <span>age:18</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeTable"
};
</script>

<style>
</style>
```

## 二、在app.vue中导入子组件

```js
<script>
//2.导入子组件 
import HomeTable from './components/HomeTable'
export default {
  name: 'app',
  ....
  //3.需要在components属性中注册
  components:{
    HomeTable
  }
}
</script>

//4.在模板中使用
<template>
  <div id="app">
      ...
  		//可以使用下划线命名使用
      <home-table ></home-table>
  </div>
</template>
    
```

## 三、父组件向子组件传值

```js
//1.子组件通过属性接收父组件传递的参数
<home-table :data="arr"></home-table>
```

```js
//2.子组件接收的参数需要在props属性中注册
<script>
export default {
  name: "HomeTable",
  props: {
    data: {
      type: Array
    }
  }
};
</script>
```

## 四、子组件自定义事件向父组件传参

```js
//1.使用$emit方式自定义事件，向父组件传参
<button @click="handleDelete(index)">删除</button>
<script>
export default {
  ...
  methods:{
    handleDelete(index){
      this.$emit("deleteItem",index)
    }
  }
};
</script>
```

```js
//2.父组件接收子组件传递过来的事件参数
<home-table :data="arr" @deleteItem="handleDelete"></home-table>
<script>
import HomeTable from './components/HomeTable'
export default {
  name: 'app',
  ...
  methods:{
   
    handleDelete(index){
      console.log(index)
    }
  }
}
</script>
```

