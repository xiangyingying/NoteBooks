<template>
  <div class="home">
    <h4>{{count}}</h4>
    <count :data="count" @add="handleAdd"></count>
    <test :data.sync="count"></test>  
  </div>
</template>

<script>
import Count from '@/components/Count.vue'
import Test from '@/components/Test.vue'
export default {
  name: 'home',
  data(){
    return{
      count:10
    }
  },
  components:{
    Count,
    Test
  },
  methods:{
    handleAdd(){
      this.count++;
    }
  }
}
</script>
