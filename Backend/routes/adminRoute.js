import express from "express";
import { addDoctor, allDoctors, loginAdmin } from "../controllers/adminController.js";
import upload from "../middlewares/multer.js";
import authAdmin from "../middlewares/authAdmin.js";
import { changeAvailabilty } from "../controllers/doctorController.js";

const adminRouter = express.Router();

// Add a new doctor (Admin Protected)
adminRouter.post("/add-doctor", authAdmin, upload.single("image"), addDoctor);

// Admin Login
adminRouter.post("/login", loginAdmin);


adminRouter.post("/all-doctors", authAdmin, allDoctors);
adminRouter.post("/change-availabilty", authAdmin, changeAvailabilty);

export default adminRouter;
