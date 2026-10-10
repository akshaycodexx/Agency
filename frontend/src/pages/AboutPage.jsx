import { Link } from 'react-router-dom';
import { Target, Eye, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { industriesList } from '../data/companyData';

export default function AboutPage() {
  const values = [
    { name: 'Creativity', desc: 'Crafting original visual assets and strategic concepts that capture consumer attention.' },
    { name: 'Integrity', desc: 'Transparent communication, honest timelines, and real data without inflated claims.' },
    { name: 'Innovation', desc: 'Leveraging AI workflows, modern web frameworks, and current media formats.' },
    { name: 'Consistency', desc: 'Delivering agency-grade precision across every design, video cut, and ad campaign.' },
    { name: 'Client Success', desc: 'Measuring our success by the growth, lead quality, and market authority of our clients.' },
    { name: 'Learning', desc: 'Continuously refining skills, testing content hooks, and adopting modern technologies.' }
  ];

  const storyTimeline = [
    { title: 'The Idea', desc: 'Recognizing that businesses struggled with fragmented agencies split between code and design.' },
    { title: 'The Beginning', desc: 'Establishing Creativion as a modern unified studio uniting design, content, and technology.' },
    { title: 'First Projects', desc: 'Partnering with culinary venues, real estate firms, and startups to build flagship visual identities.' },
    { title: 'Growing the Team', desc: 'Bringing together specialized strategists, video editors, designers, and web developers.' },
    { title: 'Building the Agency', desc: 'Refining our 6-step agency framework to deliver scalable digital growth across verticals.' }
  ];

  return (
    <>
      <SEO
        title="About Creativion — Our Story, Values & Mission"
        description="Learn about Creativion's agency story, core values, mission, and the multidisciplinary creative & digital team behind our client work."
      />

      {/* HERO HEADER */}
      <section className="pt-36 pb-20 bg-[#05070e] text-white border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-600/20 to-orange-500/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-block text-xs font-extrabold uppercase tracking-[0.2em] px-3.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            About Agency
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white mt-4 mb-4 leading-tight">
            WE ARE <span className="text-gradient-orange">CREATIVION.</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl leading-relaxed">
            Creativion represents the powerful synergy of Creative Thinking + Innovation + Digital Execution + Business Growth.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-24 bg-[#080d19] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl aspect-square bg-[#0a0f1d]">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                  alt="Creativion Studio Collaboration"
                  className="w-full h-full object-cover filter contrast-105"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                badge="Why Creativion Was Created"
                title="BRIDGING STRATEGY, DESIGN & TECHNOLOGY"
              />
              <p className="text-slate-300 text-base leading-relaxed">
                Creativion was founded to solve a common dilemma faced by growing businesses: traditional marketing agencies often lacked technical speed, while technical web developers lacked visual aesthetic depth.
              </p>
              <p className="text-slate-400 text-base leading-relaxed">
                We built Creativion to deliver both under one roof. Our multidisciplinary approach ensures that your brand identity, visual content, paid acquisition funnels, and web applications speak with one unified, high-impact voice.
              </p>
              <div className="pt-2">
                <Link
                  to="/founder"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300"
                >
                  <span>Read Founder Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT STARTED TIMELINE */}
      <section className="py-24 bg-[#05070e] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Agency Journey"
            title="HOW IT STARTED"
            subtitle="Building a modern digital agency step-by-step with focus on client outcomes."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {storyTimeline.map((item, idx) => (
              <div key={idx} className="bg-[#0a0f1d] rounded-3xl p-6 border border-white/10 space-y-3 hover:border-blue-500/40 transition-colors">
                <span className="font-display font-extrabold text-3xl text-blue-400">0{idx + 1}</span>
                <h3 className="font-display font-bold text-base text-white">{item.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 bg-[#080d19] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0a0f1d] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-2xl text-white">Our Mission</h3>
              <p className="text-slate-300 text-base leading-relaxed">
                "To help businesses communicate better, create better and grow confidently in the digital world."
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-[#0a0f1d] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/20 text-orange-400 flex items-center justify-center border border-orange-500/30">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-2xl text-white">Our Vision</h3>
              <p className="text-slate-300 text-base leading-relaxed">
                To be the most trusted creative and digital growth partner for ambitious companies worldwide — recognized for aesthetic precision, technical excellence, and transparent execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-24 bg-[#05070e] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Agency Culture"
            title="OUR VALUES"
            subtitle="The fundamental standards that guide how we treat clients, design artwork, and write code."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-[#0a0f1d] border border-white/10 space-y-2 hover:border-blue-500/40 transition-colors">
                <h4 className="font-display font-bold text-lg text-white">{v.name}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="py-24 bg-[#080d19] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Industries We Empower"
            title="WHO WE WORK WITH"
            subtitle="We partner with ambitious companies across diverse verticals to solve creative & growth challenges."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesList.map((ind, idx) => (
              <div key={idx} className="bg-[#0a0f1d] rounded-3xl p-6 border border-white/10 space-y-3 hover:border-blue-500/40 transition-colors">
                <h3 className="font-display font-bold text-lg text-white">{ind.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
