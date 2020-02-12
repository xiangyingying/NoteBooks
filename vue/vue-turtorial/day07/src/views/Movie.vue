<template>
  <div>movie
      <router-link tag="p" :to="'/detail/'+item.id" v-for="item of playlists" :key="item.id">
          {{item.name}}
      </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playlists: ""
    };
  },
  mounted() {
    var url = "http://192.168.14.49:5000/top/playlist?cat=华语";
    this.axios.get(url).then(res => {
      var playlists = res.data.playlists;
      this.playlists = playlists;
    });
  }
};
</script>

<style scoped>
</style>