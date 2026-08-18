const dotenv=require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const postmodule=require('../Models/post.js')
const multer=require('multer')
const uploadfile=require('../services/storage.service.js')
const cors=require('cors')
app.use(express.json()) //for reading req.body
app.use(cors())
const storage = multer.memoryStorage();
const upload = multer({storage })
app.post('/Createpost',upload.single('Image'),async (req, res) => {
   console.log(req.body.caption);
   console.log(req.file);
const result =await uploadfile(req.file.buffer)
const post=await postmodule.create({
   image:result.url,
   caption:req.body.caption,
})
res.status(201).json({
      message:"Image and caption saved sucessfully"
   })
 })
app.get('/posts',async(req,res)=>{
   const posts=await postmodule.find({});
   res.status(201).json({
 message:"Fetched sucessfully",
 posts
   })
})
module.exports=app
