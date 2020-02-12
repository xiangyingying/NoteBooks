<template>
  <div class="container">
      <item :data="value"  v-for="value of playlists" :key="value.id"></item>
  </div>
</template>

<script>
import Item from './components/Item'
export default {
  name: "All",
  data(){
      return {
          playlists:[]
      }
  },
  components:{
      Item
  },
  mounted(){
      this.axios.get("/top/playlist").then(res=>{
          this.playlists = res.data.playlists;
      })
  }
};
</script>

<style lang="less" scoped>
.container{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap:10px 10px;
}
</style>