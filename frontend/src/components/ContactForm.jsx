import { useState } from 'react';
import axios from 'axios';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Social Media Management',
    budget: '$1,000 - $3,000',
    message: '',
    preferredContact: 'Email'
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const serviceOptions = [
    'Social Media Management',
    'Content Creation',
    'Reels & Video Production',
    'Graphic Design',
    'Branding & Creative Direction',
    'Meta Ads',
    'Google Ads',
    'SEO & Local SEO',
    'Website Development',
    'Landing Pages',
    'Influencer Marketing',
    'WhatsApp Marketing',
    'AI Creative Solutions',
    'Photography & Product Shoots',
    'Other / Custom Scope'
  ];

  const budgetOptions = [
    'Under $1,000',
    '$1,000 - $3,000',
    '$3,000 - $7,000',
    '$7,000 - $15,000',
    '$15,000+',
    'To be discussed'
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      await axios.post(`${apiUrl}/api/inquiries`, formData);
      
      setStatus({
        submitting: false,
        success: true,
        error: null
      });

      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: 'Social Media Management',
        budget: '$1,000 - $3,000',
        message: '',
        preferredContact: 'Email'
      });
    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatus({
        submitting: false,
        success: false,
        error: 'Something went wrong. Please try again or email us directly at info@creativion.com.'
      });
    }
  };

  return (
    <div className="bg-[#0a0f1d] rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
      <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
        Start Your Project
      </h3>
      <p className="text-slate-300 text-sm mb-8">
        Tell us what you're building, what you're trying to solve, or where you want to go.
      </p>

      {status.success && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-start space-x-3 text-sm">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold">Thank you!</p>
            <p>Your inquiry has been received. Our team will review it and get back to you shortly.</p>
          </div>
        </div>
      )}

      {status.error && (
        <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 flex items-start space-x-3 text-sm">
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
          <p>{status.error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Sarah Jenkins"
              className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm outline-none focus:border-blue-500 transition-all"
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              Company Name
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. Apex Hospitality"
              className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm outline-none focus:border-blue-500 transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Email */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="sarah@example.com"
              className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm outline-none focus:border-blue-500 transition-all"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm outline-none focus:border-blue-500 transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Service Required */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              Service Required *
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#0a0f1d] text-white text-sm outline-none focus:border-blue-500 transition-all"
            >
              {serviceOptions.map((srv) => (
                <option key={srv} value={srv} className="bg-[#0a0f1d]">{srv}</option>
              ))}
            </select>
          </div>

          {/* Budget Range */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              Budget Range
            </label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#0a0f1d] text-white text-sm outline-none focus:border-blue-500 transition-all"
            >
              {budgetOptions.map((bg) => (
                <option key={bg} value={bg} className="bg-[#0a0f1d]">{bg}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Preferred Contact Method */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
            Preferred Contact Method
          </label>
          <div className="flex items-center space-x-6">
            {['Email', 'Phone', 'WhatsApp'].map((method) => (
              <label key={method} className="inline-flex items-center space-x-2 text-sm text-slate-300 cursor-pointer">
                <input
                  type="radio"
                  name="preferredContact"
                  value={method}
                  checked={formData.preferredContact === method}
                  onChange={handleChange}
                  className="text-blue-500 focus:ring-blue-500"
                />
                <span>{method}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Project Description */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
            Project Description *
          </label>
          <textarea
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your brand goals, target timeline, key challenges, or specific deliverables..."
            className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm outline-none focus:border-blue-500 transition-all resize-y"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status.submitting}
          className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base transition-all shadow-lg shadow-blue-600/30 disabled:opacity-60 cursor-pointer active:scale-95"
        >
          {status.submitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Sending Inquiry...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Submit Project Inquiry</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
