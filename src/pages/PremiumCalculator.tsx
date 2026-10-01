import { useState } from 'react';
import { Calculator, Download, Share2, IndianRupee } from 'lucide-react';

export function PremiumCalculator() {
  const [calculated, setCalculated] = useState(false);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setCalculated(true);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-text">Premium Calculator</h1>
        <p className="text-muted mt-1">Get an instant estimate for your insurance premium.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="card p-6">
            <form onSubmit={handleCalculate} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-text">Customer Name</label>
                  <input type="text" className="input" placeholder="e.g. Rahul Sharma" required />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-text">Age</label>
                  <input type="number" className="input" placeholder="e.g. 35" required min="18" max="75" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-text">Gender</label>
                  <select className="input" required>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-text">City</label>
                  <input type="text" className="input" placeholder="e.g. Mumbai" />
                </div>
                
                <div className="col-span-1 md:col-span-2 pt-4 border-t border-border">
                  <h3 className="text-sm font-bold text-text mb-4 uppercase tracking-wider">Policy Details</h3>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-text">Insurance Type</label>
                  <select className="input" required>
                    <option value="">Select Type</option>
                    <option value="term">Term Life Insurance</option>
                    <option value="whole">Whole Life Insurance</option>
                    <option value="health">Health Insurance</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-text">Coverage Amount (₹)</label>
                  <select className="input" required>
                    <option value="5000000">₹50 Lakhs</option>
                    <option value="10000000">₹1 Crore</option>
                    <option value="20000000">₹2 Crores</option>
                    <option value="50000000">₹5 Crores</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-text">Policy Term</label>
                  <select className="input" required>
                    <option value="10">10 Years</option>
                    <option value="20">20 Years</option>
                    <option value="30">30 Years</option>
                    <option value="upto-99">Upto Age 99</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-text">Premium Frequency</label>
                  <select className="input" required>
                    <option value="yearly">Yearly</option>
                    <option value="half-yearly">Half-Yearly</option>
                    <option value="quarterly">Quarterly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button type="submit" className="btn-secondary flex-1 flex items-center justify-center gap-2">
                  <Calculator size={18} /> Calculate
                </button>
                <button type="reset" className="btn-outline" onClick={() => setCalculated(false)}>
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>

        <div>
          {calculated ? (
            <div className="card p-6 bg-gradient-to-br from-primary to-primary/90 text-white shadow-float sticky top-6">
              <h2 className="text-xl font-bold mb-6">Quote Summary</h2>
              
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-white/70 mb-1">Estimated Annual Premium</p>
                  <div className="flex items-end gap-1">
                    <span className="text-3xl font-bold">₹14,580</span>
                    <span className="text-sm text-white/70 mb-1">/year</span>
                  </div>
                  <p className="text-xs text-secondary mt-1">Inclusive of 18% GST</p>
                </div>

                <div className="h-px w-full bg-white/20"></div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/70">Coverage</span>
                    <span className="font-semibold">₹1 Crore</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Policy Term</span>
                    <span className="font-semibold">30 Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Monthly Option</span>
                    <span className="font-semibold">₹1,250/mo</span>
                  </div>
                </div>

                <div className="pt-6 space-y-3">
                  <button className="w-full bg-white text-primary hover:bg-white/90 px-4 py-2 rounded-md font-medium transition-colors flex items-center justify-center gap-2">
                    <Download size={18} /> Download PDF
                  </button>
                  <button className="w-full border border-white/30 text-white hover:bg-white/10 px-4 py-2 rounded-md font-medium transition-colors flex items-center justify-center gap-2">
                    <Share2 size={18} /> Share Quote
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="card p-6 h-full flex flex-col items-center justify-center text-center text-muted min-h-[400px]">
              <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mb-4">
                <IndianRupee size={32} className="text-border" />
              </div>
              <p>Fill in the details and click calculate to see the estimated premium here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
