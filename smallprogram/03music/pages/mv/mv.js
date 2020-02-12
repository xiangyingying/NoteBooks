const http = require('../../util/http.js');
Page({

  data: {
    mvs:[]
  },
  onLoad: function (options) {
    http.getMvData(res=>{
      this.handleData(res)
    })
  },
  handleData(res){
    this.setData({
      mvs:res.data.data
    })
  },
  handleClick(event){
    var {id} = event.currentTarget.dataset
    wx.navigateTo({
      url: '/pages/mvPlay/mvPlay?id='+id,
    })
  }
  
})