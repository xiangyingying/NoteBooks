const HTTP=require('./HTTP')
class IndexModel extends HTTP{
    static getCatChina(){
       return this.request({
            url:"top/playlist",
            data:{
                cat:"华语"
            }
        })
    }
    static getBanner(){
       return this.request({
            url:"banner"
        })
    }
    static getNewMUsic(){
      return this.request({
            url:"top/album"
        })
    }
}
module.exports=IndexModel