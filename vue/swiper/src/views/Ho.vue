<template>
  <van-swipe :autoplay="3000">
  <van-swipe-item v-for="(image,index) of images" :key="index" @click="swiper">
    <img v-lazy="image" />
  </van-swipe-item>
</van-swipe>
</template>

<script>
import {ImagePreview} from 'vant'
    export default {
        name:"Ho",
        data() {
    return {
      images: [
        require('@/assets/logo.png'),
        require('@/assets/logo.png'),
        require('@/assets/logo.png'),
        require('@/assets/logo.png'),
        require('@/assets/logo.png'),
       
      ]
    }
  },
  methods:{
    swiper(){
      ImagePreview(this.images)
    }
  }
    }
</script>

<style lang="less" scoped>
     img{
         width: 200px;height: 200px;
     }
</style>