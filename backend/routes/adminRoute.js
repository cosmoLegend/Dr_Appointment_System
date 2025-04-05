import express from "express";
import { addDoctor } from "../controllers/adminController.js";
import upload from "../middlewares/multer.js"; // ✅ Make sure it's the corrected export

const adminRouter = express.Router();

adminRouter.post("/add-doctor", upload.single("image"), addDoctor); // ✅ Field name must be "image"

export default adminRouter;
