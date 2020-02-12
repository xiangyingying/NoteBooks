<template>
  <div id="app">
    <MovieItem :data="item" v-for="item of movies" :key="item.id"></MovieItem>
  </div>
</template>
<script>
import axios from "axios-jsonp-pro";
import MovieItem from './components/Item'
export default {
  name: 'app',
  data(){
    return{
     movies:[]
    };
  },
  components:{
    MovieItem
  },
  methods:{
    handleClick(){
      this.msg="change";
    }
  },
  mounted(){
    var url="https://douban.uieee.com/v2/movie/top250";
    axios.jsonp(url).then(res=>{
      this.movies=res.subjects;
    })
  }
}
</script>