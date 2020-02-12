#### 动画

```
 <transition>
        <p v-show="isShow">动画</p>
 </transition>
  <button @click="handleClick">按钮</button>
```

![](E:\我的\Vue\Vue-cli\09music\src\assets\transition.png)

  .v-leave-active，.v-enter-active  监听动画的执行过程

可以不要显示的状态

leave   从显示到隐藏  关注v-leave-to

```
<style scoped>
  /* scoped：避免样式重叠 */
  .v-leave{            //可不要
    opacity: 1;           
  }
 .v-leave-active{
    transition:opacity 1s
  }
  .v-leave-to{
    opacity: 0;
  }
</style>
```

enter  从隐藏到显示   关注v-enter

```
.v-enter{
    opacity: 0;
  }
.v-enter-to{           //可不要
    opacity: 1;
  }                    
.v-enter-active{
    transition:opacity 1s
  }
```

##### 1-2 动画封装成插槽

封装

```
<template>
   <transition>
      <slot name="fade"></slot>
    </transition>  
</template>
<script>
export default {
  name: 'Fade',
}
</script>
<style scoped>
 .v-leave-active,.v-enter-active{
    transition:opacity 1s
  }
  .v-leave-to,.v-enter{
    opacity: 0;
  }
</style>
```

引用

```
<fade>
    <h1 slot="fade" v-show="isShow">This is an about page</h1>
</fade>
```

#### 二 、三元表达式

```
<img :src="isPlay?require('@/assets/play.png'):require('@/assets/pause.png')" @click="toggle">
export default {
  ...
  data(){
    return {
      isPlay:false
    }
  },
  methods:{
    toggle(){
      this.isPlay = !this.isPlay
    }
  }
};
</script>
```

#### 三、获取DOM

```
//1.给元素设置ref属性
<p @click="getDom" ref="music">音乐播放</p>

//2.this.$refs.music
export default {
  ...
  methods: {
    getDom(){
      console.log(this.$refs.music)
    }
  }
};
```

#### 四 音乐播放

```
 <img :src="isPlay?require('@/assets/pause.png'):require('@/assets/play.png')" @click="toggle" alt="">
<audio 
    @play="onPlay" @pause="onPause"
    :src="playUrl" controls ref="audio">
</audio>
```

```
 <script>
export default {
  data() {
    return {
      playUrl:"https://music.163.com/song/media/outer/url?id=35625825",
      isPlay: false
    };
  },
  methods: {
    toggle() {
       if(this.isPlay){
         this.$refs.audio.pause()
         this.isPlay = false
       }else{
         this.$refs.audio.play()
         this.isPlay = true
       }
    },
    //监听音乐播放
    onPlay(){
      this.isPlay = true
    },
    //监听音乐暂停
    onPause(){
      this.isPlay =  false
    }
  }
};
</script>
```

