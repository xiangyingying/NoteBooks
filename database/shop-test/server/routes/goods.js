const router = require('koa-router')()
const GoodsModel=require('../models/goods')
router.get('/goods/list', async (ctx) => {
  var {start,limit}=ctx.query;
  var total=await GoodsModel.find({}).count();
  var data=await GoodsModel.find({}).skip(Number(start)).limit(Number(limit));
  ctx.body={
    code:200,
    msg:"首页数据请求成功",
    result:data,
    total:total
  }
})
router.get("/goods/price",async ctx=>{
   var {gt,lt}=ctx.query;
   var priceData=await GoodsModel.find({salePrice:{$gt:gt,$lt:lt}});
   if(priceData.length){
     ctx.body={
       code:200,
       result:priceData,
       total:priceData.length,
       msg:"数据请求成功"
     }
   }else{
     ctx.body={
       code:1001,
       msg:"没有找到数据"
     }
   }
})

module.exports = router
