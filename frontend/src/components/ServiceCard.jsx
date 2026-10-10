import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <div className="group relative bg-[#0a0f1d] rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-blue-500/50 hover:shadow-[0_10px_40px_-15px_rgba(59,130,246,0.3)] transition-all duration-500 flex flex-col justify-between overflow-hidden">
      {/* Animated Top Glow Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Ambient Radial Glow */}
      <div className="absolute -top-12 -right-12 w-36 h-36 bg-blue-600/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="font-display font-extrabold text-3xl text-white/20 group-hover:text-blue-400 transition-colors">
            {service.id}
          </span>
          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-blue-600 group-hover:border-blue-500 text-blue-400 group-hover:text-white transition-all duration-300 shadow-md">
            {Icon && <Icon className="w-6 h-6" />}
          </div>
        </div>

        <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-3 group-hover:text-blue-400 transition-colors">
          {service.title}
        </h3>

        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          {service.shortDesc}
        </p>
      </div>

      <div className="pt-5 border-t border-white/10 flex items-center justify-between">
        <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 group-hover:text-blue-400 transition-colors">
          Agency Capability
        </span>
        <Link
          to="/contact"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-white/10 group-hover:bg-blue-600 px-3.5 py-1.5 rounded-full transition-all"
        >
          <span>Discuss</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
