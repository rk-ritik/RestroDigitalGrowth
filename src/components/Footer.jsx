import React from 'react';
import { SparklesIcon } from '../utils/icons';

export default function Footer({ onOpenAbout, onOpenContact }) {
  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Our Work", href: "#work" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#", isAbout: true },
    { name: "Contact Us", href: "#", isContact: true }
  ];

  const serviceLinks = [
    { name: "FSSAI Assistance", href: "#services" },
    { name: "Restaurant Onboarding", href: "#services" },
    { name: "Food Images", href: "#services" },
    { name: "Menu Management", href: "#services" },
    { name: "Zomato Updates", href: "#platforms" },
    { name: "Swiggy Updates", href: "#platforms" }
  ];

  const handleLinkClick = (item, e) => {
    if (item.isAbout) {
      e?.preventDefault();
      if (onOpenAbout) onOpenAbout();
    } else if (item.isContact) {
      e?.preventDefault();
      if (onOpenContact) onOpenContact();
    }
  };

  return (
    <footer className="relative bg-[#04060c] border-t border-white/[0.04] pt-16 pb-12 overflow-hidden text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/8">

          {/* Col 1: Brand Logo & Tagline */}
          <div className="lg:col-span-5 space-y-3.5">
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 rounded-full p-[2px] bg-gradient-to-tr from-orange-600 to-amber-500 shadow-lg shadow-orange-500/25 group-hover:shadow-orange-500/40 transition-all duration-300 flex-shrink-0">
                <img
                  src="/logo.jpeg"
                  alt="Restro Digital Growth Logo"
                  className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300 bg-white"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-lg tracking-tight text-white flex items-center gap-1">
                  RESTRO<span className="text-orange-500 font-black">.</span>
                  <span className="text-slate-300 font-semibold text-base">DIGITAL</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-orange-400 font-mono -mt-0.5">
                  GROWTH
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-slate-300 font-medium">
              Your Restaurant. Digitally Ready for Growth.
            </p>

            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm">
              We handle the digital side of your restaurant — from documentation and onboarding to menu design, food photography, and marketplace updates.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  {item.isAbout || item.isContact ? (
                    <button
                      onClick={(e) => handleLinkClick(item, e)}
                      className="hover:text-orange-400 transition-colors cursor-pointer text-left"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className="hover:text-orange-400 transition-colors"
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-orange-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© 2026 Restro Digital Growth. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Independent restaurant digital support agency. Platform trademarks belong to respective owners.
          </p>
        </div>

      </div>
    </footer>
  );
}
