const Testimonial = require('../models/Testimonial');
const { getIsConnected } = require('../config/db');

const defaultTestimonials = [
  {
    _id: 'test_1',
    clientName: '[DEMO CLIENT NAME]',
    role: 'Founder & CEO',
    company: 'Aura Culinary Group',
    industry: 'Restaurants & Hospitality',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    review: 'Working with Creativion transformed how our brand connects with customers. Their team delivers aesthetic excellence combined with real marketing execution.',
    rating: 5,
    published: true
  },
  {
    _id: 'test_2',
    clientName: '[DEMO CLIENT NAME]',
    role: 'Managing Director',
    company: 'Nexus Living Properties',
    industry: 'Real Estate',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    review: 'Creativion redesigned our entire web presence and elevated our ad strategy. Their communication and attention to detail are top-tier.',
    rating: 5,
    published: true
  },
  {
    _id: 'test_3',
    clientName: '[DEMO CLIENT NAME]',
    role: 'Head of Marketing',
    company: 'Verde Organics',
    industry: 'E-commerce & Wellness',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop',
    review: 'Our social engagement and reel quality reached a whole new standard within weeks of working with Creativion. Truly dedicated creative partners.',
    rating: 5,
    published: true
  }
];

let memoryTestimonials = [...defaultTestimonials];

const getTestimonials = async (req, res) => {
  try {
    if (getIsConnected()) {
      const list = await Testimonial.find({ published: true });
      if (list.length > 0) return res.json({ success: true, data: list });
    }
    return res.json({ success: true, data: memoryTestimonials.filter(t => t.published) });
  } catch (error) {
    return res.json({ success: true, data: memoryTestimonials });
  }
};

const createTestimonial = async (req, res) => {
  try {
    const itemData = {
      _id: 'test_' + Date.now(),
      ...req.body,
      createdAt: new Date()
    };
    if (getIsConnected()) {
      const newItem = new Testimonial(req.body);
      const saved = await newItem.save();
      itemData._id = saved._id;
    } else {
      memoryTestimonials.unshift(itemData);
    }
    return res.status(201).json({ success: true, data: itemData });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to create testimonial' });
  }
};

const updateTestimonial = async (req, res) => {
  try {
    const { id } = req.params;
    if (getIsConnected()) {
      const updated = await Testimonial.findByIdAndUpdate(id, req.body, { new: true });
      return res.json({ success: true, data: updated });
    }
    const idx = memoryTestimonials.findIndex(t => t._id === id);
    if (idx !== -1) {
      memoryTestimonials[idx] = { ...memoryTestimonials[idx], ...req.body };
      return res.json({ success: true, data: memoryTestimonials[idx] });
    }
    return res.status(404).json({ error: 'Testimonial not found' });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to update testimonial' });
  }
};

const deleteTestimonial = async (req, res) => {
  try {
    const { id } = req.params;
    if (getIsConnected()) {
      await Testimonial.findByIdAndDelete(id);
    } else {
      memoryTestimonials = memoryTestimonials.filter(t => t._id !== id);
    }
    return res.json({ success: true, message: 'Testimonial deleted' });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to delete testimonial' });
  }
};

module.exports = {
  getTestimonials,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial
};
