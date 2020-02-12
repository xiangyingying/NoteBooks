<template>
    <div class="container">
        <button @click="handleCancel">取消</button>
    </div>
</template>

<script>
    export default {
        name:'Dialog',
        methods:{
            handleCancel(){
                this.$emit('cancel')
            }
        }
    }
</script>

<style scoped>
    .container{
        position: absolute;
        top: 0;
        left: 0;
        background: pink;
        right: 0;
        bottom: 0;
        opacity: .5;
    }
</style>