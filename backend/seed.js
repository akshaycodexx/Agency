const mongoose = require('mongoose');
require('dotenv').config();

const Project = require('./models/Project');
const Inquiry = require('./models/Inquiry');
const CareerApplication = require('./models/CareerApplication');
const Testimonial = require('./models/Testimonial');

const sampleProjects = [
  {
    title: 'Aura Dining Brand Experience & Launch',
    slug: 'aura-dining-brand-experience',
    category: 'Branding',
    industry: 'Restaurants & Cafes',
    description: 'Complete brand visual identity system, menu design, and social launch strategy for an upscale culinary restaurant.',
    coverImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop'
    ],
    services: ['Branding & Creative Direction', 'Graphic Design', 'Social Media Management', 'Product Photography'],
    challenge: 'Aura Dining needed a cohesive brand identity and high-impact digital launch to establish market presence in a competitive fine-dining landscape.',
    strategy: 'We crafted a sophisticated, minimalist visual identity paired with high-converting social teasers and influencer tasting events.',
    execution: 'Designed brand collateral, directed food photography, executed a 30-day pre-launch reel campaign, and developed an elegant responsive web menu.',
    deliverables: ['Logo & Brand Guidelines', 'Menu & Packaging', 'Launch Reels & Social Assets', 'Web Menu Portal'],
    results: 'High table booking rate during launch month; featured in regional lifestyle press.',
    clientFeedback: 'Creativion turned our vision into an unforgettable brand experience.',
    published: true
  },
  {
    title: 'Nexus Real Estate Digital Transformation',
    slug: 'nexus-real-estate-digital-transformation',
    category: 'Web',
    industry: 'Real Estate',
    description: 'Modern high-converting web platform and performance advertising for luxury residential developments.',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop'
    ],
    services: ['Website Development', 'Landing Pages', 'Meta & Google Ads', 'SEO & Local SEO'],
    challenge: 'High cost per lead and outdated online property showcase for luxury villa listings.',
    strategy: 'Build an ultra-fast web interface with interactive 3D virtual walkthroughs and targeted meta ad funnels.',
    execution: 'Custom web portal built with React, optimized for mobile speed, combined with targeted high-intent Google search campaigns.',
    deliverables: ['Custom Web Portal', 'Property Landing Pages', 'Meta & Google Ad Funnels', 'Local SEO Setup'],
    results: 'Qualified buyer inquiry rate improved significantly over baseline.',
    clientFeedback: 'Professionalism, speed, and design precision at its finest.',
    published: true
  },
  {
    title: 'Verde Organics Social Growth & Reels',
    slug: 'verde-organics-social-growth',
    category: 'Social Media',
    industry: 'E-commerce',
    description: '360° social media management, organic reel production, and influencer partnerships for organic skincare.',
    coverImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop'
    ],
    services: ['Social Media Management', 'Content Creation', 'Reels & Video Production', 'Influencer Marketing'],
    challenge: 'Static content was failing to engage organic Gen-Z and millennial skincare enthusiasts.',
    strategy: 'Transition brand to dynamic aesthetic reels, UGC product unboxing series, and micro-influencer gifting strategy.',
    execution: 'Produced 20+ custom high-definition reels monthly, managed daily audience interactions, and ran creator campaigns.',
    deliverables: ['Monthly Reel Packs', 'Social Content Calendar', 'Influencer Briefs', 'Monthly Analytics Reports'],
    results: 'Substantial increase in organic engagement and store referral traffic.',
    clientFeedback: 'Our social channel aesthetic has completely elevated since partnering with Creativion.',
    published: true
  },
  {
    title: 'Pulse Fitness App Campaign',
    slug: 'pulse-fitness-app-campaign',
    category: 'Advertising',
    industry: 'Startups',
    description: 'Performance-driven Meta & Google campaign for next-gen personalized fitness coaching app.',
    coverImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop'
    ],
    services: ['Meta Ads', 'Google Ads', 'AI Creative Solutions', 'Content Creation'],
    challenge: 'Scaling user app downloads while retaining low cost per installation in saturated fitness vertical.',
    strategy: 'A/B test dynamic AI motion creative against user testimonial ads across Instagram Reels & TikTok.',
    execution: 'Built high-converting mobile app landing pages and automated ad optimization rules.',
    deliverables: ['Ad Motion Graphics', 'App Store Landing Pages', 'Ad Campaign Setup & Scaling'],
    results: 'App install conversion rate surpassed industry benchmark.',
    clientFeedback: 'Creativion understands digital performance and creative testing deeply.',
    published: true
  }
];

const sampleInquiries = [
  {
    name: 'Vikram Malhotra',
    company: 'Apex Retail Solutions',
    email: 'vikram@apexretail.com',
    phone: '+91 98111 22334',
    service: 'Website Development & Branding',
    budget: '₹2,00,000 - ₹5,00,000',
    message: 'We are launching a new e-commerce product line and require a complete web development portal and brand identity package.',
    status: 'New'
  },
  {
    name: 'Priya Sharma',
    company: 'Zenith Wellness Clinic',
    email: 'priya@zenithwellness.in',
    phone: '+91 98765 00112',
    service: 'Social Media Management & Reels',
    budget: '₹1,00,000 - ₹2,00,000',
    message: 'Looking for a dedicated agency team to produce high-quality Instagram reels and manage monthly social channels.',
    status: 'Contacted'
  }
];

async function seedDatabase() {
  const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/creativion_agency';
  try {
    await mongoose.connect(mongoURI);
    console.log('[Seed] Connected to MongoDB.');

    await Project.deleteMany({});
    await Inquiry.deleteMany({});

    await Project.insertMany(sampleProjects);
    await Inquiry.insertMany(sampleInquiries);

    console.log('[Seed] Database seeded successfully with sample projects and inquiries!');
    process.exit(0);
  } catch (error) {
    console.error('[Seed] Database seed error:', error);
    process.exit(1);
  }
}

seedDatabase();
