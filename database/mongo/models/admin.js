const mongoose = require('./db')
var AdminSchema =new mongoose.Schema({
    name:String,
    age:Number
})
var AdminModel= mongoose.model('Admin',AdminSchema,'admin')
module.exports=AdminModel;