const appData=getApp()
Page({
  data: {
    isPlay:true,
    isCollect:"收集"
  },
  onLoad: function (options) {
     appData.globalData.isCollect=this.data.isCollect
     console.log(appData)
     wx.setStorageSync('isPlay', this.data.isPlay)
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },


  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
})