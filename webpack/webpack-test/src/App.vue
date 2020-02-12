<template>
    <div>
        <div v-for="item of musics" :key="item.id">
            <img :src="item.coverImgUrl" alt="">
            <p>{{item.name}}</p>
           
        </div>
    </div>
</template>
<script>
/* import axios from 'axios' */
export default {
    name:"App",
    data(){
        return{
            musics:[]
        }
    },
    mounted(){
        var url="https://music.aityp.com/top/playlist?cat=华语"
        this.axios(url).then(res=>{
            this.musics=res.data.playlists
        })
    }
}
</script>
<style scoped>
    
</style>