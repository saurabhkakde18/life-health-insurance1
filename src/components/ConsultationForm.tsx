import { User, Phone, Mail, MapPin, Send, ShieldCheck } from 'lucide-react';

export function ConsultationForm() {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto bg-[#f8fafc] rounded-3xl p-6 md:p-10 border border-slate-100">
        
        <div className="mb-8">
          <label className="block text-xs font-bold text-slate-700 mb-3 uppercase tracking-wider">Consultation Mode Preference</label>
          <div className="flex flex-col sm:flex-row gap-2 bg-white p-1.5 rounded-2xl border border-slate-200">
            <button className="flex-1 py-3 px-4 rounded-xl bg-[#0f172a] text-white font-bold text-sm shadow-sm">
              In-Office Visit (Jalna)
            </button>
            <button className="flex-1 py-3 px-4 rounded-xl bg-transparent hover:bg-slate-50 text-slate-600 font-medium text-sm transition-colors">
              Online / Phone
            </button>
            <button className="flex-1 py-3 px-4 rounded-xl bg-transparent hover:bg-slate-50 text-slate-600 font-medium text-sm transition-colors">
              Home Visit
            </button>
          </div>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">Full Name <span className="text-red-500">*</span></label>
              <div className="relative">
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="text" placeholder="e.g. Ramesh Patil" className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none bg-white text-slate-700 placeholder-slate-400" />
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">Mobile Number <span className="text-red-500">*</span></label>
              <div className="relative">
                <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="tel" placeholder="10-digit mobile number" className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none bg-white text-slate-700 placeholder-slate-400" />
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">Email Address <span className="text-red-500">*</span></label>
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="email" placeholder="name@example.com" className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none bg-white text-slate-700 placeholder-slate-400" />
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">City / Locality <span className="text-red-500">*</span></label>
              <div className="relative">
                <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="text" defaultValue="Jalna" className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none bg-white text-slate-700 placeholder-slate-400" />
              </div>
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">Insurance Requirement <span className="text-red-500">*</span></label>
              <select className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none bg-white text-slate-700 font-medium appearance-none">
                <option>Life Insurance</option>
                <option>Health Insurance</option>
                <option>Retirement Planning</option>
                <option>Child Education</option>
              </select>
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">Message / Specific Questions (Optional)</label>
              <textarea 
                rows={4} 
                defaultValue="Interested in milestone planning for: Health Protection"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none bg-white text-slate-700 placeholder-slate-400 resize-none"
              ></textarea>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <input type="checkbox" id="agree" className="w-5 h-5 rounded border-slate-300 text-teal-600 focus:ring-teal-500" />
            <label htmlFor="agree" className="text-sm text-slate-600 cursor-pointer">I agree to be contacted regarding my enquiry.</label>
          </div>

          <button type="button" className="w-full py-4 rounded-xl bg-[#0f172a] hover:bg-[#1e293b] text-white font-bold text-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-slate-900/10">
            Book Consultation & Submit <Send size={20} />
          </button>

          <p className="text-center text-sm text-slate-500 flex items-center justify-center gap-2 mt-6">
            <ShieldCheck size={16} className="text-teal-500" />
            Confidential consultation with Nitin Agrawal · Jalna Office
          </p>
        </form>
      </div>
    </div>
  );
}
