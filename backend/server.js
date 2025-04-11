import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js';
import upload from "./middlewares/multer.js";
import doctorRouter from './routes/doctorRoute.js';
import userRouter from './routes/userRoute.js';


//app config
const app= express();
const port=process.env.PORT || 4000
connectDB()
connectCloudinary()

//Middlewares
app.use(express.json());
app.use(cors());

//api end points
app.use("/api/admin",adminRouter)
app.use('/api/doctor',doctorRouter)
app.use('/api/user',userRouter)

app.get("/",(req,res)=>{
  res.send("API working")
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port,()=>{
  console.log("Server started",port);
})
