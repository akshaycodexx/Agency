const CareerApplication = require('../models/CareerApplication');
const { getIsConnected } = require('../config/db');

let memoryApplications = [];

const applyForJob = async (req, res) => {
  try {
    const { name, email, phone, position, experience, portfolio, linkedin, coverMessage } = req.body;

    if (!name || !email || !position) {
      return res.status(400).json({ error: 'Please fill in required fields: Name, Email, Position.' });
    }

    const resumePath = req.file ? req.file.path : (req.body.resume || '');

    const appData = {
      _id: 'app_' + Date.now(),
      name,
      email,
      phone: phone || '',
      position,
      experience: experience || '',
      portfolio: portfolio || '',
      linkedin: linkedin || '',
      resume: resumePath,
      coverMessage: coverMessage || '',
      status: 'New',
      createdAt: new Date()
    };

    if (getIsConnected()) {
      const newApp = new CareerApplication(appData);
      const saved = await newApp.save();
      appData._id = saved._id;
    } else {
      memoryApplications.unshift(appData);
    }

    return res.status(201).json({
      success: true,
      message: 'Your career application has been submitted successfully!',
      data: appData
    });
  } catch (error) {
    console.error('Apply job error:', error);
    return res.status(500).json({ error: 'Failed to submit application. Please try again.' });
  }
};

const getApplications = async (req, res) => {
  try {
    if (getIsConnected()) {
      const apps = await CareerApplication.find().sort({ createdAt: -1 });
      return res.json({ success: true, data: apps });
    }
    return res.json({ success: true, data: memoryApplications });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch career applications' });
  }
};

const updateApplicationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (getIsConnected()) {
      const updated = await CareerApplication.findByIdAndUpdate(id, { status }, { new: true });
      return res.json({ success: true, data: updated });
    }

    const found = memoryApplications.find(item => item._id === id);
    if (found) {
      found.status = status;
      return res.json({ success: true, data: found });
    }
    return res.status(404).json({ error: 'Application not found' });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to update application status' });
  }
};

const deleteApplication = async (req, res) => {
  try {
    const { id } = req.params;
    if (getIsConnected()) {
      await CareerApplication.findByIdAndDelete(id);
    } else {
      memoryApplications = memoryApplications.filter(item => item._id !== id);
    }
    return res.json({ success: true, message: 'Application deleted' });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to delete application' });
  }
};

module.exports = {
  applyForJob,
  getApplications,
  updateApplicationStatus,
  deleteApplication
};
