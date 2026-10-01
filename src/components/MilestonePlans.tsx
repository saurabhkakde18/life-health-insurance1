import { GraduationCap, TreePalm, Users, HeartPulse, CheckCircle2, ChevronRight } from 'lucide-react';

export function MilestonePlans() {
  const plans = [
    {
      id: '01',
      title: 'Child Education Plans',
      icon: GraduationCap,
      quote: "Plan ahead for your child's education and future goals.",
      description: "Ensure higher education funding for medicine, engineering, management, or overseas studies stays protected regardless of life uncertainties.",
      bullets: [
        "Guaranteed financial support milestones",
        "Waiver of premium benefits upon eventuality",
        "Disciplined corpus creation for college degrees"
      ],
      primaryButton: true
    },
    {
      id: '02',
      title: 'Retirement Plans',
      icon: TreePalm,
      quote: "Build a long-term financial protection strategy for retirement.",
      description: "Create dependable pension streams and annuity options that protect your lifestyle, healthcare expenses, and independence after your working years.",
      bullets: [
        "Lifelong guaranteed annuity options",
        "Tax benefits under prevailing IT laws",
        "Hedge against medical inflation in golden years"
      ],
      primaryButton: false
    },
    {
      id: '03',
      title: 'Family Protection',
      icon: Users,
      quote: "Help protect your family's financial future.",
      description: "Adequate pure protection and term insurance to safeguard your household expenses, home loans, and family lifestyle if you are not around.",
      bullets: [
        "Substantial sum assured at affordable premiums",
        "Critical illness & accidental death riders",
        "Financial safety net for home & business liabilities"
      ],
      primaryButton: false
    },
    {
      id: '04',
      title: 'Health Protection',
      icon: HeartPulse,
      quote: "Explore health insurance options for medical and unexpected expenses.",
      description: "Shield family savings against rising hospitalization costs, specialized treatments, modern daycare procedures, and critical ailments.",
      bullets: [
        "Cashless treatment at network hospitals",
        "Coverage for pre & post-hospitalization costs",
        "Annual health checkups and restore benefits"
      ],
      primaryButton: false
    }
  ];

  return (
    <div className="py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h3 className="text-teal-600 font-bold tracking-wider mb-3 uppercase text-xs">Comprehensive Lifecycle Planning</h3>
        <h2 className="text-3xl md:text-4xl font-black text-[#0f172a] mb-4 tracking-tight">Insurance Solutions for Every Stage of Life</h2>
        <p className="text-slate-500 text-lg">Whether starting a young family, funding higher education, or preparing for a peaceful retirement, find the right protection strategy.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan) => (
          <div key={plan.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col h-full hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-xl border border-slate-100 bg-white flex items-center justify-center text-secondary shadow-sm">
                <plan.icon size={20} className={plan.id === '02' ? 'text-amber-500' : plan.id === '04' ? 'text-teal-500' : 'text-blue-600'} />
              </div>
              <span className="text-slate-400 font-medium text-xs pt-2">{plan.id}</span>
            </div>
            
            <h4 className="text-xl font-bold text-teal-800 mb-3 leading-tight">{plan.title}</h4>
            <p className="text-slate-800 font-semibold text-sm mb-4 leading-relaxed">"{plan.quote}"</p>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed flex-1">{plan.description}</p>
            
            <div className="space-y-3 mb-8">
              {plan.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm text-slate-600 leading-snug">
                  <CheckCircle2 size={16} className="text-teal-500 shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
            
            <a 
              href="https://wa.me/918830662663" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`mt-auto flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium text-sm transition-colors ${
                plan.primaryButton 
                  ? 'bg-[#0f172a] hover:bg-[#1e293b] text-white' 
                  : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200'
              }`}
            >
              Plan This Milestone <ChevronRight size={16} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
