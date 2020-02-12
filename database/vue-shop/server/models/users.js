var mongoose = require('./db');
var UserSchema = new mongoose.Schema({
    userId:String,
    userName:String,
    userPwd:String,
    orderList:Array,
    cartList:Array,
    addressList:Array
})
var Users =  mongoose.model('Users',UserSchema,'users');
module.exports = Users;