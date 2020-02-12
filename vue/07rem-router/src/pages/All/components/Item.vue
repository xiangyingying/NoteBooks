<template>
  <div>
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