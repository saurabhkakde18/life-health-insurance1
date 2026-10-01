import { Check } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      title: 'Personalised Guidance',
      desc: 'Every recommendation is customized to your exact family requirements, budget, and long-term financial milestones.'
    },
    {
      title: 'Easy Policy Assistance',
      desc: 'We handle the paperwork, KYC compliance, documentation, and coordination so you experience zero stress.'
    },
    {
      title: 'Life Insurance Support',
      desc: 'Comprehensive advice on term plans, endowment savings, retirement pensions, and child career protection.'
    },
    {
      title: 'Health Insurance Support',
      desc: 'Guidance across individual mediclaim, family floater shields, critical illness covers, and cashless networks.'
    },
    {
      title: 'Customer-Focused Service',
      desc: 'Honest comparisons, clear disclosure of waiting periods and policy clauses—no hidden surprises or pushy sales.'
    },
    {
      title: 'Long-Term Relationship',
      desc: 'We stand by your family through yearly renewals, nominee updates, and crucial claim-time assistance.'
    }
  ];

  return (
    <div className="py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-[#0f172a] mb-4">Why Choose LifeExpress?</h2>
        <p className="text-slate-500 text-lg">We prioritize transparent guidance, thorough paperwork management, and enduring commitment over transactional policy selling.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {reasons.map((reason, index) => (
          <div key={index} className="bg-[#f8fafc] rounded-2xl p-6 border border-slate-100 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
                <Check size={16} className="text-teal-600" />
              </div>
              <h4 className="font-bold text-slate-800">{reason.title}</h4>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">{reason.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#0f172a] rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-sm text-slate-300">
          <span className="w-2 h-2 rounded-full bg-teal-400 shrink-0"></span>
          <p><strong className="text-white">Our Advisory Pledge:</strong> Transparent advice, zero false promises, and full compliance with IRDAI registered insurer regulations.</p>
        </div>
        <div className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold whitespace-nowrap shrink-0">
          Client First · Always
        </div>
      </div>
    </div>
  );
}
