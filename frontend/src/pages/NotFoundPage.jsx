import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="404 — Page Not Found | Creativion"
        description="The page you are looking for does not exist or has been moved."
      />

      <section className="min-h-[80vh] pt-32 pb-20 bg-[#080b11] text-white flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center space-y-6">
          <span className="text-blue-500 font-mono text-7xl sm:text-9xl font-extrabold tracking-widest block">
            404
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            PAGE NOT FOUND
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-500/25"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all border border-white/10"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>View Portfolio</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
