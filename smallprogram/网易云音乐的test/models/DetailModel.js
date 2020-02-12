const HTTP=require('./HTTP')
class DetailModel extends HTTP{
    static getDetail(){
        this.request({
            url:"playlist/detail",
            data:{
                id
            }
        })
    }
}
module.exports=DetailModel