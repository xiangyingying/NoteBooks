<template>
  <div class="home">
      <transition>
       <p v-if="isShow">动画</p>
      </transition>  
      <button @click="handleClick">按钮</button>
     
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
  data(){
    return{
      isShow:true
    }
  },
  methods:{
    handleClick(){
      this.isShow=!this.isShow
    }
  },
  mounted(){
    axios.get("/api/index").then(res=>{
      console.log(res)
    })
  }
}
</script>
<style scoped>
  /* scoped：避免样式重叠 */
  /* leave  显示到隐藏*/
  /* .v-leave,.v-enter-to{
    opacity: 1;
  } */
 .v-leave-active,.v-enter-active{
    transition:opacity 1s
  }
  .v-leave-to{
    opacity: 0;
  }
  .v-enter{
    opacity: 0;
  }
</style>

