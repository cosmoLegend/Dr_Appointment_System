import validator from 'validator'
import bcrypt from 'bcrypt'
import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import {v2 as cloudinary} from 'cloudinary'
import 'dotenv/config'
// API to register user 
const registerUser = async (req , res) => {
    try {
        
        const { name , email , password } = req.body

        if( !name || !email || !password ){
            return res.json({ success : false , message : "There are missing details" });
        }

        if(!validator.isEmail(email)){
            return res.json({ success : false , message : "Enter a valid email" });
        }

        if(password.length < 8){
            return res.json({ success : false , message : "Enter a strong password" });
        }

        //hashing the user password

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password , salt)

        const userData = {
            name,
            email,
            password : hashedPassword
        }
        
        const newUser = new userModel(userData)
        const user = await newUser.save() //to save the user in the database
        const token = jwt.sign({ id : user._id } , process.env.JWT_SECRET )

        res.json({ success : true , message : "User registered successfully" , token })
        

    } catch (error) {
        console.error(error);
        res.json({ success : false , message : error.message });
    }
}

//API for user login 

const loginUser = async (req , res) => {
    try {
        
        const {email,password} = req.body
        const user  = await userModel.findOne({email})

        if(!user){
            return res.json({ success : false , message : "User does not exist" });
        }

        const isMatch = await bcrypt.compare(password , user.password)

        if(isMatch){
            const token = jwt.sign({ id : user._id } , process.env.JWT_SECRET )
            res.json({ success : true , message : "User logged in successfully" , token })
        } else{
            return res.json({ success : false , message : "Invalid credentials!" });
        }
    
    } catch (error) {
        console.error(error);
        res.json({ success : false , message : error.message });
    }
}

// API to get user profile data 

const getProfile = async (req, res) => {

    try {

        const {userId} = req.body
        const userData = await userModel.findById(userId).select(-'password') 

        res.json({ success : true ,  userData })


    } catch (error) {
        console.error(error);
        res.json({ success : false , message : error.message });
    }
}

// API to update user profile 

const updateProfile = async (req, res) => {

    try {
        
        const {userId, name, phone, address, dob, gender} = req.body 
        const imageFile = req.file 

        if(!name || !phone || !dob || !gender){
            return res.json({ success : false , message : "There are missing details" });
        }

        const updateData = {
            name,
            phone,
            dob,
            gender,
        };

        
        if (address) {
            updateData.address = JSON.parse(address);
        }

       
        await userModel.findByIdAndUpdate(userId, updateData);

        if(imageFile){
            // uploading the image to cloudinary
            const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type : 'image'})
            const imageURL = imageUpload.secure_url

            await userModel.findByIdAndUpdate(userId,{image : imageURL})
        }

        res.json({ success : true , message : "User profile updated successfully" });


    } catch (error) {
        console.error(error);
        res.json({ success : false , message : error.message });
    }

}

export {registerUser,loginUser,getProfile,updateProfile}