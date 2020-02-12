<template>
    <div>
        <div v-for="(item,index) of data" :key="item.name">
            <span>name:{{item.name}}</span>
            <span>age:{{item.age}}</span>
            <button @click="handleDelete(index)">删除</button>
        </div>      
    </div>
</template>
<script>
export default {
    name:"HomeTable",
    props:{
        data:{
            type:Array
        }
    },
    methods:{
        handleDelete(index){
           this.$emit("deleteItem",index)
        }
    }
}
</script>