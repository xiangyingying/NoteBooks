<template>
  <div id="app">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="姓名">
        <el-input v-model="formInline.name" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="formInline.age" placeholder="年龄"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleAdd">添加</el-button>
      </el-form-item>
    </el-form>
     <home-table :arr="arr"></home-table>
    <!-- <div v-for="item of arr" :key="item.id">
  <p><span>{{item.name}}</span><span>{{item.age}}岁</span></p>
  <button @click="haneleDelete(item.name)">删除</button>
    </div>-->
  </div>
</template>

<script>
import HomeTable from './components/HomeTable'
export default {
  data() {
    return {
      formInline: {
        name: "",
        age: ""
      },
      arr: [{ name: "里斯", age: 10 }],
      index: ""
    };
  },
  methods: {
    handleAdd() {
      this.arr.push(this.formInline);
    },
    /* haneleDelete(name){
        var index=this.arr.findIndex(item=>item.name==name)
        this.arr.splice(index,1)
      }, */
   /*  handleDelete(index, row) {
      this.arr.splice(index,1)
    },
    indexMethod(index) {
      return index + 1;
    } */
  },
      components:{
      HomeTable
    }
};
</script>
<style lang="">
</style>
