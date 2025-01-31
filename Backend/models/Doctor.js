const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  specialization: { type: String, required: true },
  experience: { type: Number, required: true },
  consultationFees: { type: Number, required: true },
  availability: [
    {
      date: { type: Date, required: true },
      slots: [{ type: String, required: true }],
    },
  ],
});

module.exports = mongoose.model('Doctor', doctorSchema);