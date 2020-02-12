const router = require('koa-router')()
const UsersModel=require('../models/users')
const GoodsModel = require('../models/goods');
router.prefix('/users')

router.get('/', async ctx=> {
  var data=await UsersModel.find({});
  ctx.body=data;
})
router.post('/addCart',async ctx=>{
  var userId='100000077'
  var {productId}=ctx.request.body;
  var goodsData=await GoodsModel.findOne({productId:productId});
  var obj=JSON.parse(JSON.stringify(goodsData));
  obj.productNum=1;
  obj.checked=true;
  var userData=await UsersModel.findOne({});
  if(userData.cartList.every(item=>item.productId!=productId)){
    await UsersModel.update({userId:userId},{$push:{'cartList':obj}});
    ctx.body={
      msg:"添加成功",
      code:200
    }
  }else{
    ctx.body={
      msg:'已经添加至购物车',
      code:200
    }
  }
})
router.post('/login',async ctx=>{
  var {data}=ctx.request.body;
  var res=await UsersModel.findOne(data);
  if(res){
    ctx.body={
      code:200,
      msg:"登录成功"
    }
  }else{
    ctx.body={
      code:400,
      msg:"登录失败"
    }
  }
})
module.exports = router
