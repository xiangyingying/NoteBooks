<template>  
<!-- 子组件 -->
    <div>
        <img :src="data.images.small" alt="">
        <p>{{data.title}}</p>
    </div>
</template>
<script>
export default {
    name:"MovieItem",
    props:{
        data:{
            type:Object
        }
    }
}
</script>
<style scoped>
    
</style>
