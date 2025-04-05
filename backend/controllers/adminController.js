import validator from "validator"
import bcrypt from "bcrypt"
import {v2 as cloudinary} from "cloudinary"
import { json } from "express"
import doctorModel from "../models/doctorModel.js"
//API for adding doctor
const addDoctor=async(req,res)=>{
  try{
   const {name,email,password,speciality,degree,experience,about,fee,address}=req.body

   const imageFile= req.file

   //checking for all data to add doctor
   if(!name||!email||!password||!speciality||!degree||!experience||!about||!fee||!address){
     return res.json({success:false,message:"Missing details"})
   }
   //Validating email format
   if(!validator.isEmail(email)){
    return res.json({success:false,message:"Please enter a valid email"})
   }
   //Validating strong password
   if(password.length<8){
    return res.json({success:false,message:"Please enter a strong password"})
   }
   //Hashing the  doctor password
   const salt=await bcrypt.genSalt(10)
   const hashedPassword=await bcrypt.hash(password,salt)
   //upload image to cloudinary
   const imageUpload=await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"})

   const imageUrl=imageUpload.secure_url

   const doctorData={
    name,
    email,
    image:imageUrl,
    password:hashedPassword,
    speciality,
    degree,
    experience,
    about,
    fee,
    address:JSON.parse(address),
    date:Date.now()
   }
   const newDoctor= new doctorModel(doctorData)
     await newDoctor.save()
     res.json({success:true,message:"Doctor added successfully"})
  }catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
}

export {addDoctor}