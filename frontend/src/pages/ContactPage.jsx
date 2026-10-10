import { Mail, Phone, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';
import MapSection from '../components/MapSection';
import { companyInfo } from '../data/companyData';

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Creativion — Start a Project"
        description="Get in touch with Creativion Agency to discuss your brand identity, reels video production, paid ad campaign, or custom web project."
      />

      {/* HERO */}
      <section className="pt-36 pb-20 bg-[#05070e] text-white border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-600/20 to-orange-500/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-block text-xs font-extrabold uppercase tracking-[0.2em] px-3.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            Agency Contact
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white mt-4 mb-4 leading-tight">
            LET'S BUILD SOMETHING <span className="text-gradient-orange">PEOPLE REMEMBER.</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl leading-relaxed">
            Tell us what you're building, what you're trying to solve, or where you want to go. We'll take it from there.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT: FORM + CARDS */}
      <section className="py-24 bg-[#080d19] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Form Column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Direct Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-[#0a0f1d] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl space-y-6">
                <h3 className="font-display font-bold text-xl text-white border-b border-white/10 pb-4">
                  Direct Agency Contact
                </h3>

                <div className="space-y-4">
                  {/* Email */}
                  <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                        Email Us
                      </span>
                      <a href={`mailto:${companyInfo.email}`} className="text-sm font-bold text-white hover:text-blue-400">
                        {companyInfo.email}
                      </a>
                      <p className="text-xs text-slate-400 mt-0.5">We respond to inquiries within 24 business hours.</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="p-3 rounded-xl bg-orange-500/20 text-orange-400 border border-orange-500/30 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                        Call Us
                      </span>
                      <a href={`tel:${companyInfo.phone}`} className="text-sm font-bold text-white hover:text-blue-400">
                        {companyInfo.phone}
                      </a>
                      <p className="text-xs text-slate-400 mt-0.5">Mon - Fri • 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="p-3 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                        Visit Us
                      </span>
                      <p className="text-sm font-bold text-white">
                        {companyInfo.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <MapSection />

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
