
Page({
  data: {
    tabs:['首页','电影','音乐'],
    currentIndex:""
  },
  handleItem(event){
     var index=event.currentTarget.dataset.index
     console.log(index)
     this.setData({
       currentIndex:index
     })
  },
  onLoad: function () {

  }
})
