import { Search, Plus, MoreVertical, Phone, Mail } from 'lucide-react';

const customers: any[] = [];

export function Customers() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text">Customers</h1>
          <p className="text-muted mt-1">Manage your customer portfolio and policies.</p>
        </div>
        <button className="btn-primary flex items-center justify-center gap-2">
          <Plus size={18} /> Add Customer
        </button>
      </div>

      <div className="card">
        <div className="p-4 border-b border-border flex gap-4 items-center bg-background rounded-t-xl">
          <div className="relative flex-1 max-w-md">
            <Search size={18} className="absolute left-3 top-2.5 text-muted" />
            <input 
              type="text" 
              placeholder="Search customers by name, ID or mobile..." 
              className="w-full pl-10 pr-4 py-2 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent bg-white"
            />
          </div>
          <select className="input max-w-xs bg-white">
            <option>All Status</option>
            <option>Active</option>
            <option>Pending Renewal</option>
            <option>Inactive</option>
          </select>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted uppercase bg-background/50 border-b border-border">
              <tr>
                <th className="px-6 py-4 font-semibold">Customer Name</th>
                <th className="px-6 py-4 font-semibold">Contact Info</th>
                <th className="px-6 py-4 font-semibold">Insurance Type</th>
                <th className="px-6 py-4 font-semibold">Policies</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr key={index} className="border-b border-border hover:bg-background/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-text">{customer.name}</div>
                    <div className="text-xs text-muted">{customer.id}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-text mb-1"><Phone size={12} className="text-muted"/> {customer.mobile}</div>
                    <div className="flex items-center gap-1 text-muted text-xs"><Mail size={12} /> {customer.email}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">{customer.type}</span>
                  </td>
                  <td className="px-6 py-4 font-medium">{customer.policies}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      customer.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-muted hover:text-text p-1"><MoreVertical size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-border flex items-center justify-between text-sm text-muted">
          <span>Showing 1 to 5 of 124 customers</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-border rounded hover:bg-background disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 border border-border rounded hover:bg-background">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
