<template>
  <div id="app">
    姓名：<input type="text" v-model="name">
    年龄：<input type="text" v-model="age">
    <button @click="handleAdd">添加</button>
    <home-table :data="arr" @deleteItem="handleDelete()"></home-table>
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
      arr:[
        {name:"zhang",age:10}
      ]
    }
  },
  components: {
   HomeTable
  },
  methods:{
    handleAdd(){
      this.arr.push({name:this.name,age:this.age})
    },
    handleDelete(index){
      console.log(1)
    }
  }
}
</script>

<style>

</style>
