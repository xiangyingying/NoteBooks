<template>
  <div class="about">
    <h1 ref="dom">This is an about page</h1>
    <input type="text" v-model="msg" ref="dom">
  </div>
</template>
<script>
export default {
  name:"About",
  data(){
    return{
      msg:"hello world"
    }
  },
  beforeCreate(){
    console.log("组件被创建之前")
    console.log(this.msg)      //undefined
  },
  created(){
    console.log(this.msg)       //hello world
    console.log(this.$refs.dom)     //undefined
    console.log("组件被创建好了")      
  },
  /* 组件被装载到真实DOM元素之前 */
  beforeMount(){
    console.log("组件被装载之前")        
  },
  mounted(){
    console.log(this.$refs.dom)         //<input type="text">
    console.log("组件被装载到DOM上")
    window.addEventListener("scroll",this.go())      //1
  },
  /* data的数据更新，update生命周期函数会触发 */
  beforeUpdate(){
    console.log("beforeUpdate")
  },
  updated(){
    console.log("updated")
  },
  /* 从本页面跳到另一个页面触发的函数*/
  beforeDestroy(){
    console.log("组件被销毁之前")
  },
  /* 从本页面跳到另一个页面触发的函数*/
  destroyed(){
    window.removeEventListener("scroll",this.go)    //不会触发go()函数
    console.log("组件被销毁的时候")
  },
  methods:{
    go(){
      console.log(1)
    }
  }
}
</script>
