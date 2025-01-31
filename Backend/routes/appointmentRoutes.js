const express = require('express');
const appointmentController = require('../controllers/appointmentController');
const auth = require('../middleware/auth');
const router = express.Router();

// Book an appointment
router.post('/appointments', auth, appointmentController.bookAppointment);

// Get all appointments for a patient
router.get('/appointments/patient/:patientId', auth, appointmentController.getPatientAppointments);

module.exports = router;