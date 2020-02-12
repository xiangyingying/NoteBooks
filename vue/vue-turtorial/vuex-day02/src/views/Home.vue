<template>
  <div class="home">
     <h2>首页</h2>
      <h3>{{news}}</h3>
      <h3>{{tips}}</h3>
      <h3>{{name}}</h3>
      <button @click="add">增加</button>
      <button @click="reduce">减少</button>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
  name: 'home',
  computed: {
    ...mapState({
      tips:state=>state.info.tips,
      news:state=>state.info.news,
      name:state=>state.user.name
    })
  },
  methods:{
    ...mapMutations(['add','reduce'])
  }
}
</script>
