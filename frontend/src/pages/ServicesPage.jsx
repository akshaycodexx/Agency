import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { servicesData } from '../data/servicesData';

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Services — What Creativion Delivers"
        description="Explore Creativion's 16 agency capabilities across social media, reels video, graphic design, branding, paid ads, SEO, website development, and AI solutions."
      />

      {/* PAGE HEADER */}
      <section className="pt-36 pb-20 bg-[#05070e] text-white border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-600/20 to-orange-500/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-block text-xs font-extrabold uppercase tracking-[0.2em] px-3.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            Agency Capabilities
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white mt-4 mb-4 leading-tight">
            SERVICES & <span className="text-gradient-blue">EXECUTION.</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl leading-relaxed">
            From the first strategic idea to visual design, performance marketing, and custom code — we deliver tailored creative solutions engineered for measurable business growth.
          </p>
        </div>
      </section>

      {/* SERVICES GRID & DETAILS */}
      <section className="py-24 bg-[#080d19] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeading
            badge="Full Capabilities Spectrum"
            title="OUR 16 AGENCY SERVICES"
            subtitle="Each service is customized to your brand positioning. We do not offer rigid generic subscriptions; we engineer bespoke agency scopes."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {servicesData.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.id}
                  id={service.slug}
                  className="bg-[#0a0f1d] rounded-3xl p-8 border border-white/10 hover:border-blue-500/40 hover:shadow-[0_10px_40px_-15px_rgba(59,130,246,0.25)] transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-blue-600 group-hover:border-blue-500 text-blue-400 group-hover:text-white transition-all">
                          {Icon && <Icon className="w-6 h-6" />}
                        </div>
                        <span className="font-display font-extrabold text-2xl text-white/20 group-hover:text-blue-400 transition-colors">
                          {service.id}
                        </span>
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                        Capabilities
                      </span>
                    </div>

                    <h2 className="font-display font-bold text-2xl text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h2>

                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      {service.shortDesc}
                    </p>

                    <div className="space-y-4 pt-4 border-t border-white/10 text-xs sm:text-sm">
                      <div>
                        <span className="font-bold text-slate-200 block mb-1">Why It Matters:</span>
                        <p className="text-slate-300">{service.whyItMatters}</p>
                      </div>

                      <div>
                        <span className="font-bold text-slate-200 block mb-2">Key Deliverables:</span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.deliverables.map((item, idx) => (
                            <div key={idx} className="flex items-center space-x-2 text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2">
                        <span className="font-bold text-slate-200 block mb-1">Ideal Client:</span>
                        <p className="text-slate-400 italic">{service.idealClient}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/10">
                    <Link
                      to={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-blue-600 border border-white/15 text-white font-semibold text-sm transition-all shadow-md"
                    >
                      <span>Discuss This Service</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
