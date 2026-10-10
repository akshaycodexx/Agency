const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  company: { type: String, default: '' },
  email: { type: String, required: true },
  phone: { type: String, default: '' },
  service: { type: String, required: true },
  budget: { type: String, default: '' },
  message: { type: String, required: true },
  preferredContact: { type: String, default: 'Email' },
  status: {
    type: String,
    enum: ['New', 'Contacted', 'In Discussion', 'Converted', 'Closed'],
    default: 'New'
  }
}, { timestamps: true });

module.exports = mongoose.model('Inquiry', inquirySchema);
