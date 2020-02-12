<template>
  <div id="app">
     <movies :data="item" v-for="item of movies" :key="item.id"></movies>
  </div>
</template>

<script>
import axios from 'axios-jsonp-pro'
import movies from './components/movies'
export default {
  name: 'app',
  data() {
    return {
      movies:[]
    }
  },
  mounted(){
    var url="https://douban-api.uieee.com/v2/movie/top250";
    axios.jsonp(url).then(res=>{
      this.movies=res.subjects;
      console.log(this.movies)
    })
  },
  components:{
    movies
  }
}
</script>

<style>
 #app{
        width: 1000px;
        margin: 30px auto;
    }

</style>
