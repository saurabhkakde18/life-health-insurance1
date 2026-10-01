import {
  ShieldCheck, 
  ArrowRight, 
  Users, 
  Umbrella,
  HeartPulse,
  Calculator,
  Stethoscope,
  FileText,
  MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContactCard } from '../components/ContactCard';
import { MilestonePlans } from '../components/MilestonePlans';



import { WhyChooseUs } from '../components/WhyChooseUs';
import { QuickPlanningTools } from '../components/QuickPlanningTools';
import { ConsultationForm } from '../components/ConsultationForm';

const quickActions = [
  { name: 'Life Insurance', icon: HeartPulse, path: '/life-insurance', color: 'bg-rose-50 text-rose-600' },
  { name: 'Health Insurance', icon: Stethoscope, path: '/health-insurance', color: 'bg-emerald-50 text-emerald-600' },
  { name: 'Term Insurance', icon: Umbrella, path: '/term-insurance', color: 'bg-blue-50 text-blue-600' },
  { name: 'Premium Calculator', icon: Calculator, path: '/calculator', color: 'bg-amber-50 text-amber-600' },
  { name: 'Customers', icon: Users, path: '/customers', color: 'bg-purple-50 text-purple-600' },
  { name: 'Documents', icon: FileText, path: '/documents', color: 'bg-indigo-50 text-indigo-600' },
  { name: 'Enquiries', icon: MessageSquare, path: 'https://wa.me/918830662663?text=Hello%20Nitin,%20I%20have%20an%20insurance%20enquiry.', color: 'bg-green-50 text-green-600', external: true },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-[#1a1b52] text-white p-8 lg:p-12">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-2xl flex-1">
            <h3 className="text-secondary font-bold tracking-wider mb-2 uppercase text-sm">Nitin Agrawal | Life & Health Insurance</h3>
            <h1 className="text-4xl lg:text-5xl font-black tracking-tight mb-4 leading-tight">
              Services for All Life & <br className="hidden md:block"/>Health Insurance Companies
            </h1>
            <div className="space-y-2 text-white/90 mb-8 font-medium">
              <p className="flex items-center gap-2"><ShieldCheck size={18} className="text-secondary" /> Child Education & Retirement Plans</p>
              <p className="flex items-center gap-2"><ShieldCheck size={18} className="text-secondary" /> No Waiting Period For Pre Existing Disease</p>
              <p className="flex items-center gap-2"><ShieldCheck size={18} className="text-secondary" /> Accident & Maternity</p>
              <p className="flex items-center gap-2"><ShieldCheck size={18} className="text-secondary" /> Unlimited Coverage & Many more</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/life-insurance" className="btn-secondary flex items-center gap-2 shadow-lg shadow-secondary/20">
                Explore Insurance <ArrowRight size={18} />
              </Link>
              <Link to="/calculator" className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md font-medium transition-colors backdrop-blur-sm border border-white/20">
                Calculate Premium
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex flex-col gap-4">
            <div className="bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 text-text w-64">
              <div className="bg-blue-50 p-2 rounded-lg"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/83/Life_Insurance_Corporation_of_India_logo.svg/1200px-Life_Insurance_Corporation_of_India_logo.svg.png" alt="LIC" className="h-8 object-contain" /></div>
              <div>
                <p className="font-bold text-sm">LIC</p>
                <p className="text-xs text-muted">Life Insurance</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 text-text w-64">
              <div className="bg-yellow-50 p-2 rounded-lg flex items-center justify-center"><span className="text-yellow-600 font-bold text-lg leading-none">care</span></div>
              <div>
                <p className="font-bold text-sm">Care Health</p>
                <p className="text-xs text-muted">Health Insurance</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-bold text-text mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map((action, index) => {
            const innerContent = (
              <>
                <div className={`w-14 h-14 rounded-full flex items-center justify-center ${action.color} group-hover:scale-110 transition-transform`}>
                  <action.icon size={28} />
                </div>
                <span className="font-medium text-text text-sm text-center">{action.name}</span>
              </>
            );
            
            const cardClass = "card p-6 flex flex-col items-center justify-center gap-3 hover:border-secondary transition-colors group cursor-pointer";

            if (action.external) {
              return (
                <a key={index} href={action.path} target="_blank" rel="noopener noreferrer" className={cardClass}>
                  {innerContent}
                </a>
              );
            }
            
            return (
              <Link key={index} to={action.path} className={cardClass}>
                {innerContent}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="pt-4 border-t border-border mt-8">
        <MilestonePlans />
      </div>

      <div className="pt-4 border-t border-border mt-8">
        <QuickPlanningTools />
      </div>

      <div className="pt-4 border-t border-border mt-8">
        <WhyChooseUs />
      </div>

      <div className="pt-4 border-t border-border mt-8">
        <ConsultationForm />
      </div>

      <div className="pt-8 border-t border-border mt-8">
        <ContactCard />
      </div>

    </div>
  );
}
