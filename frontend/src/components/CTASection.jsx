import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-16 sm:py-24 bg-agency-dark text-white relative overflow-hidden border-t border-white/10">
      {/* Decorative Gradient Flares */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-600/20 to-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Ready to elevate your brand?</span>
        </div>

        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white max-w-4xl mx-auto leading-[1.15]">
          LET'S BUILD SOMETHING PEOPLE REMEMBER.
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Have an idea, a business, or a brand that needs to move forward? Let's talk about turning your vision into digital execution.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-base transition-all shadow-xl shadow-blue-600/25 active:scale-95"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-5 h-5" />
          </Link>

          <Link
            to="/work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-base transition-all border border-white/10"
          >
            <span>Explore Our Work</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
