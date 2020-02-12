<template>
    <div>
        <slot name="header"></slot>
        <button class="btn">默认按钮</button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
.btn{
    width:100px;
    height: 35px;
    background: red;
}
</style>