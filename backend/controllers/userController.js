import validator from 'validator'
import bcrypt from 'bcrypt'
import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'
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

export {registerUser}