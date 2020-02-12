Page({
  data: {
    musics:[]
  },
  onLoad(){

  },
  handleSubmit(event){
    var keyword = event.detail.value.keyword;
    wx.request({
      url: `https://music.aityp.com/search?keywords=${keyword}`,
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res)=>{
        var songs = res.data.result.songs;
        var musics = []
        songs.forEach(item=>{
          var obj = {};
          obj.name = item.name;
          obj.id = item.id;
          obj.artistName = item.artists[0].name;
          obj.time = item.duration;
          obj.musicUrl = `https://music.163.com/song/media/outer/url?id=${item.id}`
          musics.push(obj)
        })
        this.setData({
          musics
        })
      }
    });
  }
})
