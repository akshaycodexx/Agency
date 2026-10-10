import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Play, Compass, Layers, Zap, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import ServiceList from '../components/ServiceList';
import ProjectCard from '../components/ProjectCard';
import ProjectFilter from '../components/ProjectFilter';
import ProcessTimeline from '../components/ProcessTimeline';
import FounderSection from '../components/FounderSection';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';
import CinematicHeroVisual from '../components/CinematicHeroVisual';
import { servicesData } from '../data/servicesData';
import axios from 'axios';

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        const [projRes, testRes] = await Promise.allSettled([
          axios.get(`${apiUrl}/api/projects`),
          axios.get(`${apiUrl}/api/testimonials`)
        ]);

        if (projRes.status === 'fulfilled' && projRes.value.data.success) {
          setProjects(projRes.value.data.data);
        }
        if (testRes.status === 'fulfilled' && testRes.value.data.success) {
          setTestimonials(testRes.value.data.data);
        }
      } catch (err) {
        console.warn('Backend API connection offline, displaying static dataset:', err);
      }
    };

    fetchHomeData();
  }, []);

  const categories = ['All', 'Social Media', 'Branding', 'Web', 'Advertising'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  const agencyStats = [
    { number: '150+', label: 'Projects Executed', sub: 'Across 10+ Industries' },
    { number: '50M+', label: 'Organic Reel Views', sub: 'High-Impact Content' },
    { number: '98.4%', label: 'Client Satisfaction', sub: 'Long-term Partnerships' },
    { number: '100%', label: 'Bespoke Craft', sub: 'Zero Generic Templates' }
  ];

  return (
    <>
      <SEO
        title="CREATIVION — Creative, Digital & Growth Agency"
        description="Creativion is a modern creative, digital marketing and technology agency helping ambitious businesses build stronger brands, create high-quality content, and grow digital presence."
      />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 bg-[#05070e] text-white overflow-hidden border-b border-white/10">
        
        {/* Dynamic Multi-Color Ambient Mesh Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-blue-600/25 via-indigo-600/20 to-orange-500/20 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          
          {/* Top Pill Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center space-x-2.5 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500/15 via-indigo-500/15 to-orange-500/15 border border-blue-500/30 text-blue-300 text-xs font-black uppercase tracking-[0.2em] shadow-xl">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>CREATIVE • DIGITAL • GROWTH AGENCY</span>
            </div>
          </div>

          {/* Hero Main Headline */}
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.08] max-w-5xl mx-auto">
            WE CREATE DIGITAL EXPERIENCES THAT <span className="text-gradient-orange">MOVE BRANDS.</span>
          </h1>

          {/* Hero Subtitle */}
          <p className="text-slate-300 text-base sm:text-xl leading-relaxed max-w-3xl mx-auto font-normal">
            Creativion is a creative and digital growth agency helping ambitious businesses build stronger brands, create engaging content and grow their digital presence.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-base transition-all shadow-[0_0_35px_rgba(37,99,235,0.45)] border border-blue-400/30 active:scale-95"
            >
              <span>Request a Proposal</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>

            <Link
              to="/work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-base transition-all border border-white/15 backdrop-blur-md cursor-pointer group"
            >
              <span>Explore Selected Work</span>
              <ArrowUpRight className="w-4 h-4 text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Cinematic Hero Video Stage */}
          <CinematicHeroVisual />

          {/* Live Agency Stat Counter Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-[#0a0f1d] border border-white/10 shadow-2xl relative overflow-hidden max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-orange-500/10 pointer-events-none" />
            {agencyStats.map((st, i) => (
              <div key={i} className="space-y-1 text-center z-10">
                <span className="font-display font-black text-3xl sm:text-4xl text-gradient-orange block">
                  {st.number}
                </span>
                <span className="text-xs font-bold text-white block uppercase tracking-wider">
                  {st.label}
                </span>
                <span className="text-[11px] text-slate-400 block font-medium">
                  {st.sub}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* INTRODUCTION SECTION */}
      <section className="py-24 bg-[#080d19] text-white border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-block text-xs font-extrabold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                Agency Philosophy
              </span>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-white leading-tight">
                CREATIVE THINKING. <br className="hidden sm:block" />
                <span className="text-gradient-blue">DIGITAL EXECUTION.</span>
              </h2>
            </div>

            <div className="lg:col-span-7 bg-[#0a0f1d] rounded-3xl p-8 sm:p-12 border border-white/10 space-y-6 shadow-2xl relative group hover:border-blue-500/40 transition-colors">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
              
              <p className="text-slate-200 text-lg sm:text-xl leading-relaxed font-normal">
                Creativion combines creative strategy, digital marketing, content production and technology to help businesses build meaningful digital brands.
              </p>
              <p className="text-slate-300 text-base leading-relaxed">
                We believe that every modern business deserves digital execution that matches the quality of their service. From visual aesthetics to performance marketing funnels, we help you turn online attention into long-term commercial momentum.
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 group"
                >
                  <span>Discover Creativion Story</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO SECTION */}
      <section className="py-28 bg-[#05070e] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            badge="Services & Capabilities"
            title="WHAT WE DO"
            subtitle="From the first idea to digital execution, we help brands turn attention into meaningful growth."
          />

          <ServiceList services={servicesData.slice(0, 8)} />

          <div className="mt-14 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm transition-all shadow-[0_0_25px_rgba(37,99,235,0.4)]"
            >
              <span>View All 16 Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SELECTED WORK / PORTFOLIO SECTION */}
      <section className="py-28 bg-[#080d19] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            badge="Selected Work"
            title="IDEAS MADE VISIBLE & MEMORABLE"
            subtitle="Ideas are better when they become something people can see, feel and remember."
            centered
          />

          <ProjectFilter
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project._id || project.slug} project={project} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm transition-all shadow-[0_0_25px_rgba(37,99,235,0.4)]"
            >
              <span>Explore All Case Studies</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CREATIVION SECTION */}
      <section className="py-28 bg-[#05070e] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            badge="Core Pillars"
            title="WHY CREATIVION"
            subtitle="Four guiding principles that shape every strategic campaign and design asset we create."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0a0f1d] border border-white/10 space-y-4 hover:border-blue-500/50 shadow-xl transition-all group">
              <span className="font-display font-black text-4xl text-blue-400 block">01</span>
              <h3 className="font-display font-bold text-2xl text-white group-hover:text-blue-400 transition-colors">Strategy First</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                We never execute design or marketing in a vacuum. Before pixels or code, we study your business model, customer psychology, and competitive gaps to ensure every deliverable drives commercial purpose.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-[#0a0f1d] border border-white/10 space-y-4 hover:border-orange-500/50 shadow-xl transition-all group">
              <span className="font-display font-black text-4xl text-orange-400 block">02</span>
              <h3 className="font-display font-bold text-2xl text-white group-hover:text-orange-400 transition-colors">Creativity With Purpose</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Visual aesthetics are not just decoration — they are your brand's instant trust accelerator. We create high-end visual assets, carousels, and videos that elevate your positioning above commodity rivals.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-[#0a0f1d] border border-white/10 space-y-4 hover:border-indigo-500/50 shadow-xl transition-all group">
              <span className="font-display font-black text-4xl text-indigo-400 block">03</span>
              <h3 className="font-display font-bold text-2xl text-white group-hover:text-indigo-400 transition-colors">Technology That Works</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                From mobile-first React platforms to seamless lead integrations, we build fast, accessible digital tools engineered for real-world user speed and technical reliability.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-[#0a0f1d] border border-white/10 space-y-4 hover:border-emerald-500/50 shadow-xl transition-all group">
              <span className="font-display font-black text-4xl text-emerald-400 block">04</span>
              <h3 className="font-display font-bold text-2xl text-white group-hover:text-emerald-400 transition-colors">Growth That Matters</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                We focus on metrics that align with business health — qualified inquiries, brand equity, engagement retention, and sustainable lead funnels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROCESS SECTION */}
      <section className="py-28 bg-[#080d19] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            badge="Agency Process"
            title="HOW WE WORK"
            subtitle="A clear 6-step framework for converting strategic ideas into launched digital results."
          />

          <ProcessTimeline />
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section className="py-28 bg-[#05070e] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FounderSection />
        </div>
      </section>

      {/* HAPPY CUSTOMERS / TESTIMONIALS SECTION */}
      <section className="py-28 bg-[#080d19] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            badge="Client Feedback"
            title="HAPPY CUSTOMERS"
            subtitle="Good work creates results. Great relationships create long-term partnerships."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <TestimonialCard key={t._id || t.company} testimonial={t} />
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300"
            >
              <span>View All Testimonials & Reviews</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL EDITORIAL CTA */}
      <CTASection />

      {/* LIGHTBOX VIDEO MODAL */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
          <div className="relative max-w-4xl w-full bg-[#0a0f1d] rounded-3xl border border-white/20 overflow-hidden shadow-2xl space-y-4 p-4 sm:p-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="font-display font-extrabold text-white text-sm">
                CREATIVION SHOWCASE REEL (4K)
              </span>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs cursor-pointer"
              >
                Close ✕
              </button>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden bg-black border border-white/10">
              <video
                src="/herologovideo.mp4"
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
