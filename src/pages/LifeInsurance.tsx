import { Shield, Umbrella, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    title: 'Whole Life Insurance',
    description: 'Lifetime coverage with guaranteed returns and bonuses. Secure your family\'s future indefinitely.',
    coverage: 'Up to ₹5 Crores',
    term: '100 Years (Whole Life)',
    benefits: ['Guaranteed Additions', 'Tax Benefits', 'Loan Facility'],
    icon: Shield,
  },
  {
    title: 'Endowment Plans',
    description: 'A perfect blend of insurance and investment. Build a corpus for your future goals.',
    coverage: 'Flexible',
    term: '10 - 30 Years',
    benefits: ['Maturity Benefit', 'Life Cover', 'Bonus Additions'],
    icon: Umbrella,
  },
  {
    title: 'Money Back Plans',
    description: 'Regular payouts at specific intervals to meet your recurring financial needs.',
    coverage: 'Flexible',
    term: '15 - 25 Years',
    benefits: ['Survival Benefits', 'Life Cover', 'Tax Savings'],
    icon: Shield,
  }
];

export function LifeInsurance() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text">Life Insurance Plans</h1>
          <p className="text-muted mt-1">Secure your family's future with our comprehensive life insurance solutions.</p>
        </div>
        <Link to="/calculator" className="btn-primary w-fit">
          Calculate Premium
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div key={index} className="card p-6 flex flex-col h-full">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
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
                <span className="text-muted">Term</span>
                <span className="font-semibold text-text">{plan.term}</span>
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
              <Link to="/calculator" className="flex-1 btn-secondary text-center">Get Quote</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
