const router = require('koa-router')()
const GoodesModel=require('../models/goods')
router.get('/goods/list', async (ctx) => {
  var {start,limit}=ctx.query
  var total=await GoodesModel.find({}).count()
  var data=await GoodesModel.find({}).skip(Number(start)).limit(Number(limit))
  ctx.body={
    code:200,
    msg:"数据请求成功",
    result:data,
    total:total
  }
})
router.get('/goods/price',async ctx=>{
  var {gt,lt}=ctx.query;
  var data=await GoodesModel.find({salePrice:{$gt:gt,$lt:lt}})
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
      msg:"没有数据",
    }
  }
})
module.exports = router
