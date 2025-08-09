//ใช้งาน mongoose
const mongoose = require('mongoose')

//เชื่อมไปยัง mongoose
const dbUrl = 'mongodb://localhost:27017/productDB'
mongoose.connect(dbUrl).catch(err => console.log(err));

//ออกเเบบ schema
let productSchema =  mongoose.Schema({
    name:String,
    price:Number,
    image:String,
    description:String,
    discount:Number,
    category:String,
    stock:Number,
})

let User =  mongoose.Schema({
    name:String,
    price:Number,
    image:String,
    
})
//สร้างโมเดล
let Product = mongoose.model("products",productSchema)

//ส่งออกโมเดล
module.exports = Product

//ออกเเบบฟังชั่นสำหรับรับข้อมูล
module.exports.saveProduct=function(model,data){
    model.save(data)
}