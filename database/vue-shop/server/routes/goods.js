const router = require('koa-router')()
const GoodsModel=require('../models/goods')
router.get('/goods/list', async (ctx) => {
  var data=await GoodsModel.find({});
  ctx.body={
    code:200,
    msg:"首页数据请求成功",
    result:data,
    total:data.length
  }
})
router.get("/goods/price",async ctx=>{
  /* 传递给后台的值，用ctx.query接收get传值，即是问号后面的值 */
   var {gt,lt}=ctx.query;
   var data=await GoodsModel.find({salePrice:{$gt:gt,$lt:lt}})
   if(data.length){
    ctx.body={
      code:200,
      msg:"数据请求成功",
      result:data,
      total:data.length
    }
   }else{
     ctx.body={
       code:1001,
       msg:"没有数据"
     }
   }
})
module.exports = router
