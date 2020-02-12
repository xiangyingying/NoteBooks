/* const HTTP=require('../../models/HTTP.js');
Page({
  data: {
      musics:[]
  },
  onLoad: async function(options){
      var res=await HTTP.getSearch("你");
        var songs = res.data.result.songs;
        var musics = []
        songs.forEach(async item=>{
          var min=0;
          if(Math.floor(item.duration/1000/60)<10){
          min="0";
           }
          var sec=0;
          if(Math.floor(item.duration/1000%60)>=10){
           sec="";
           }
          var obj = {};
          obj.name = item.name;
          obj.id = item.id;
          var data=await HTTP.getDetail(item.id);
          console.log(data)
          obj.picUrl=data.data.songs[0].al.picUrl;
          obj.artistName = item.artists[0].name;
          obj.time = min+Math.floor(item.duration/1000/60)+":"+sec+Math.floor(item.duration/1000%60);
          obj.musicUrl = `https://music.163.com/song/media/outer/url?id=${item.id}`
          musics.push(obj)
        })
        this.setData({
          musics
        })
  },

}) */
 const HTTP = require('../../models/HTTP');
Page({
  data: {
    musics: []
  },
  onLoad: async function (options) {
    var res = await HTTP.getSearch("你");
    var songs = res.data.result.songs;
    var musics = []
    songs.forEach(async item => {
      var obj = {};
      obj.name = item.name;
      obj.id = item.id;
      var data = await HTTP.getDetail(item.id);
      obj.picUrl = data.data.songs[0].al.picUrl;
      obj.artistName = item.artists[0].name;
      obj.time = item.duration;
      obj.musicUrl = `https://music.163.com/song/media/outer/url?id=${item.id}`
      musics.push(obj)
    })
    this.setData({
      musics
    })
  }
}) 