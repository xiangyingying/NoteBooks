const koa =require('koa')
const app=new koa()
const Router=require('koa-router')
const router=new Router();
const AdminModel=require('./models/admin')
const cors=require('koa2-cors')
const render = require("koa-art-template");
const path=require('path') 
render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html', //后缀也可以写成.art
    debug: process.env.NODE_ENV !== 'production'
});
router.get("/",async ctx=>{
    var {name}=ctx.query
    console.log(name)
    var data=await AdminModel.find({name});
    if(data.length>0){
        ctx.body=data;
    }else{
        ctx.body={
            code:200,
            msg:"没有获取数据"
        }
    }
})
router.get('/admin/top',async ctx=>{
    var data=await AdminModel.find();
    await ctx.render('index',{data})
})
router.get('/delete',async ctx=>{
    var {id}=ctx.query;
    console.log(id)
    await AdminModel.remove({_id:id})
    ctx.redirect('/admin/top')
    /* var id=await AdminModel.remove({id}) */
   /*  ctx.body={id} */
})
app.use(cors())
app.use(router.routes())
app.listen(8080)
