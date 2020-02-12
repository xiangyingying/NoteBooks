const http=require('../../utils/http')
Page({
  data: {
  offset:0,
  },
  
  onLoad: function () {
     http.getCat({offset:this.data.offset}).then(res=>{
       var {playlists}=res.data;
       this.setData({
         playlists
       })
     })
  },
  onReachBottom(){
    var offset=this.data.offset;
    offset+=50;
    console.log(offset)
    http.getCat({offset:offset}).then(res=>{
      var {playlists}=res.data;
      console.log(playlists)
      this.setData({
        offset,
        playlists:this.data.playlists.concat(playlists)
      })
    })
  }
})
