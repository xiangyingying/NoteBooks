var baseUrl="https://douban-api.zce.now.sh/"
function http({url,data}){
    return new Promise((resolve,reject)=>{
        wx.request({
            url:baseUrl+url,
            data,
            header: {'content-type':'application/text'},
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (res)=>{
                resolve(res)
            },
            fail: (err)=>{
                 reject(err)
            }
        });
    })
}
module.exports={
    getTop250:({start})=>{
       return http({
           url:'v2/movie/top250',
           data:{
               start
           }
       })
    }
}