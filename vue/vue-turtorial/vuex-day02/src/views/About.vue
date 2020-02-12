<template>
  <div class="list">
      <list-item :data="item" v-for="item of subjects" :key="item.id"></list-item>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue'    
import {a,b} from './data'
export default {
  name: 'About',
  components:{
    ListItem
  },
  data(){
    return{
      subjects:[],
      total:"1000",
      start:''
    }
  },
  mounted(){
     this.axios.get('https://douban-api.zce.now.sh/v2/movie/top250').then(res=>{
       this.subjects=res.data.subjects
       localStorage.setItem("data",JSON.stringify(this.subjects))
       console.log(a)
       console.log(b)
    }) 
  },

}
</script>
<style scoped>
     .list{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 800px;
        margin: 20px auto;
    }
</style>
