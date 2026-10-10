import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import ProcessTimeline from '../components/ProcessTimeline';
import CTASection from '../components/CTASection';

export default function ProcessPage() {
  return (
    <>
      <SEO
        title="Our Process — How Creativion Works"
        description="Learn about Creativion's 6-step agency execution process from discovery and research to creative launch and ongoing optimization."
      />

      <section className="pt-36 pb-20 bg-[#05070e] text-white border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-600/20 to-orange-500/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-block text-xs font-extrabold uppercase tracking-[0.2em] px-3.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            Agency Methodology
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white mt-4 mb-4 leading-tight">
            HOW WE <span className="text-gradient-orange">WORK.</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl leading-relaxed">
            Our disciplined 6-phase framework ensures total transparency, alignment, and quality control at every stage of project execution.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#080d19] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Step-by-Step Execution"
            title="THE CREATIVION FRAMEWORK"
            subtitle="Understand what happens at every phase, what inputs we need from you, and what concrete assets we deliver."
          />

          <ProcessTimeline />
        </div>
      </section>

      <CTASection />
    </>
  );
}
