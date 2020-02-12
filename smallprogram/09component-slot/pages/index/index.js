
Page({
  data: {
   isPlay:true
  },
  handleClick(event){
    wx.navigateTo({
      url: '/pages/detail/detail?id='+1234,
      
    })
  },
  onLoad: function () {
    console.log("load")
  },
  onShow(){
    let storageinfo= wx.getStorageSync("isPlay")
    console.log(storageinfo)
    console.log(getApp())
  },
  onReady(){
    console.log("ready")
  },
  onHide(){
    console.log("hide")
  },
  onUnload(){
    console.log("unlod")
  }
})
