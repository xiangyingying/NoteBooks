const router = require('koa-router')()
const UsersModel=require('../models/users')
router.prefix('/users')

router.get('/', async (ctx) =>{
  var data=await UsersModel.find({})
  ctx.body={
    code:200,
    msg:"数据请求成功",
    result:data,
  }
})
module.exports = router
