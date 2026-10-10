import { Star, Quote } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-[#0a0f1d] rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-blue-500/40 hover:shadow-[0_10px_35px_-10px_rgba(59,130,246,0.25)] transition-all duration-500 flex flex-col justify-between relative group overflow-hidden">
      
      {/* Background Accent Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5 fill-white/5 group-hover:text-blue-500/20 group-hover:fill-blue-500/20 transition-colors pointer-events-none" />

      <div className="space-y-4">
        {/* Rating Stars */}
        <div className="flex items-center space-x-1">
          {[...Array(testimonial.rating || 5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>

        {/* Review Text */}
        <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic relative z-10 font-normal">
          "{testimonial.review}"
        </p>
      </div>

      {/* Client Meta */}
      <div className="pt-6 mt-6 border-t border-white/10 flex items-center space-x-4">
        <img
          src={testimonial.photo || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'}
          alt={testimonial.clientName}
          className="w-12 h-12 rounded-full object-cover border-2 border-white/20 group-hover:border-blue-500 transition-colors"
        />
        <div>
          <h4 className="font-display font-bold text-sm text-white">
            {testimonial.clientName}
          </h4>
          <p className="text-xs text-slate-400 font-medium">
            {testimonial.role} • <span className="text-blue-400 font-semibold">{testimonial.company}</span>
          </p>
          <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold block mt-0.5">
            Industry: {testimonial.industry}
          </span>
        </div>
      </div>
    </div>
  );
}
