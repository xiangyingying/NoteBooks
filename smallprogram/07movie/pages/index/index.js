const http=require('../../utils/http')
Page({
  data: {
   movies:[],
   total:"",
   isEnd:false
  },
 
  onLoad: function () {
    http.getTop250({start:0}).then(res=>{
      var {subjects,total}=res.data;
      this.setData({
        movies:subjects,
        total
      })
    })
  },
  onReachBottom(){
    var length=this.data.movies.length;
    if(length<this.data.total){
      http.getTop250({start:length}).then(res=>{
        var {subjects}=res.data;
        this.setData({
          movies:[...this.data.movies,...subjects]
        })
      })
    }else{
         this.setData({
           isEnd:true
         })
    }
   
  },
  onPullDownRefresh(){
    http.getTop250({start:0}).then(res=>{
      var {subjects,total}=res.data;
      this.setData({
        movies:subjects,
        total
      })
    })
  }
})
