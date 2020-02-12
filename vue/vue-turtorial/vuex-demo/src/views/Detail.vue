<template>
    <div>
        城市详情页
        <router-link @click.native="handleClick(item)"
         to="/" v-for="item of cities" :key="item">
          <p>{{item}}</p>
        </router-link>
    </div>
</template>

<script>
    export default {
        name:"Detail",
         data(){
            return{
                cities:["上海","重庆","南京","广东","武汉"]
                }
             },
         methods:{
             handleClick(city){
                 console.log(city)
                 /* this.$store.dispatch 向vuex派发一个事件，同时传递一个参数 */
                  this.$store.dispatch("changeCity",city) 
             }
         },
        /*  mounted(){
             console.log(this.$store)
         } */
    }
</script>

<style scoped>

</style>