const IndexModel=require('../../models/IndexModel')
Page({
  data: {
    // playlists:[],
    // banners:[],
    // albums:[]
  },
  onLoad:async function () {
    var cat = await IndexModel.getCatChina();
    var {playlists}=cat.data;
    var banner=await IndexModel.getBanner();
    var {banners}=banner.data;
    var newData=await IndexModel.getNewMUsic();
    var {albums}=newData.data;
    console.log(playlists)
    console.log(banners)
    console.log(albums)
    this.setData({
      playlists,
      banners,
      albums
    })
  }
})
