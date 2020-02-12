const http=require('../../utils/http')
Page({
  data: {
      offset:0,
      playlists:[]
  },

  onLoad:async function (options) {
      var res=await http.getCatData(this.data.offset)
      var {playlists}=res.data;
      console.log(playlists)
      this.setData({
        playlists
      })
  },
  onReachBottom(){
    var offset=this.data.offset;
    offset+=50;
    http.getCatData(offset).then(res=>{
      var {playlists}=res.data;
      
      this.setData({
        offset,
        playlists:this.data.playlists.concat(playlists)
      })
    })
  }

})