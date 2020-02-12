<template>
  <div class="container">
    <div>detail页面内</div>
     <button @click="toggle">跳转回列表页</button>
  </div>
</template>

<script>
export default {
  name: "Detail",
  computed:{
    id(){
      return this.$route.query.id
    }
  },
  methods:{
    toggle(){
      this.$router.back()
    }
  }
};
</script>
<style  scoped>
.container{
  position:absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  z-index: 100;
  background: red;
}
</style>