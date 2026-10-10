import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Folder, Layers, Target, Trophy, Quote } from 'lucide-react';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';
import { LoadingState, ErrorState } from '../components/UIStates';

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      setError(false);
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        const res = await axios.get(`${apiUrl}/api/projects/${slug}`);
        if (res.data.success && res.data.data) {
          setProject(res.data.data);
        } else {
          setError(true);
        }
      } catch (err) {
        console.warn('API error, falling back to static project detail lookup:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  if (loading) {
    return (
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4">
        <LoadingState message="Loading case study details..." />
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 space-y-6">
        <ErrorState message="Case study not found or unavailable." />
        <div className="text-center">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Work & Portfolio</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${project.title} — Case Study`}
        description={project.description}
      />

      {/* HERO SECTION */}
      <section className="pt-36 pb-20 bg-[#05070e] text-white border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-600/20 to-orange-500/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Work</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">
            <span className="px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
              {project.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Folder className="w-3.5 h-3.5" />
              {project.industry}
            </span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white mb-6 max-w-4xl leading-tight">
            {project.title}
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl max-w-3xl leading-relaxed">
            {project.description}
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap gap-2">
            {project.services && project.services.map((srv, idx) => (
              <span key={idx} className="px-3.5 py-1.5 rounded-xl bg-white/10 text-xs font-semibold text-white border border-white/10">
                {srv}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT & GALLERY */}
      <section className="py-24 bg-[#080d19] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Main Cover Image */}
          <div className="rounded-3xl overflow-hidden border border-white/15 shadow-2xl aspect-[21/9] bg-[#0a0f1d]">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Breakdown Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Challenge, Strategy, Execution */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Challenge */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-orange-400">
                  <Target className="w-4 h-4" />
                  <span>The Challenge</span>
                </div>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  Market Context & Problem Statement
                </h2>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  {project.challenge || 'No challenge statement defined.'}
                </p>
              </div>

              {/* Strategy */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-blue-400">
                  <Layers className="w-4 h-4" />
                  <span>The Strategy</span>
                </div>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  Strategic & Creative Direction
                </h2>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  {project.strategy || 'No strategy statement defined.'}
                </p>
              </div>

              {/* Execution */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Execution & Production</span>
                </div>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  Implementation & Rollout
                </h2>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  {project.execution || 'No execution statement defined.'}
                </p>
              </div>

              {/* Gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="space-y-4 pt-8 border-t border-white/10">
                  <h3 className="font-display font-bold text-xl text-white">
                    Project Visual Gallery
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.gallery.map((img, idx) => (
                      <div key={idx} className="rounded-2xl overflow-hidden border border-white/10 aspect-video bg-[#0a0f1d]">
                        <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right Column: Deliverables & Results */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Deliverables Box */}
              <div className="bg-[#0a0f1d] rounded-3xl p-6 sm:p-8 border border-white/10 space-y-4 shadow-xl">
                <h3 className="font-display font-bold text-lg text-white">
                  Key Deliverables
                </h3>
                <ul className="space-y-3 text-sm">
                  {project.deliverables && project.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results Box */}
              <div className="bg-blue-600 text-white rounded-3xl p-6 sm:p-8 space-y-3 shadow-xl">
                <div className="flex items-center space-x-2 text-xs font-extrabold uppercase tracking-wider text-blue-200">
                  <Trophy className="w-4 h-4 text-amber-300" />
                  <span>Impact & Results</span>
                </div>
                <p className="text-white text-sm sm:text-base leading-relaxed">
                  {project.results || 'Results to be added'}
                </p>
              </div>

              {/* Client Feedback */}
              {project.clientFeedback && (
                <div className="bg-[#0a0f1d] rounded-3xl p-6 sm:p-8 border border-white/10 space-y-3 shadow-xl relative">
                  <Quote className="w-8 h-8 text-white/10 fill-white/10" />
                  <p className="text-slate-300 text-xs sm:text-sm italic leading-relaxed">
                    "{project.clientFeedback}"
                  </p>
                  <p className="text-xs font-bold text-white uppercase tracking-wider pt-2 border-t border-white/10">
                    Client Representative
                  </p>
                </div>
              )}

              {/* CTA */}
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30"
                >
                  <span>Discuss Similar Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>

      <CTASection />
    </>
  );
}
