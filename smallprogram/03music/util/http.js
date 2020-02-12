/* var baseUrl="https://music.aityp.com"
function http({
    url,
    data,
    callback
})  {
    wx.request({
        url: baseUrl+url,
        data: {},
        header:{
            'content-type':'appliction/json'
        },
        method: 'GET',
        dataType:"json",
        responseType:'text',
        success: function(res){
            callback(res)
        },
    })
} */
/* var baseUrl ="https://music.aityp.com/"
function http({url,data,callback}){
    wx.request({
        url: baseUrl+url,
        data: {},
        header: {'content-type':'application/json'},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: (res)=>{
            callback(res)
        }
    });
}
module.exports={
    getMvData:(callback)=>{
        http({
            url:'mv/first',
            callback:res=>{
                callback(res)
            }
        })
    },
    getMvUrl:(id,callback)=>{
        http({
            url:`mv/url?id=${id}`,
            success:res=>{
                callback(res)
            }
        })
    }
}; */
var baseUrl ="https://music.aityp.com/"
function http({url,data,success}){
    wx.request({
        url: baseUrl+url,
        data: {},
        header: {'content-type':'application/json'},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: (res)=>{
           success(res)
        }
    });
}
// module.exports = http;
module.exports = {
    getMvData:(callback)=>{
        http({
            url:'mv/first',
            success:res=>{
                callback(res)
            }
        })
    },
    getMvUrl:(id,callback)=>{
        http({
            url:`mv/url?id=${id}`,
            success:res=>{
                callback(res)
            }
        })
    }
}