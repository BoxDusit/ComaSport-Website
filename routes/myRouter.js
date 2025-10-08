const express = require('express')
const router = express.Router()
const path = require('path')
const Product = require('../models/products')
const multer = require('multer')

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/images/products')
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+".jpg")
    }
})
router.get('/add-product',(req,res)=>{
    res.render('add-product', { error: null });
})

const upload = multer({
    storage:storage
})


router.get('/',(req,res)=>{
    Product.find().exec((err,doc)=>{
        res.render('index',{products:doc});
    })
    
})

router.get('/login', (req, res) => {
    res.render('login', { error: null });
});

router.get('/register', (req, res) => {
    res.render('register', { error: null });
});

router.post('/register', (req, res) => {
    // TODO: Add registration logic here
    // This is a placeholder that just redirects to login
    res.redirect('/login');
});

router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // สมมติให้แอดมินมี email และ password ตรงนี้ (หรือดึงจาก DB ก็ได้)
    const adminEmail = "admin@example.com";
    const adminPassword = "admin123";

    if (email === adminEmail && password === adminPassword) {
        req.session.admin = true; // เก็บสถานะ login
        res.redirect('/dashbord');
    } else {
        res.render('login', { error: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง' });
    }
});

router.get('/dashbord', (req, res) => {
    res.render('dashbord', { error: null });
});


// router.get('/logout', (req, res) => {
//     req.session.destroy(() => {
//         res.redirect('/login');
//     });
// });

router.get('/manage', (req, res) => {
    if (!req.session.admin) {
        return res.redirect('/login');
    }
    Product.find().exec((err, doc) => {
        res.render('manage', { products: doc });
    });
});

router.get('/delete/:id',(req,res)=>{
    Product.findByIdAndDelete(req.params.id,{useFindAndModify:false}).exec(err=>{
        if(err){
            console.log(err)
        }else{
            res.redirect('/manage')
        } 
    }
        
    )
})

router.post('/insert',upload.single("image"),(req,res)=>{
    
    let data = new Product({
         name: req.body.name,
         price: req.body.price,
         image: req.file.filename,
         description: req.body.description,
         discount: req.body.discount,
         category: req.body.category,
         stock: req.body.stock
    })

    Product.saveProduct(data,(err)=>{
        if(err){
            console.log(err)
        }else{
            res.redirect('/')
        } 
    })
    
})

router.get('/:id',(req,res)=>{
    const product_id = req.params.id
    console.log(product_id)
    Product.findOne({_id:product_id}).exec((err,doc)=>{
        res.render('product',{product:doc});
    })
    
})

router.post('/edit',(req,res)=>{
    const edit_id = req.body.edit_id
    console.log(edit_id);
    Product.findOne({_id:edit_id}).exec((err,doc)=>{
        res.render('edit',{product:doc})
    })
})

router.post('/update', upload.single("image"), (req, res) => {
    const id = req.body.id;
    let data = {
         name: req.body.name,
         price: req.body.price,
         description: req.body.description,
         discount: req.body.discount,
         category: req.body.category,
         stock: req.body.stock
    };
    // ถ้ามีการอัพโหลดไฟล์ใหม่ ให้บันทึกชื่อไฟล์ใหม่
    if (req.file) {
        data.image = req.file.filename;
    }
    Product.findByIdAndUpdate(id, data, { useFindAndModify: false }).exec(err => {
        res.redirect('/manage');
    });
});

// ส่งออกโมดูล
module.exports = router;



//ส่งเเบบget
// router.get('/insert',(req,res)=>{
//     console.log(req.query) 
// })



// const indexPage = path.join(__dirname,"../templates/index.html")

// router.get("/",( req,res)=>{
//     res.status(200)
//     res.type('text/html')
//     res.sendFile(indexPage)
// })
// router.get("/product/:id",( req,res)=>{
//     const productID = req.params.id
//     if(productID === '1'){
//         res.sendFile(path.join(__dirname,"../templates/product1.html"))
//     }else if(productID === '2'){
//         res.sendFile(path.join(__dirname,"../templates/product2.html"))
//     }else if(productID === '3'){
//         res.sendFile(path.join(__dirname,"../templates/product3.html"))
//     }else{
//         res.redirect('/')
 
//     }
    
// })

