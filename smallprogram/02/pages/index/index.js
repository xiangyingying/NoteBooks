//index.js
//获取应用实例
var a=require('../../models/http.js');
Page({
  data: {
    msg:"hello world",
    arr:['html','css','javascript'],
    isFocus:true,
    isPlay:false,
    test:false
  },
  handleConfirm(event){
    console.log(event.detail)
  },
  handleSubmit(event){
    console.log(event.detail.value)
  },
  handleClick(){
    this.setData({
      msg:"change"
    })
  },
  onLoad(){
    console.log(a)
    var reqTask=wx.request({
      url: 'http://192.168.14.49:3000/search?keywords=你',
      header: {
        'Content-Type': 'application/json'
      },
      method:"get",
      dataType:'json',
      success: (result)=> {
        console.log(result)
      }
    })
    console.log("onloading") 
  },
  onShow(){
    console.log("show")
  },
  onReady(){
    console.log("ready")
  },
  handleMusic(){
    this.setData({
      isPlay:!this.data.isPlay
    })
  }
 
})
