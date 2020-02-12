//index.js
const MusicModel = require('../../models/MusicModel')
Page({
  data:{
    musics:[]
  },
  async onLoad() {
    var data = await MusicModel.getCat();
    var playlists = data.data.playlists;
    var arr = [ ]
    playlists.forEach(item=>{
      var obj = {};
      obj.name = item.name;
      obj.id = item.id;
      obj.cover  = item.coverImgUrl;
      obj.playCount = item.playCount;
      arr.push(obj)
    })
    this.setData({
      musics:arr
    })
  },
  handleToggle(event){
    var {id,index}=event.detail;
    console.log(index)
    var musics=this.data.musics;
    musics.splice(index,1)
    this.setData({
      musics
    })
    /* wx.navigateTo({
      url: '/pages/detail/detail?id'+id,
    }) */
  }
})
