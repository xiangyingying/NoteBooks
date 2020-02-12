<template>
  <div class="home">
      <transition>
      <slot name="fade"></slot>
      </transition>  
  </div>
</template>
<script>
export default {
  name: 'Fade',
}
</script>
<style scoped>
 .v-leave-active,.v-enter-active{
    transition:opacity 1s
  }
  .v-leave-to,.v-enter{
    opacity: 0;
  }
</style>