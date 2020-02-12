Page({
  data: {
   logo:"",
   name:"",
  },
  onLoad: function () {
    wx.getSetting({
      success: (res)=>{
         if(res.authSetting['Scope,userInfo']){
          wx.getUserInfo({
            success: (res)=>{
              var {nickName,avatarUrl}=res.userInfo
              this.setData({
              logo:avatarUrl,
              name:nickName
                })
            }
          })
         }
      }
    });   
  },
  onGetUserInfo(e){
    var {nickName,avatarUrl}=e.detail.userInfo
    this.setData({
      logo:avatarUrl,
      name:nickName
    })
  }
})
