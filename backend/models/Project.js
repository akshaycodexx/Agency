const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  industry: { type: String, required: true },
  description: { type: String, required: true },
  coverImage: { type: String, required: true },
  gallery: [{ type: String }],
  services: [{ type: String }],
  challenge: { type: String, default: '' },
  strategy: { type: String, default: '' },
  execution: { type: String, default: '' },
  deliverables: [{ type: String }],
  results: { type: String, default: 'Results to be added' },
  clientFeedback: { type: String, default: '' },
  published: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
