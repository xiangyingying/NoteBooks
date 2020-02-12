### 一、koa脚手架

```
cmd安装依赖
npm i koa-generator -g
```

创建项目

到Powershell窗口创建

```
koa2 server
```

```
启动server项目
npm i
npm run dev
```

浏览器输入localhost:3000

![image-20191202112430979](C:\Users\Ying Ya\Desktop\image-20191202112430979.png)

### 二 、导入json数据

1.根目录建resource文件夹，将json数据放入resource

2.数据库导入json文件

![](C:\Users\Ying Ya\Desktop\monggo.gif)

### 三 、操作数据库   

models/db.js

```
const mongoose=require('mongoose')
mongoose.connect( 'mongodb://127.0.0.1:27017/shop', {useNewUrlParser: true},(err)=>{
    if(err){throw err};
    console.log("数据库连接成功")
});
module.exports=mongoose;
```

models/goods.js

```
const mongoose = require('./db')
var GoodsSchema =new mongoose.Schema({
    productId:String,
    productName:String,
    salePrice:Number,
    productImage:String,
    productUrl:String
})
var Goods= mongoose.model('Admin',GoodsSchema,'goods')
module.exports=Goods;
```

routes/index.js

```
const router = require('koa-router')()
const GoodsModel=require('../models/goods')
router.get('/', async (ctx) => {
  var data=await GoodsModel.find({});
  ctx.body=data
})
module.exports = router
```

### 四、给前端返回的数据格式

```
{
   //200请求成功  1001没有请求成功
   code:200,
   msg:"请求成功",
   result:data,
    total:17
   //从数据库中请求的数据装到result中 
}
```

```
router.get('/', async (ctx) => {
  var data=await GoodsModel.find({});
  ctx.body={
    code:200,
    msg:"首页数据请求成功",
    result:data,
    total:data.length
  }
})
```

![image-20191202140303832](C:\Users\Ying Ya\Desktop\image-20191202140303832.png)

```
...
const UsersModel=require('../models/users')
//主路由，子路由方式
router.prefix('/users')
//主路由
router.get('/', async (ctx) =>{
  var data=await UsersModel.find({})
  ctx.body={
    code:200,
    msg:"数据请求成功",
    result:data,
  }
})
//子路由
router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})
```

跨域

```
yarn add koa2-cors 
```

```
const cors=require('koa2-cors')
//配置允许跨域的域名
app.use(cors({
  /* 只允许本地地址访问 */
  origin:"http://192.168.14.27:8080"
  /* *  origin:"*" 允许所有地址访问 */
}))
```

### 五、axios-get

1.params传递数据给后端

```
   this.$http({
        url:'/goods/price',
        methods:'get',
        params:{
          gt,lt
        }
      }).then(res=>{
        console.log(res)
      })
```

根据价格大小进行查询

```
<template>
  <div class="home">
      <el-container>
        <el-aside width="200px">
          <h3>通过价格搜索</h3>
          <div v-for="item of searchPrice" :key="item.id">
            <p @click="handlePrice(item.gt,item.lt)">{{item.gt}}--{{item.lt}}</p>            
          </div>
        </el-aside>
        <el-main>
          <h2>商品</h2>
          <div class="item">
            <div v-for="item of goodsList" :key="item.id">
            <img :src="item.productImage" alt="">
            <p>价格：{{item.salePrice}}元</p>
          </div>
          </div>
          
        </el-main>
      </el-container>
  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return{
      searchPrice:[
        {gt:0,lt:100,id:1001},
        {gt:100,lt:500,id:1002},
        {gt:500,lt:1000,id:1003},
        {gt:1000,lt:5000,id:1004}
      ],
      goodsList:[]
    }
  },
  mounted(){
    this.$http('goods/list').then(res=>{
     this.goodsList=res.data.result
    })
  },
  methods:{
    handlePrice(gt,lt){
      this.$http({
      //根据价格判断不同商品
        url:'/goods/price',
        methods:'get',
        //get传值
        params:{
          gt,lt
        }
      }).then(res=>{
        console.log(res)
      })
    }
  }
}
</script>
<style scoped>

</style>

```

后台query进行接收get传值

```
router.get("/goods/price",async ctx=>{
  /* 传递给后台的值，用ctx.query接收get传值，即是问号后面的值 */
   var {gt,lt}=ctx.query;
})
```

对数据库进行查询

```
 var data=await GoodsModel.find({salePrice:{$gt:gt,$lt:lt}})
```

对有数据和没有数据的处理

```java
//后台
/* 根据价格大小查询 */
router.get("/goods/price", async ctx => {
  var { gt, lt } = ctx.query;
  var data = await GoodsModel.find({ salePrice: { $gt: gt, $lt: lt } })
  if (data.length) {
    ctx.body = {
      code: 200,
      msg: "数据请求成功",
      result: data,
      total: data.length
    }
  }else{
    ctx.body = {
      code:1001,
      msg:"没有数据"
    }
  }

})
```

前台处理

```
//前台
 methods: {
    handlePrice(gt, lt) {
      console.log(gt, lt);
      this.$http({
        url: "/goods/price",
        method: "get",
        params: {
          gt,
          lt
        }
      }).then(res => {
        if (res.data.code == 200) {
          this.goodsList = res.data.result;
        }else{
          this.goodsList = [];
          this.$message({
            duration:1000,
            message:res.data.msg,
            type: 'warning'
          })
        }
      });
    }
  }
```

