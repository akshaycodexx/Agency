import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';

export default function FAQPage() {
  return (
    <>
      <SEO
        title="FAQ — Frequently Asked Questions"
        description="Find answers to common questions regarding Creativion's agency services, project process, proposal timelines, and execution."
      />

      <section className="pt-36 pb-20 bg-[#05070e] text-white border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-600/20 to-orange-500/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-block text-xs font-extrabold uppercase tracking-[0.2em] px-3.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            Agency Answers
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white mt-4 mb-4 leading-tight">
            FREQUENTLY ASKED <span className="text-gradient-blue">QUESTIONS.</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl leading-relaxed">
            Everything you need to know about partnering with Creativion for brand identity, visual content, paid acquisition, and web development.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#080d19] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Common Questions"
            title="TRANSPARENT AGENCY ANSWERS"
            subtitle="Click on any question below to expand details about our workflows and policies."
          />

          <FAQAccordion />
        </div>
      </section>

      <CTASection />
    </>
  );
}
