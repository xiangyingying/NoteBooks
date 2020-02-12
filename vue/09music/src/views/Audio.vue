<template>
    <div class="item">
        <p @click="getDom" ref="music">音乐播放</p>
        <img :src="isPlay?require('@/assets/pause.png'):require('@/assets/play.png')" @click="handlePlay" alt="">
        <audio @play="onPlay" @pause="onPause" :src="playUrl" controls ref="audio"></audio>
    </div>
</template>

<script>
    export default {
        name:"Audio",
        data(){
            return{
            playUrl:'https://music.163.com/song/media/outer/url?id=35625825',
            isPlay:false,
             isShow:false
                 }       
         },
        methods:{
            handlePlay(){
            if(this.isPlay){
                this.$refs.audio.pause()
                this.isPlay=false
            }else{
                this.$refs.audio.play()
                this.isPlay=true
            }
            },
            getDom(){
               console.log(this.$refs.music)
            },
            onPlay(){
                this.isPlay=true
            },
            onPause(){
                this.isPlay=false
            }
        }
    }
</script>

<style  scoped>
    audio{
        outline: none;
        visibility: hidden;
    }
    .item{
        width: 200px;
        margin: 20px auto;
    }
</style>