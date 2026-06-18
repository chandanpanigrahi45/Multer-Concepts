const express=require('express');
const multer  = require('multer')
const app=express()
require('dotenv').config()
let port=process.env.PORT

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/")
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
}) 

const upload=multer({storage})

app.post('/upload',upload.single('file'),(req,res)=>{
    res.send({
        msg:'file uploaded succcessfully',
        data:'simple testing'
    })
})
app.get("/test",(req,res)=>{
    res.send({
        msg:"this is test module "
    })
})




app.listen(port,()=> console.log(`server is started at port ${port}`))