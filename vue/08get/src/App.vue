<template>
  <div id="app">
    <div id="nav"> 
      <router-link to="/music">音乐</router-link>
      <router-link to="/mv">MV</router-link>
      <router-link to="/all">All</router-link>
      <router-link to="/detail">Detail</router-link>
    </div>
     <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="less">
#app #nav .router-link-exact-active{
  color:blue;
}
#app {
  background:#C20C0C;
  width:10rem;
  margin-left: auto;
  margin-right: auto;
  font-size: 35px;
}
</style>
