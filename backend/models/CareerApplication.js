const mongoose = require('mongoose');

const careerApplicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, default: '' },
  position: { type: String, required: true },
  experience: { type: String, default: '' },
  portfolio: { type: String, default: '' },
  linkedin: { type: String, default: '' },
  resume: { type: String, default: '' }, // file path or URL
  coverMessage: { type: String, default: '' },
  status: {
    type: String,
    enum: ['New', 'Reviewed', 'Shortlisted', 'Interview', 'Rejected', 'Hired'],
    default: 'New'
  }
}, { timestamps: true });

module.exports = mongoose.model('CareerApplication', careerApplicationSchema);
