import validator from 'validator';
import bcrypt from 'bcrypt';
import { v2 as cloudinary } from 'cloudinary';
import doctorModel from '../models/doctorModel.js';

// API for adding doctor
const addDoctor = async (req, res) => {
    try {
        const { name, email, password, speciality, degree, experience, about, fess, address } = req.body;
        const imageFile = req.file;

        // Check for missing details
        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fess || !address) {
            return res.json({ success: false, message: "Missing Details" });
        }

        // Validate email format
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }

        // Validate strong password
        if (!validator.isStrongPassword(password, { minLength: 8, minNumbers: 1, minUppercase: 1 })) {
            return res.json({ success: false, message: "Please enter a strong password (8+ chars, 1 uppercase, 1 number)" });
        }

        // Hashing doctor's password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Check if image is provided
        if (!imageFile) {
            return res.json({ success: false, message: "Image is required" });
        }

        // Upload image to Cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
            resource_type: "image",
        });
        const imageUrl = imageUpload.secure_url;

        // Create doctor data
        const doctorData = {
            name,
            email,
            password: hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fess,
            address: typeof address === "string" ? JSON.parse(address) : address,
            image: imageUrl,
            date: Date.now()
        };

        // Save to database
        const newDoctor = new doctorModel(doctorData);
        await newDoctor.save();

        res.json({ success: true, message: "Doctor Added Successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { addDoctor };
