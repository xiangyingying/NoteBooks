<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <router-link  to="/detail">
        <p>{{city}}</p>
    </router-link>
    <router-link to="/films/nowPlaying">正在热映</router-link>
    <router-link to="/films/comingSoon">即将上映</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'Films',
 
  mounted(){
    /* console.log(this.$store.state.city) */
  },
  computed:{
    city(){
      return this.$store.state.city
    }
  }

}
</script>
<style >
     .home{
       height: 1500px;
     }
</style>
