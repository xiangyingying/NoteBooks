<template>
    <div @click="add">
        {{data}}
    </div>
</template>

<script>
    export default {
        name:'Test',
        props:{
            data:{
                type:Number
            }
        },
        methods:{
            add(){
                this.$emit('update:data',12)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>