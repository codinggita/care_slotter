const express = require('express');
const doctorController = require('../controllers/doctorController');
const auth = require('../middleware/auth');
const router = express.Router();

// Add a new doctor (admin only)
router.post('/doctors', auth, doctorController.addDoctor);

// Get all doctors
router.get('/doctors', doctorController.getAllDoctors);

module.exports = router;