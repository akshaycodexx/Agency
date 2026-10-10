import { Link } from 'react-router-dom';
import { Mail, Quote, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Linkedin, Instagram } from '../components/SocialIcons';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { companyInfo } from '../data/companyData';

export default function FounderPage() {
  const beliefs = [
    { title: 'On Creativity', desc: 'Creativity is not fluff; it is the visual leverage that makes a business memorable in crowded digital channels.' },
    { title: 'On Technology', desc: 'Code must be fast, accessible, and resilient. No slow bulky setups that compromise user experience.' },
    { title: 'On Business Growth', desc: 'Design without strategy is art. Design with strategy builds sustainable commercial authority.' },
    { title: 'On Client Partnerships', desc: 'We operate as an extension of your team with total transparency, honest feedback, and regular communication.' }
  ];

  return (
    <>
      <SEO
        title="Founder — Creativion Story & Philosophy"
        description="Learn about Creativion's founder, vision, creative philosophy, and leadership strategy."
      />

      {/* HERO */}
      <section className="pt-36 pb-20 bg-[#05070e] text-white border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-600/20 to-orange-500/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-block text-xs font-extrabold uppercase tracking-[0.2em] px-3.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            Agency Leadership
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white mt-4 mb-4 leading-tight">
            MEET THE <span className="text-gradient-orange">FOUNDER.</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl leading-relaxed">
            Leading Creativion with a passion for creative storytelling, performance engineering, and business growth.
          </p>
        </div>
      </section>

      {/* FOUNDER DETAIL */}
      <section className="py-24 bg-[#080d19] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Portrait & Social Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#0a0f1d]">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
                  alt="Founder of Creativion"
                  className="w-full h-full object-cover filter grayscale contrast-105 hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-sm font-extrabold uppercase tracking-widest text-blue-400 block">
                    [FOUNDER NAME]
                  </span>
                  <p className="text-xs text-slate-300 font-medium">Founder & Creative Director</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-[#0a0f1d] rounded-3xl p-6 border border-white/10 space-y-4">
                <h4 className="font-display font-bold text-white text-sm">
                  Connect with the Founder
                </h4>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={companyInfo.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-slate-200 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={companyInfo.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-slate-200 transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-orange-400" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-slate-200 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-slate-300" />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Story & Philosophy */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-blue-400">
                  Origin & Inspiration
                </span>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-2">
                  WHY CREATIVION WAS STARTED
                </h2>
              </div>

              <div className="space-y-4 text-slate-300 leading-relaxed text-base">
                <p className="text-lg text-white font-medium leading-relaxed italic border-l-4 border-blue-500 pl-4 py-1">
                  "Creativion began with a simple observation: modern businesses need agency partners who can think strategically, design beautifully, and execute technically without friction."
                </p>
                <p>
                  Having observed how many traditional agencies relied on generic templates and surface-level vanity metrics, I wanted to build an agency focused on real craft and commercial growth.
                </p>
                <p>
                  At Creativion, we treat every project as an opportunity to build something memorable. Whether we are launching a brand identity for a culinary venue, engineering a custom React platform, or managing performance ad campaigns — our commitment is aesthetic excellence backed by commercial performance.
                </p>
              </div>

              {/* Founder Beliefs Grid */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <h3 className="font-display font-bold text-xl text-white">
                  What We Believe
                </h3>

                <div className="space-y-4">
                  {beliefs.map((b, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-[#0a0f1d] border border-white/10 space-y-1 hover:border-blue-500/40 transition-colors">
                      <h4 className="font-display font-bold text-base text-white">{b.title}</h4>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{b.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
