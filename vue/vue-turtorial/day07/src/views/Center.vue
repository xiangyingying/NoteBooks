<template>
    <div>
        个人中心
        <router-link to="/detail/3243544" tag="button">
        跳转到detail
        </router-link> 
        <button @click="handleToggle">toggle</button>    
        <keep-alive>
            <component :is="isToggle?'two':'one'"></component> 
        </keep-alive> 
    </div>
</template>

<script>
import One from '@/components/One.vue'
import Two from '@/components/Two.vue'
    export default {
        name:"Center",
        data(){
            return{
                isToggle:false,
                one:"One",
                two:"Two"
            }
        },
       components:{
           One,
           Two
       },
       methods:{
          handleToggle(){
               this.isToggle=!this.isToggle
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
            console.log("组件被销毁的时候")
        }
    }
</script>

<style lang="scss" scoped>

</style>