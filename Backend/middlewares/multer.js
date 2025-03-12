import multer from "multer";

// Multer storage configuration
const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });

export default upload; // ✅ Ensure this line exists
