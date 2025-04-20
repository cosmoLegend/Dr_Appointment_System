import express from "express";
import { addDoctor , allDoctors, loginAdmin } from "../controllers/adminController.js";
import upload from "../middlewares/multer.js"; //  Make sure it's the corrected export
import authAdmin from "../middlewares/authAdmin.js";
import { changeAvailability } from "../controllers/doctorController.js";

const adminRouter = express.Router();

adminRouter.post("/add-doctor",authAdmin, upload.single("image"), addDoctor); // Field name must be "image"
adminRouter.post('/login', loginAdmin);
adminRouter.post('/all-doctors',authAdmin,allDoctors);
adminRouter.post('/change-availability',authAdmin,changeAvailability);

export default adminRouter;
