import SEO from '../components/SEO';
import { companyInfo } from '../data/companyData';

export default function PrivacyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy — Creativion Agency"
        description="Privacy policy and data protection principles for Creativion website visitors and project clients."
      />

      <section className="pt-32 pb-16 bg-[#080b11] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-400">
            Legal & Privacy
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white mt-3 mb-4">
            PRIVACY POLICY
          </h1>
          <p className="text-slate-400 text-sm">Last updated: October 2026</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none space-y-8 text-slate-700">
          <p className="text-base leading-relaxed">
            At <strong>Creativion</strong>, we respect your privacy and are committed to protecting the personal information you share with us through our website contact forms and career application portals.
          </p>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-slate-900">1. Information We Collect</h2>
            <p className="text-sm leading-relaxed">
              We collect information provided directly by you when submitting a project inquiry or career application, including your name, email address, phone number, company details, project descriptions, and uploaded resume files.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-slate-900">2. How We Use Information</h2>
            <p className="text-sm leading-relaxed">
              Information collected is used solely to respond to project inquiries, evaluate career applications, deliver project proposals, and maintain business communications. We do not sell or rent your personal data to third-party marketers.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-slate-900">3. Data Security & Storage</h2>
            <p className="text-sm leading-relaxed">
              We implement industry-standard security protocols and environment configuration safeguards to prevent unauthorized access, disclosure, or loss of submitted data.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-slate-900">4. Contact Information</h2>
            <p className="text-sm leading-relaxed">
              If you have questions regarding this Privacy Policy, please contact Creativion at <strong>{companyInfo.email}</strong>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
