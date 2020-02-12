<template>
  <div id="app">
      姓名:<input type="text" v-model="name">
      年龄: <input type="text" v-model="age">
      <button @click="handleAdd">添加</button>
      <home-table :data="arr" @deleteItem="handleDelete"></home-table>
  </div>
</template>

<script>
import HomeTable from './components/HomeTable'
export default {
  name: 'app',
  data(){
    return {
      name:"",
      age:"",
      num:1,
      arr:[
        {name:"张三",age:19}
      ]
    }
  },
  components:{
    HomeTable
  },
  methods:{
    handleAdd(){
      this.arr.push({
        name:this.name,
        age:this.age
      })
    },
    handleDelete(index){
      console.log(index)
     /*  this.arr.splice(index,1) */
    }
  }
}
</script>

<style>

</style>
