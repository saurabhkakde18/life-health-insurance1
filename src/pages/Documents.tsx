import { FileText, Download, UploadCloud, Eye } from 'lucide-react';

const documents: any[] = [];

export function Documents() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text">Document Center</h1>
          <p className="text-muted mt-1">Securely manage policies, KYC and claim documents.</p>
        </div>
        <button className="btn-primary flex items-center justify-center gap-2">
          <UploadCloud size={18} /> Upload Document
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {documents.map((doc) => (
          <div key={doc.id} className="card p-4 hover:border-secondary transition-colors group">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded bg-primary/5 flex items-center justify-center text-primary">
                <FileText size={20} />
              </div>
              <span className="text-xs font-medium bg-background px-2 py-1 rounded text-muted border border-border">
                {doc.type}
              </span>
            </div>
            
            <h3 className="font-semibold text-text text-sm mb-1 truncate" title={doc.name}>
              {doc.name}
            </h3>
            <p className="text-xs text-muted mb-4 flex justify-between">
              <span>{doc.size}</span>
              <span>{doc.date}</span>
            </p>
            
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="flex-1 btn-outline py-1.5 text-xs flex justify-center items-center gap-1">
                <Eye size={14} /> View
              </button>
              <button className="flex-1 bg-primary text-white hover:bg-primary/90 rounded-md py-1.5 text-xs flex justify-center items-center gap-1 transition-colors">
                <Download size={14} /> Save
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
