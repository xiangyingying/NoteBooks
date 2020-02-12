<template>
  <div class="about">
    <h1 class="nav" :style="{opacity:opacity}">This is an about page</h1>
    <!-- {{this.$store.state.city}} -->
    <img src="../assets/logo.png" alt="">
  </div>
</template>
<script>
export default {
  data(){
    return{
      opacity:0
    }
  },
  mounted(){
    window.addEventListener("scroll",this.handle)
  },
  methods:{
    handle(){
      var height=document.documentElement.scrollTop
       
        var opacity=height/300;
       console.log(opacity)
      if(opacity>1){
        opacity=1
      }
     this.opacity=opacity 
    } 
  },
  destroyed(){
  window.removeEventListener("scroll",this.handle)
}  
}
</script>
<style scoped>
      .nav{
        width: 100%;height: 20px;
        background: pink;
        position: fixed;
        top: 0;left: 0;
      }
      .about{
        height: 5000px;
      }
      img{
        height: 1000px;width: 100%;
      }
</style>
