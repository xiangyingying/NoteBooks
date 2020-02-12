const HTTP = require('../../models/HTTP');
Page({
  data: {
    musics: []
  },
  onLoad: async function (options) {
    var res = await HTTP.getSearch("你");
    var songs = res.data.result.songs;
    var musics = []
    for(let i=0;i<songs.length;i++) {
      var obj = {};
      obj.name =songs[i].name;
      obj.id = songs[i].id;
      var data = await HTTP.getDetail(songs[i].id);
      obj.picUrl = data.data.songs[0].al.picUrl;
      obj.artistName = songs[i].artists[0].name;
      obj.time =songs[i].duration;
      obj.musicUrl = `https://music.163.com/song/media/outer/url?id=${songs[i].id}`
      musics.push(obj)
      console.log(musics)
    }
    this.setData({
      musics
    })
  }
})