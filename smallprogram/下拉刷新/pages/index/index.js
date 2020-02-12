const http=require('../../utils/http')
Page({
  data: {
    offset:0,
    playlists:[],
  },
  onReachBottom(){
    var offset=this.data.offset;
    offset+=30;
    http.getCatData(offset).then(res=>{
      var {playlists}=res.data;
      this.setData({
        offset,
        playlists:this.data.playlists.concat(playlists)
      })
    })
  },
  onLoad: function () {
    http.getCatData(this.data.offset).then(res=>{
      var playlists=res.data.playlists;
      this.setData({
        playlists
      })
    })
  }
})
