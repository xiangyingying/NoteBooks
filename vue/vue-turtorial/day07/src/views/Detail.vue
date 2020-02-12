<template>
  <div>
    详情页面
    <van-button>按钮</van-button>
    <img :src="imgUrl" />
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      imgUrl: ""
    };
  },
 /*  mounted() {
    var id = this.$route.params.id;
    var url = "http://192.168.14.49:5000/playlist/detail?id=" + id;
    this.axios.get(url).then(res => {
      console.log(res.data.playlist.creator.avatarUrl);
      this.imgUrl = res.data.playlist.creator.avatarUrl;
    });
  }, */
  activated() {
       var id = this.$route.params.id;
    var url = "http://192.168.14.49:5000/playlist/detail?id=" + id;
    this.axios.get(url).then(res => {
      console.log(res.data.playlist.creator.avatarUrl);
      this.imgUrl = res.data.playlist.creator.avatarUrl;
    });
  }
};
</script>

<style scoped>
</style>