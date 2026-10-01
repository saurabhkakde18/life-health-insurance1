import { Phone, Mail, Building2, Clock, PhoneCall, MessageCircle, Navigation } from 'lucide-react';

export function ContactCard() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-border max-w-2xl mx-auto w-full">
      <div className="mb-8">
        <h3 className="text-teal-700 font-bold tracking-wider mb-2 uppercase text-xs">Insurance Advisory Office</h3>
        <h2 className="text-3xl font-black text-secondary mb-1">Nitin Agrawal</h2>
        <p className="text-sm text-muted font-medium">Life & Health Insurance Advisor · LifeExpress</p>
      </div>

      <div className="space-y-6 mb-8 border-t border-border pt-8">
        {/* Mobile Number */}
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
            <Phone size={20} />
          </div>
          <div>
            <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">Mobile Number</p>
            <p className="font-bold text-text text-lg leading-none mb-1">+91 88306 62663</p>
            <p className="text-xs text-muted">Available for calls & WhatsApp</p>
          </div>
        </div>

        {/* Email Address */}
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
            <Mail size={20} />
          </div>
          <div>
            <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">Email Address</p>
            <p className="font-bold text-text text-lg leading-none mb-1">nitinagrawal6060@gmail.com</p>
          </div>
        </div>

        {/* Corporate Office */}
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
            <Building2 size={20} />
          </div>
          <div>
            <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">Corporate Office</p>
            <p className="font-bold text-text text-[15px] leading-tight mb-1">
              In front of Sadar Bazar Police Station,<br/>
              Balaji Galli, Jalna (MS) – 431203
            </p>
            <p className="text-xs text-muted">Prominent landmark: Directly opposite Sadar Bazar Police Station</p>
          </div>
        </div>

        {/* Working Hours */}
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
            <Clock size={20} />
          </div>
          <div>
            <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">Working Hours</p>
            <p className="font-bold text-text text-[15px] leading-tight">
              Monday – Saturday: 9:30 AM – 8:00 PM (Sunday by appointment)
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-border pt-8">
        <a href="tel:+918830662663" className="flex items-center justify-center gap-2 bg-[#0f172a] hover:bg-[#1e293b] text-white py-3 px-4 rounded-xl font-medium transition-colors">
          <PhoneCall size={18} className="text-teal-400" /> Call Now
        </a>
        <a href="https://wa.me/918830662663" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#059669] hover:bg-[#047857] text-white py-3 px-4 rounded-xl font-medium transition-colors">
          <MessageCircle size={18} /> WhatsApp
        </a>
        <a href="mailto:nitinagrawal6060@gmail.com" className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 py-3 px-4 rounded-xl font-medium transition-colors">
          <Mail size={18} /> Email Us
        </a>
        <a href="https://maps.google.com/?q=Sadar+Bazar+Police+Station+Jalna+Maharashtra+431203" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 py-3 px-4 rounded-xl font-medium transition-colors">
          <Navigation size={18} className="text-blue-500" /> Get Directions
        </a>
      </div>
    </div>
  );
}
