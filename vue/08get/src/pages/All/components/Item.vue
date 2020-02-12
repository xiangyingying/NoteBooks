<template>
  <div @click="handleClick(data.id)">
    <img :src="data.coverImgUrl"  />
    <p>{{data.name | format()}}</p>
  </div>
</template>

<script>
export default {
    name:"Item",
    props:{
        data:{
            type:Object,
            required:true
        }
    },
    methods:{
        handleClick(id){
            this.$router.push(`/detail?id=${id}`)
        }
    }
};
</script>

<style lang="less" scoped>
img{
    width:250px;
    height: 250px;
}
p{
    font-size: 24px;
    color:#333;
}
</style>