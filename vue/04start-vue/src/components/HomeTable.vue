<template>
    <div>
        
        <el-table :data="arr" style="width: 100%">
      <el-table-column type="index" :index="indexMethod" label="编号"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    </div>
</template>
<script>
export default {
    name:"HomeTable",
    props:{
        arr:{
            type:Array
        }
    },
    methods:{
       handleDelete(index, row) {
      this.arr.splice(index,1)
    },
    indexMethod(index) {
      return index + 1;
    }
    }
}
</script>