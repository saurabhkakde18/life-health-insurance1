import { Shield } from 'lucide-react';

export function TermInsurance() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-text">Term Insurance</h1>
      <div className="card p-12 flex flex-col items-center justify-center text-center">
        <Shield size={48} className="text-muted mb-4" />
        <h2 className="text-xl font-semibold mb-2">Term Life Plans</h2>
        <p className="text-muted max-w-md">Pure protection plans offering high coverage at affordable premiums. Ensure your family's financial security in your absence.</p>
      </div>
    </div>
  );
}
