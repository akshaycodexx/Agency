import SEO from '../components/SEO';
import { companyInfo } from '../data/companyData';

export default function TermsPage() {
  return (
    <>
      <SEO
        title="Terms & Conditions — Creativion Agency"
        description="Terms and conditions governing Creativion agency client engagements, services, and website use."
      />

      <section className="pt-32 pb-16 bg-[#080b11] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-400">
            Legal & Compliance
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white mt-3 mb-4">
            TERMS & CONDITIONS
          </h1>
          <p className="text-slate-400 text-sm">Last updated: October 2026</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700">
          <p className="text-base leading-relaxed">
            Welcome to <strong>Creativion</strong>. By accessing our website or engaging with our digital agency services, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-slate-900">1. Client Engagements & Scope</h2>
            <p className="text-sm leading-relaxed">
              All agency projects are executed based on mutually agreed-upon project proposals, discovery scopes, and service agreements. Any modifications to project scope will be documented and communicated prior to implementation.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-slate-900">2. Intellectual Property Rights</h2>
            <p className="text-sm leading-relaxed">
              Upon full payment for completed projects, clients receive ownership of finalized visual assets and custom deliverables as specified in the service agreement. Creativion retains the right to display completed work in agency portfolios and case studies unless bound by a non-disclosure agreement (NDA).
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-slate-900">3. Payment & Invoicing Terms</h2>
            <p className="text-sm leading-relaxed">
              Payment schedules are outlined in individual project proposals. Creativion operates on transparent, milestone-based or retainer billing models. Subscription plans and generic pricing tiers are not offered.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-slate-900">4. Contact & Legal Enquiries</h2>
            <p className="text-sm leading-relaxed">
              For questions regarding our Terms & Conditions or legal inquiries, please contact us at <strong>{companyInfo.email}</strong>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
