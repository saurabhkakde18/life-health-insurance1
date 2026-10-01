import { Link, NavLink } from 'react-router-dom';
import { 
  HeartPulse, 
  Stethoscope, 
  Umbrella, 
  Calculator, 
  Users, 
  FileText, 
  MessageSquare,
  LayoutDashboard
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const navItems = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Life Insurance', path: '/life-insurance', icon: HeartPulse },
  { name: 'Health Insurance', path: '/health-insurance', icon: Stethoscope },
  { name: 'Term Insurance', path: '/term-insurance', icon: Umbrella },
  { name: 'Premium Calculator', path: '/calculator', icon: Calculator },
  { name: 'Customers', path: '/customers', icon: Users },
  { name: 'Documents', path: '/documents', icon: FileText },
  { name: 'Enquiries', path: 'https://wa.me/918830662663?text=Hello%20Nitin,%20I%20have%20an%20insurance%20enquiry.', icon: MessageSquare, external: true },
];

export function Header() {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2 font-black text-2xl tracking-tighter shrink-0">
              <span className="text-secondary">LIFE</span>
              <span className="text-primary">EXPRESS</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1">
              {navItems.map((item) => {
                const linkClasses = "flex items-center gap-2 px-3 py-2 rounded-md transition-colors text-sm font-medium text-text/70 hover:bg-background hover:text-primary";
                
                if (item.external) {
                  return (
                    <a
                      key={item.name}
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClasses}
                    >
                      <item.icon size={16} />
                      {item.name}
                    </a>
                  );
                }

                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) => twMerge(
                      clsx(
                        "flex items-center gap-2 px-3 py-2 rounded-md transition-colors text-sm font-medium",
                        isActive 
                          ? "bg-primary/10 text-primary" 
                          : "text-text/70 hover:bg-background hover:text-primary"
                      )
                    )}
                  >
                    <item.icon size={16} />
                    {item.name}
                  </NavLink>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-text leading-tight">Nitin Agrawal</p>
                <p className="text-[10px] text-muted font-medium">Life & Health Consultant</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex shrink-0 items-center justify-center font-bold text-primary">
                NA
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation (Horizontal Scrollable) */}
        <div className="xl:hidden flex items-center gap-1 overflow-x-auto py-2 -mx-4 px-4 scrollbar-hide border-t border-border">
          {navItems.map((item) => {
            const linkClasses = "flex items-center gap-2 px-3 py-1.5 rounded-md transition-colors text-sm font-medium text-text/70 hover:bg-background hover:text-primary whitespace-nowrap";
            
            if (item.external) {
              return (
                <a
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClasses}
                >
                  <item.icon size={14} />
                  {item.name}
                </a>
              );
            }

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => twMerge(
                  clsx(
                    "flex items-center gap-2 px-3 py-1.5 rounded-md transition-colors text-sm font-medium whitespace-nowrap",
                    isActive 
                      ? "bg-primary/10 text-primary" 
                      : "text-text/70 hover:bg-background hover:text-primary"
                  )
                )}
              >
                <item.icon size={14} />
                {item.name}
              </NavLink>
            );
          })}
        </div>
      </div>
    </header>
  );
}
