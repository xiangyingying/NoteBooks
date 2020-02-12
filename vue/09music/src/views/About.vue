<template>
  <div class="about">
    <fade>
    <h1 slot="fade" v-show="isShow">This is an about page</h1>
    </fade>
    <img :src="isPlay?require('@/assets/play.png'):require('@/assets/pause.png')" @click="handlePlay" alt="">
  </div>
</template>
<script>
import Fade from "../components/Fade"
export default {
  components:{
    Fade
  },
  data(){
    return{
      isShow:true,
      isPlay:true
    }
  },
  methods:{
    handlePlay(){
      this.isPlay=!this.isPlay
    }
  }
}
</script>
