const HTTP = require('./HTTP');
class MvModel extends HTTP{
    static getCat(){
        return this.request({
            url:"mv/first"
        })
    }
}
module.exports = MvModel;