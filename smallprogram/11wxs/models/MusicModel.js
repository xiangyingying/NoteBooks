const HTTP = require('./HTTP');
class MusicModel extends HTTP{
    static getCat(){
        return this.request({
            url:"top/playlist",
            data:{
                cat:"华语"
            }
        })
    }
}
module.exports = MusicModel;