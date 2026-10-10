import { useState, useEffect } from 'react';
import axios from 'axios';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        const res = await axios.get(`${apiUrl}/api/testimonials`);
        if (res.data.success) {
          setTestimonials(res.data.data);
        }
      } catch (err) {
        console.warn('API error loading testimonials:', err);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <>
      <SEO
        title="Happy Customers — Client Testimonials & Reviews"
        description="Read real client feedback and reviews from businesses partnering with Creativion for branding, video production, web development, and digital marketing."
      />

      <section className="pt-36 pb-20 bg-[#05070e] text-white border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-600/20 to-orange-500/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-block text-xs font-extrabold uppercase tracking-[0.2em] px-3.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            Client Partnerships
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white mt-4 mb-4 leading-tight">
            HAPPY <span className="text-gradient-orange">CUSTOMERS.</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl leading-relaxed">
            Good work creates results. Great relationships create long-term partnerships.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#080d19] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Customer Feedback"
            title="WHAT OUR CLIENTS SAY"
            subtitle="Explore how Creativion helps businesses elevate their design aesthetics and achieve digital growth."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <TestimonialCard key={t._id || t.company} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
