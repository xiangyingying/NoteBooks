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