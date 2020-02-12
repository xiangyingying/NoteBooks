<template>
    <div>
        <div @click="handleAdd">{{data}}</div>
    </div>
</template>

<script>
    export default {
        name:'Count',
        props:{
            data:{
                type:Number,
                required:true
            }
        },
        methods:{
            handleAdd(){
                 this.$emit("add")
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>