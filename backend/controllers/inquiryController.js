const Inquiry = require('../models/Inquiry');
const { sendInquiryEmail } = require('../utils/email');
const { getIsConnected } = require('../config/db');

// In-memory fallback array
let memoryInquiries = [];

const createInquiry = async (req, res) => {
  try {
    const { name, company, email, phone, service, budget, message, preferredContact } = req.body;

    if (!name || !email || !service || !message) {
      return res.status(400).json({ error: 'Please provide all required fields: name, email, service, message.' });
    }

    const inquiryData = {
      _id: 'inq_' + Date.now(),
      name,
      company: company || '',
      email,
      phone: phone || '',
      service,
      budget: budget || '',
      message,
      preferredContact: preferredContact || 'Email',
      status: 'New',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    if (getIsConnected()) {
      const newInquiry = new Inquiry(req.body);
      const saved = await newInquiry.save();
      inquiryData._id = saved._id;
    } else {
      memoryInquiries.unshift(inquiryData);
    }

    // Trigger email notification async
    sendInquiryEmail(inquiryData).catch(err => console.error('Email error:', err));

    return res.status(201).json({
      success: true,
      message: 'Thank you. Your inquiry has been received.',
      data: inquiryData
    });
  } catch (error) {
    console.error('Create inquiry error:', error);
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
};

const getInquiries = async (req, res) => {
  try {
    if (getIsConnected()) {
      const inquiries = await Inquiry.find().sort({ createdAt: -1 });
      return res.json({ success: true, data: inquiries });
    }
    return res.json({ success: true, data: memoryInquiries });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch inquiries' });
  }
};

const updateInquiryStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (getIsConnected()) {
      const updated = await Inquiry.findByIdAndUpdate(id, { status }, { new: true });
      return res.json({ success: true, data: updated });
    }

    const found = memoryInquiries.find(item => item._id === id);
    if (found) {
      found.status = status;
      found.updatedAt = new Date();
      return res.json({ success: true, data: found });
    }
    return res.status(404).json({ error: 'Inquiry not found' });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to update inquiry status' });
  }
};

const deleteInquiry = async (req, res) => {
  try {
    const { id } = req.params;
    if (getIsConnected()) {
      await Inquiry.findByIdAndDelete(id);
    } else {
      memoryInquiries = memoryInquiries.filter(item => item._id !== id);
    }
    return res.json({ success: true, message: 'Inquiry deleted' });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to delete inquiry' });
  }
};

module.exports = {
  createInquiry,
  getInquiries,
  updateInquiryStatus,
  deleteInquiry
};
