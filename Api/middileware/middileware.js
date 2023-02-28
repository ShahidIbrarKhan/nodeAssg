const jwt=require('jsonwebtoken');
const express=require('express');
const secretkey='seebiz';
const multer=require('multer');
const fs=require('fs');
exports.tokenverify=(req,res,next)=>{
    const token=req.headers['authorization'];
    if(token){
        jwt.verify(token,secretkey,(err,data)=>{
        if(data){
            req.id=data.id;
            console.log(req.id);
            res.json({message:'user verified '});
            next();
        }
        })
    }
    else{
        res.json({message:'token is not verified'});
        return;
    }
};
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const dirpath=req.id;
        fs.mkdir(dirpath,(err)=>{
            if(err){
                console.log(err);
                return;
            }
            res.json({message:"directory created"})
        })
      cb(null, dirpath)
    },
    filename: function (req, file, cb) {
        let extension=file.originalname.split('.');
        const user=req.id+"_"+file.fieldname+'_'+Date.now()+'.'+extension[1];
      cb(null, user)
    }
  })
  
  exports.upload= multer({ storage: storage })