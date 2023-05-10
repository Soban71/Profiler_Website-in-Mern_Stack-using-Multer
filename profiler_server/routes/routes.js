const express = require("express"); 
const router=new express.Router();
const multer=require("multer");
const users=require("../models/userScheme.js");
const moment=require("moment");
const Users = require("../models/userScheme.js");

//setting image storage
const imgConfig=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null , "./uploads")
    },
    filename:(req,file,callback)=>{
        callback(null,`image-${Date.now()}.${file.originalname}`);
    }
})

//filtering
const isImage=(req , file , callback)=>{
    if(file.mimetype.startsWith("image")){
        callback(null,true)
    }
    else{
        callback(new Error("only images are allowed"))
    }
}


const uploads=multer({
    storage : imgConfig,
    fileFilter:isImage,
});


//user Register
router.post("/register",uploads.single("photo"),async(req, res)=>{
    const {filename}=req.file;
    const {fname}=req.body;

    if(!filename || !fname){
        res.status(401).json({status:401,message:"fill the data please"});
    }

    try{
        const date=moment(new Date()).format("YYYY-MM-DD");
        const userData=new users({
            fname: fname,
            imgPath: filename ,
            Date: date,
        })
        const finalData=await userData.save();

        res.status(201).json({status:201,finalData})
    }
    catch(err){
        res.status(401).json({status:401,err});
    }
})

//User Data getting
router.get("/getdata",async(req , res)=>{
    try{
        const getUser= await users.find();

        res.status(201).json({status:201,getUser});
    }
    catch(error){
        res.status(401).json({status:401,error});
    }
})

//user Delete
router.delete("/:id",async(req,res)=>{
    
    try{

        const {id}=req.params;
        const dlteUser=await Users.findByIdAndDelete({_id:id});
        res.status(201).json({status:201,dlteUser});

    }
    catch(error){
        console.log(error);
    }
});

module.exports=router;

