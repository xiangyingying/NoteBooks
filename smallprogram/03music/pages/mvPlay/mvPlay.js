// pages/mvPlay/mvPlay.js
const http=require('../../util/http')
Page({

  data: {
   url:""
  },

  onLoad: function (options) {
     var {id}=options;
     http.getMvUrl(id,res=>{
       this.setData({
         url:res.data.data.url
       })
       console.log(res.data.data.url)
     })
  },

  
})