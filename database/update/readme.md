

一 安装依赖模块

```java
yarn add mongoose koa koa-router art-template koa-art-template
```

二 mongoose连接数据库

```java
1.导入mongoose
const mongoose=require('mongoose')
2.连接数据库
mongoose.connect( 'mongodb://127.0.0.1:27017/student', {useNewUrlParser: true},(err)=>{
    if(err){throw err};
    console.log("数据库连接成功")
});
3.定义Schema和数据库中的映射
var AdminSchema=mongoose.Schema({
    name:String,
    age:Number
})
4.定义模型，关联数据库中的表
var Admin=mongoose.model('Admin',AdminSchema,'admin');
5.查询数据库
Admin.find({}).then(res=>{
    console.log(res)
})
```

三 分拆mongoose

在根目录下新建models,里面新建db.js和admin.js

db.js

```
const mongoose=require('mongoose')
mongoose.connect( 'mongodb://127.0.0.1:27017/student', {useNewUrlParser: true},(err)=>{
    if(err){throw err};
    console.log("数据库连接成功")
});
module.exports=mongoose
```

admin.js

```
const mongoose = require('./db')
var AdminSchema =new mongoose.Schema({
    name:String,
    age:Number
})
var Admin= mongoose.model('Admin',AdminSchema,'admin')
module.exports=Admin;
```

index.js

```
const AdminModel=require('./models/admin')
```

四 增加数据

先查询数据再增加

```
AdminModel.find({}).then(res=>{
    console.log(res)
})
var data=new AdminModel({
    name:"koa",
    age:4
})
```

五 修改

```
AdminModel.find({}).then(res=>{
    console.log(res)
})
AdminModel.update({name:'vue'},{name:'koa'}).then(res=>{
   console.log(res)
}) 
```

将数据返回到前端

```
const AdminModel=require('./models/admin')
const Koa=require('koa')
const app=new Koa();
const Router=require('koa-router');
const router=new Router();
router.get('/api',async ctx=>{
    var data=await AdminModel.find()
    ctx.body=data
})
app.use(router.routes())
app.listen(8080)
```

六 拆分路由

在根目录下新建routers文件夹，在里面建index.js文件

根目录新建views文件夹，里面新建index.html

index.html

```
  <body>
     <h2>后台管理界面</h2>
  </body>
```

//routers.index.js

```
const Router=require('koa-router');
const router=new Router();
const AdminModel=require('./models/admin')
router.get('/api',async ctx=>{
    var data=await AdminModel.find({})
    ctx.body=data
})
router.get('/admin',async ctx=>{
    await ctx.render('index')
})
module.exports=router
```

index.js

```
const Koa=require('koa')
const app=new Koa();
const router=require('./routers')
const render = require("koa-art-template");
const path=require('path') 
render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html', //后缀也可以写成.art
    debug: process.env.NODE_ENV !== 'production'
});
app.use(router.routes())
app.listen(8080)
```

七 将数据返回到前端

index.html

```
 <h2>后台管理界面</h2>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>编号</th>
                    <th>姓名</th>
                    <th>年龄</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                {{each data}}
                <tr>
                    <td>{{$index}}</td>
                    <td>{{$value.name}}</td>
                    <td>{{$value.age}}</td>
                    <td>
                        <a href="/delete?id={{@ $value._id}}" class="btn btn-danger">删除</a>
                        <a href="#" class="btn btn-success">编辑</a>
                    </td>
                </tr>
                {{/each}}
            </tbody>
        </table>
```

//routers/index.js

```
router.get('/admin',async ctx=>{
    var data=await AdminModel.find();
    console.log(data)
    await ctx.render('index',{data})
})
```

八 删除

index.html

```
 <td>
        <a href="/delete?id={{@ $value._id}}" class="btn btn-danger">删除</a>
        <a href="#" class="btn btn-success">编辑</a>
 </td>
```

//routers/index.js

```
router.get('/delete',async ctx=>{
   var {id}=ctx.query;
   await AdminModel.remove({_id:id})
   ctx.redirect('/admin')
})
```

九 编辑

写一个edit.html

```
<input type="text" class="form-control" id="user" value="{{data.name}}" placeholder="请输入用户名">
```

index.html

```
<a href="/edit" class="btn btn-success">编辑</a>
```

//routers/index.js

```
router.get('/edit',async ctx=>{
    var item=ctx.query.item       //获取的是字符串
    var data=JSON.parse(item)    //将字符串转换为对象
    await ctx.render('edit',{data})
})
```

十 解析post提交的数据

安装

```
yarn add koa-bodyparser
```

导入

index.js

```
const bodyParser=require('koa-bodyparser')
```

//routers/index.js

```
router.post('/doEdit',async ctx=>{
   ctx.body = ctx.request.body
})
```

edit.js

name :方便后端去获取数据  /doEdit：跳转的页面 method：提交方式  

```
 <form action="/doEdit" method="POST" role="form">
                <legend>编辑页面</legend>
                <input type="hidden" name="_id" value="{{data._id}}">
            <!-- name  方便后端去获取数据 -->
                <div class="form-group">
                    <label for="">用户名:name</label>
                    <input type="text" name="name" class="form-control" id="user" value="{{data.name}}" placeholder="请输入用户名">
                </div>
                <div class="form-group">
                    <label for="">年龄：age</label>
                    <input type="text" name="age" class="form-control" id="age" value="{{data.age}}" placeholder="请输入用户年龄">
                </div>  
                <button type="submit" class="btn btn-primary">确定</button>
            </form>
```

```
传递的id
<input type="hidden" name="_id" value="{{data._id}}">
```

十一 修改

//routers/index.js

```
router.post('/doEdit',async ctx=>{
    var {_id,name,age}=ctx.request.body
    age=parseInt(age)
    await AdminModel.update({_id},{name,age})
    ctx.redirect('/admin')
})
```

十二 增加

//routers/index.js

```
router.get('/add',async ctx=>{
    await ctx.render('add')
})
router.post('/doAdd',async ctx=>{
    var {age,name}=ctx.request.body
    var data=new AdminModel({
        name,
        age:parseInt(age)
    })
    await data.save()
    ctx.redirect('/admin')
})
```

新建一个add.html页面

```
 <div class="container">
            <form action="/doAdd" method="POST" role="form">
                <legend>增加页面</legend>
                <div class="form-group">
                    <label for="">用户名:name</label>
                    <input type="text" name="name" class="form-control" id="user" placeholder="请输入用户名">
                </div>
                <div class="form-group">
                    <label for="">年龄：age</label>
                    <input type="text" name="age" class="form-control" id="age" placeholder="请输入用户年龄">
                </div>  
                <button type="submit" class="btn btn-primary">添加</button>
            </form>
    </div>
```

index.html

```
<a href="/add" class="btn btn-primary">增加数据</a>
```

十三 限制查询

skip从那个下标开始，limit():限制个数

```
router.get('/api',async ctx=>{
    var {offset,limit}=ctx.request.query
    var data=await AdminModel.find({}).skip(Number(offset)).limit(Number(limit))
    ctx.body=data
})
```

