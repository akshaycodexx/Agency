import { useState, useEffect } from 'react';
import axios from 'axios';
import SEO from '../components/SEO';
import ProjectCard from '../components/ProjectCard';
import ProjectFilter from '../components/ProjectFilter';
import CTASection from '../components/CTASection';

export default function WorkPage() {
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        const res = await axios.get(`${apiUrl}/api/projects`);
        if (res.data.success) {
          setProjects(res.data.data);
        }
      } catch (err) {
        console.warn('API offline, showing client work dataset:', err);
      }
    };
    fetchProjects();
  }, []);

  const categories = ['All', 'Social Media', 'Branding', 'Web', 'Advertising'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <>
      <SEO
        title="Work & Case Studies — Creativion Agency"
        description="Explore Creativion's client portfolio across branding, social media management, website development, and digital marketing campaigns."
      />

      {/* HERO */}
      <section className="pt-36 pb-20 bg-[#05070e] text-white border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-600/20 to-orange-500/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-block text-xs font-extrabold uppercase tracking-[0.2em] px-3.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            Client Portfolio
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white mt-4 mb-4 leading-tight">
            SELECTED <span className="text-gradient-orange">WORK.</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl leading-relaxed">
            Ideas are better when they become something people can see, feel and remember. Explore how we craft visual identities, content, and web experiences.
          </p>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="py-24 bg-[#080d19] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      <CTASection />
    </>
  );
}
