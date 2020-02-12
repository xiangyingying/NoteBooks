/* const mongoose=require('mongoose')
mongoose.connect( 'mongodb://127.0.0.1:27017/student', {useNewUrlParser: true},(err)=>{
    if(err){throw err};
    console.log("数据库连接成功")
});
var AdminSchema=mongoose.Schema({
    name:String,
    age:Number
})
var Admin=mongoose.model('Admin',AdminSchema,'admin');
Admin.find({}).then(res=>{
    console.log(res)
}) */

/* AdminModel.find({}).then(res=>{
    console.log(res)
}) */
/*  增加
var data=new AdminModel({
    name:"koa",
    age:4
})
data.save(err=>{
    if(err){throw err}
}) */
/*  修改
AdminModel.update({name:'vue'},{name:'koa'}).then(res=>{
   console.log(res)
}) */
const Koa=require('koa')
const app=new Koa();
const router=require('./routers')
const render = require("koa-art-template");
const path=require('path') 
const bodyParser=require('koa-bodyparser')
render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html', //后缀也可以写成.art
    debug: process.env.NODE_ENV !== 'production'
});
app.use(bodyParser())
app.use(router.routes())
app.listen(8080)