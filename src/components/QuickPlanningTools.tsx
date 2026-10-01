import { useState } from 'react';
import { ShieldCheck, HeartPulse, TreePalm, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';

export function QuickPlanningTools() {
  const [activeTab, setActiveTab] = useState('life');

  const tabs = [
    { id: 'life', name: 'Life Insurance', icon: ShieldCheck },
    { id: 'health', name: 'Health Insurance', icon: HeartPulse },
    { id: 'retirement', name: 'Retirement', icon: TreePalm },
    { id: 'education', name: 'Child Education', icon: GraduationCap },
  ];

  return (
    <div className="py-12">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <h2 className="text-3xl md:text-4xl font-black text-[#0f172a] mb-4">Quick Planning Tools</h2>
        <p className="text-slate-500 text-lg">Select an insurance goal to structure your protection priorities and receive personalized advisory assistance.</p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 bg-slate-50 p-2 rounded-2xl border border-slate-100 w-fit mx-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                activeTab === tab.id 
                  ? 'bg-white text-teal-700 shadow-sm border border-slate-200' 
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'
              }`}
            >
              <tab.icon size={16} className={activeTab === tab.id ? 'text-teal-500' : 'text-slate-400'} />
              {tab.name}
            </button>
          ))}
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <p className="text-teal-600 font-bold tracking-wider mb-1 uppercase text-[10px]">Interactive Advisor</p>
              <h3 className="text-2xl font-black text-slate-800">Life Insurance Planning</h3>
            </div>
            <div className="px-4 py-1.5 rounded-full border border-slate-200 text-slate-500 text-xs font-semibold">
              Confidential & Non-Obligation
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">Your Current Age Group</label>
              <select className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none bg-white text-slate-700 font-medium appearance-none">
                <option>25 – 35 years (Young Family)</option>
                <option>35 – 45 years (Peak Earning)</option>
                <option>45 – 55 years (Pre-Retirement)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">Financial Dependents</label>
              <select className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none bg-white text-slate-700 font-medium appearance-none">
                <option>Spouse + 1 Child</option>
                <option>Spouse + 2 Children</option>
                <option>Parents Only</option>
              </select>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 mb-8">
            <h4 className="font-bold text-slate-700 mb-2 uppercase text-xs tracking-wider">Advisory Consideration:</h4>
            <p className="text-slate-800 font-semibold mb-4 leading-relaxed text-sm">
              Structured for age bracket 25-35 with dependents (Spouse + 1 Child). Recommended focus: 10x-15x annual income protection + loan cover.
            </p>
            
            <h5 className="font-bold text-slate-700 mb-3 text-xs">Recommended Assessment Checklist:</h5>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-sm text-slate-600">
                <CheckCircle2 size={16} className="text-teal-500 shrink-0 mt-0.5" />
                <span>Income Replacement Ratio assessment</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-600">
                <CheckCircle2 size={16} className="text-teal-500 shrink-0 mt-0.5" />
                <span>Home / business loan debt clearance cover</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-600">
                <CheckCircle2 size={16} className="text-teal-500 shrink-0 mt-0.5" />
                <span>Optional critical illness & accidental disability rider evaluation</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-slate-100 pt-6">
            <p className="text-xs text-slate-400 flex-1">
              <span className="font-bold text-amber-500">!</span> Regulatory Note: Actual premium rates, sum assured eligibility, and policy options are based exclusively on verified insurer rate charts, medical underwriting, and age proofs.
            </p>
            <a href="https://wa.me/918830662663" target="_blank" rel="noopener noreferrer" className="bg-[#0f172a] hover:bg-[#1e293b] text-white px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 transition-colors shrink-0 w-full md:w-auto justify-center">
              Get Assistance for Life Insurance <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
