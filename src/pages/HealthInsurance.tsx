import { BriefcaseMedical, Users, Activity, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    title: 'Individual Health Plan',
    description: 'Comprehensive health coverage for individuals with cashless hospitalization.',
    coverage: '₹5 Lakhs - ₹1 Crore',
    network: '10,000+ Hospitals',
    benefits: ['Cashless Treatment', 'No Room Rent Cap', 'Annual Health Checkup'],
    icon: Activity,
  },
  {
    title: 'Family Floater Plan',
    description: 'A single plan to cover your entire family under one shared sum insured.',
    coverage: '₹10 Lakhs - ₹2 Crores',
    network: '10,000+ Hospitals',
    benefits: ['Covers up to 6 members', 'Maternity Cover', 'Restoration Benefit'],
    icon: Users,
  },
  {
    title: 'Senior Citizen Health',
    description: 'Specialized health insurance designed for the unique needs of senior citizens.',
    coverage: 'Up to ₹25 Lakhs',
    network: '10,000+ Hospitals',
    benefits: ['Pre-existing Disease Cover', 'OPD Consultations', 'Day Care Procedures'],
    icon: BriefcaseMedical,
  }
];

export function HealthInsurance() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text">Health Insurance Plans</h1>
          <p className="text-muted mt-1">Protect your savings from medical emergencies with our health plans.</p>
        </div>
        <Link to="/calculator" className="btn-primary w-fit">
          Get Health Quote
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div key={index} className="card p-6 flex flex-col h-full border-t-4 border-t-secondary">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-4">
              <plan.icon size={24} />
            </div>
            <h2 className="text-xl font-bold text-text mb-2">{plan.title}</h2>
            <p className="text-sm text-muted mb-6 flex-1">{plan.description}</p>
            
            <div className="space-y-3 mb-6 bg-background rounded-lg p-4 border border-border">
              <div className="flex justify-between text-sm">
                <span className="text-muted">Coverage</span>
                <span className="font-semibold text-text">{plan.coverage}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted">Network</span>
                <span className="font-semibold text-text">{plan.network}</span>
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">Key Benefits</p>
              {plan.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-text">
                  <CheckCircle2 size={16} className="text-secondary" />
                  {benefit}
                </div>
              ))}
            </div>

            <div className="mt-auto flex gap-3">
              <button className="flex-1 btn-outline text-center">View Details</button>
              <Link to="/calculator" className="flex-1 btn-secondary text-center">Calculate</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
