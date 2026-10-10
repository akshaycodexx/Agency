import { useState } from 'react';
import axios from 'axios';
import { CheckCircle2, Upload, Send, AlertCircle, Loader2 } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { openPositions } from '../data/careersData';

export default function CareersPage() {
  const [resumeFile, setResumeFile] = useState(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: openPositions[0]?.title || 'Social Media Strategist & Manager',
    experience: '1-3 Years',
    portfolio: '',
    linkedin: '',
    coverMessage: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const payload = new FormData();
      Object.keys(formData).forEach(key => payload.append(key, formData[key]));
      if (resumeFile) {
        payload.append('resume', resumeFile);
      }

      await axios.post(`${apiUrl}/api/careers/apply`, payload, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      setStatus({
        submitting: false,
        success: true,
        error: null
      });
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        error: err.response?.data?.error || 'Failed to submit application. Please try again.'
      });
    }
  };

  return (
    <>
      <SEO
        title="Careers — Join Creativion Agency"
        description="We are always interested in meeting creative thinkers, builders, video editors, designers, and strategists."
      />

      {/* HERO */}
      <section className="pt-36 pb-20 bg-[#05070e] text-white border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-600/20 to-orange-500/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-block text-xs font-extrabold uppercase tracking-[0.2em] px-3.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            Join Our Team
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white mt-4 mb-4 leading-tight">
            BUILD THE FUTURE WITH <span className="text-gradient-orange">CREATIVION.</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl leading-relaxed">
            We are always interested in meeting creative thinkers, builders, strategists and people who want to make meaningful work.
          </p>
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="py-24 bg-[#080d19] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Culture & Opportunities"
            title="WHY WORK WITH US"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Creative Freedom', desc: 'Space to experiment with visual formats, motion design, and storytelling.' },
              { title: 'Continuous Learning', desc: 'Direct exposure to performance data, modern web stack, and AI tools.' },
              { title: 'Real Client Impact', desc: 'Work on active campaigns and digital products for real growing businesses.' },
              { title: 'Collaborative Environment', desc: 'No silos. Designers, editors, marketers, and coders solve problems together.' },
              { title: 'Growth Opportunities', desc: 'Meritocratic culture where initiative and craft quality lead to fast advancement.' },
              { title: 'Modern Technology', desc: 'Leverage industry-standard creative suites, React, Node, and AI tooling.' }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-[#0a0f1d] border border-white/10 space-y-2 hover:border-blue-500/40 transition-colors">
                <h3 className="font-display font-bold text-lg text-white">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="py-24 bg-[#05070e] text-white border-b border-white/10" id="openings">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            badge="Current Opportunities"
            title="OPEN POSITIONS"
            subtitle="Explore current roles available at Creativion Agency."
          />

          <div className="space-y-6">
            {openPositions.map((job) => (
              <div key={job.id} className="bg-[#0a0f1d] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl space-y-6 hover:border-blue-500/40 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                      {job.department} • {job.type}
                    </span>
                    <h3 className="font-display font-bold text-2xl text-white mt-1">
                      {job.title}
                    </h3>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      Exp: {job.experience}
                    </span>
                    <a
                      href="#apply-form"
                      onClick={() => setFormData(prev => ({ ...prev, position: job.title }))}
                      className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors shadow-md"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">{job.shortDesc}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
                  <div>
                    <h4 className="font-bold text-white mb-2">Key Responsibilities:</h4>
                    <ul className="space-y-1.5">
                      {job.responsibilities.map((r, i) => (
                        <li key={i} className="flex items-start space-x-2 text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-2">Requirements:</h4>
                    <ul className="space-y-1.5">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="flex items-start space-x-2 text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section className="py-24 bg-[#080d19] text-white" id="apply-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0a0f1d] rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl space-y-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-blue-400">
                Application Form
              </span>
              <h3 className="font-display font-bold text-3xl text-white mt-1">
                APPLY TO CREATIVION
              </h3>
              <p className="text-slate-400 text-sm mt-1">
                Submit your details, portfolio link, and resume below.
              </p>
            </div>

            {status.success && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm font-semibold flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Your application has been received successfully! Our team will review your profile.</span>
              </div>
            )}

            {status.error && (
              <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm flex items-center space-x-3">
                <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                <span>{status.error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm outline-none focus:border-blue-500"
                  />
                </div>

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
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Position Applied For *
                  </label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#0a0f1d] text-white text-sm outline-none focus:border-blue-500"
                  >
                    {openPositions.map((p) => (
                      <option key={p.id} value={p.title} className="bg-[#0a0f1d]">{p.title}</option>
                    ))}
                    <option value="General Application / Internship" className="bg-[#0a0f1d]">General Application / Internship</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Years of Experience
                  </label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="e.g. 2+ Years"
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Portfolio / Website URL
                  </label>
                  <input
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    placeholder="https://behance.net/yourprofile"
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    LinkedIn Profile URL
                  </label>
                  <input
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/in/yourprofile"
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Upload Resume (.pdf, .doc, .docx)
                </label>
                <div className="flex items-center space-x-3 p-4 rounded-xl border border-dashed border-white/20 bg-white/5">
                  <Upload className="w-5 h-5 text-slate-400" />
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="text-xs text-slate-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-blue-600/20 file:text-blue-300 hover:file:bg-blue-600/30"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Cover Note / Introduction
                </label>
                <textarea
                  name="coverMessage"
                  rows={4}
                  value={formData.coverMessage}
                  onChange={handleChange}
                  placeholder="Tell us about yourself and why you'd like to work with Creativion..."
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm outline-none focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                disabled={status.submitting}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30 cursor-pointer disabled:opacity-50"
              >
                {status.submitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Submitting Application...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Submit Application</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
