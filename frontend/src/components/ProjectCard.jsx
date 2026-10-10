import { Link } from 'react-router-dom';
import { ArrowUpRight, Folder, Sparkles } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <div className="group bg-[#0a0f1d] rounded-3xl border border-white/10 overflow-hidden hover:border-blue-500/50 hover:shadow-[0_10px_40px_-15px_rgba(59,130,246,0.3)] transition-all duration-500 flex flex-col justify-between relative">
      
      {/* Background Accent Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div>
        {/* Cover Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-transparent to-black/30 opacity-80" />
          
          <div className="absolute top-4 left-4">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-blue-400 border border-blue-500/30">
              {project.category}
            </span>
          </div>

          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 sm:p-7 space-y-4">
          <div className="flex items-center space-x-2 text-xs font-bold text-orange-400 uppercase tracking-widest">
            <Folder className="w-3.5 h-3.5" />
            <span>{project.industry}</span>
          </div>

          <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-blue-400 transition-colors leading-snug">
            {project.title}
          </h3>

          <p className="text-slate-300 text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {project.services && project.services.slice(0, 3).map((srv, idx) => (
              <span key={idx} className="text-[11px] px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 font-medium">
                {srv}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="px-6 pb-6 pt-2">
        <Link
          to={`/work/${project.slug}`}
          className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/15 bg-white/5 group-hover:bg-blue-600 group-hover:border-blue-500 text-white font-semibold text-sm transition-all shadow-md"
        >
          <span>View Full Case Study</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
