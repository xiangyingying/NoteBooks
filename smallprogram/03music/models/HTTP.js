
var baseUrl = "http://192.168.14.49:3000/"
function HTTP(url,data){
   return new Promise((resolve,reject)=>{
        wx.request({
            url: baseUrl+url,
            data,
            header: {'content-type':'application/json'},
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (res)=>{
                resolve(res)
            },
            error: (err)=>{
                reject(err)
            }
        });
    })
    
}
module.exports = {
    getSearch:(keywords)=>{
        return HTTP("search",{keywords})
    },
    getDetail:(ids)=>{
        return HTTP("song/detail",{ids})
    }
}