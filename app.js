//-----------------------------------------จำลองการสร้างserverด้วยnodeJs---------------------------------------------------------------------
// const http = require('http')
// const fs = require('fs')
// const url = require('url')
// const { parse } = require('path')

// const indexPage = fs.readFileSync(`${__dirname}/templates/index.html`)
// const producePage1 = fs.readFileSync(`${__dirname}/templates/product1.html`)
// const producePage2 = fs.readFileSync(`${__dirname}/templates/product2.html`)
// const producePage3 = fs.readFileSync(`${__dirname}/templates/product3.html`)

// const server = http.createServer((req, res) => {
//     const {pathname,query}=url.parse(req.url,true)
//     // console.log(url.parse(req.url,true))  ***เรียกดูข้อมูลurlเฉพาะreq
//     // const pathName = req.url  ***สร้าง path ขึ้นมาใช้เอง
    
//     if (pathname === "/" || pathname === "/home") {
//         res.write(indexPage)
//         res.end()

//     }else if(pathname==="/product"){
//         //ข้อมูลสินค้าid1
//         if(query.id==='1'){
//             res.end(producePage1)
//         //ข้อมูลสินค้าid2
//         }else if(query.id==='2'){
//             res.end(producePage2)
//         }else if(query.id==='3'){
//             res.end(producePage3)
//         }else{
//         res.writeHead(404);
//         res.end("<h1>Not Found</h1>")
//     }}else{
//         res.writeHead(404);
//         res.end("<h1>Not Found</h1>")
//     }

// })
// server.listen(8080, 'localhost', () => {
//     console.log("start server in port 8080");
// });

//-----------------------------------------จำลองการสร้างserverด้วยexpress---------------------------------------------------------------------
const express = require('express')
const path = require('path')
const router = require('./routes/myRouter')
const app = express()
const cookieParser = require('cookie-parser')
const session = require('express-session');

app.use(session({
    secret: 'mySecretKey123', // เปลี่ยนเป็นอะไรก็ได้
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // ตั้ง false ถ้าไม่ได้ใช้ HTTPS
}));

app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded({extended:false}))
app.use(router)
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')))
app.use(cookieParser()) 

// // สร้างตัวเเปรอ้างอิงตำเเหน่งไฟล์

app.listen(8080,()=>{
    console.log("รัน server ที่ port 8080")
})
