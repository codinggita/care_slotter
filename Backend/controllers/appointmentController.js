const Appointment = require('../models/Appointment');

// Book an appointment
exports.bookAppointment = async (req, res) => {
  const { patientId, doctorId, date, time } = req.body;
  try {
    const appointment = new Appointment({ patientId, doctorId, date, time });
    await appointment.save();
    res.status(201).json({ message: 'Appointment booked successfully.', appointment });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all appointments for a patient
exports.getPatientAppointments = async (req, res) => {
  const { patientId } = req.params;
  try {
    const appointments = await Appointment.find({ patientId }).populate('doctorId', 'specialization consultationFees');
    res.json(appointments);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};