const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  clientName: { type: String, required: true },
  role: { type: String, required: true },
  company: { type: String, required: true },
  photo: { type: String, default: '' },
  industry: { type: String, required: true },
  review: { type: String, required: true },
  rating: { type: Number, default: 5 },
  published: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Testimonial', testimonialSchema);
