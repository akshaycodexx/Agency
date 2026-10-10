export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = false
}) {
  return (
    <div className={`space-y-3.5 mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      {badge && (
        <div className={centered ? 'flex justify-center' : ''}>
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/25 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span>{badge}</span>
          </span>
        </div>
      )}
      {title && (
        <h2 className="font-display font-extrabold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
