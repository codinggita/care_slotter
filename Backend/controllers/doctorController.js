const Doctor = require('../models/Doctor');

// Add a new doctor
exports.addDoctor = async (req, res) => {
  const { userId, specialization, experience, consultationFees, availability } = req.body;
  try {
    const doctor = new Doctor({ userId, specialization, experience, consultationFees, availability });
    await doctor.save();
    res.status(201).json({ message: 'Doctor added successfully.', doctor });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all doctors
exports.getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find().populate('userId', 'name email');
    res.json(doctors);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};