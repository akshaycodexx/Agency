import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';

export default function FounderSection() {
  return (
    <div className="bg-gradient-to-br from-[#080b11] to-[#0f1523] text-white rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Founder Portrait Visual */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-square max-w-sm mx-auto rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl bg-slate-900">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
              alt="Founder of Creativion"
              className="w-full h-full object-cover filter grayscale contrast-105 hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                [ADD FOUNDER NAME]
              </span>
              <p className="text-xs text-slate-300">Founder & Creative Director</p>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1 rounded-full">
            <Quote className="w-3.5 h-3.5" />
            <span>Founder Philosophy</span>
          </div>

          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
            BUILT WITH A SIMPLE BELIEF: GREAT IDEAS DESERVE GREAT EXECUTION.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Creativion was founded to bridge the gap between abstract creative vision and tangible commercial growth. Too many agencies deliver pretty visuals without strategy, or technical code without aesthetic soul.
          </p>

          <p className="text-slate-400 text-sm leading-relaxed">
            We built Creativion as a multidisciplinary studio where strategy, visual aesthetics, performance marketing, and modern technology execute together seamlessly.
          </p>

          <div className="pt-2">
            <Link
              to="/founder"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-900 font-semibold text-sm hover:bg-blue-50 transition-all shadow-md active:scale-95"
            >
              <span>Meet the Founder</span>
              <ArrowRight className="w-4 h-4 text-blue-600" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
