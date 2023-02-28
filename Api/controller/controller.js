const signUp=require('../model/schema')
const jwt=require('jsonwebtoken');
const secretkey='seebiz'
const express=require('express')

const app=express();
app.use(express.json());
exports.signUp=async(req,res)=>{
    const data = new signUp(req.body)
    let result  = await data.save()
    //res.header("Access-Control-Allow-Origin", " http://localhost:3000");
    // res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    return res.json(result)
}
exports.login=async (req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const user= await userModel.findOne({email});
    if(user.email===email && user.password===password){
        const token=jwt.sign({id:user._id},secretkey)
        res.json({
            message:'welcome...',
            token
        })
    }
    else{
        res.json({
            message:'no user find'
        })
    }
};

exports.uploadImage= async (req,res)=>{
    let image = req.file.filename
    let userImage = await imageModel.create({
        image
    })
    return res.status(200).json({
        message: "Successfully",
        userImage
    })
};
exports.getdata=async (req,res)=>{
    console.log(req.email)
    let userdata= await userModel.findOne({email:req.email});
    if(userdata){
        res.json({userdata})
    }
    else{
        res.json({
            message:'cannot find data'
        });
    }
};
exports.updatedata=async (req,res)=>{
    //let email=req.email;
    let userdata=await userModel.findOneAndUpdate({email:req.email},{firstName:"Muhammad",lastName:'Talha',password:'345',email:'mt@gmail.com'});
    return res.json({message:'dataupdated'});
}