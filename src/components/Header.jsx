import React, { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon, ArrowRightIcon, SparklesIcon } from '../utils/icons';

export default function Header({ onOpenAbout, onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Simple active section detection
      const sections = ['hero', 'services', 'journey', 'menu', 'platforms', 'work', 'before-after', 'process', 'why-us'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (link, e) => {
    if (link.isAbout) {
      e?.preventDefault();
      if (onOpenAbout) onOpenAbout();
      setMobileMenuOpen(false);
    }
  };

  // Nav links WITHOUT duplicate 'Contact' button in the center
  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Our Work', href: '#work', id: 'work' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'About', href: '#', id: 'about', isAbout: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
          ? 'py-3.5 bg-[#060914]/90 backdrop-blur-2xl shadow-xl shadow-black/70'
          : 'py-5 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full p-[2px] bg-gradient-to-tr from-orange-600 to-amber-500 shadow-lg shadow-orange-500/25 group-hover:shadow-orange-500/40 transition-all duration-300 flex-shrink-0">
            <img
              src="/logo.jpeg"
              alt="Restro Digital Growth Logo"
              className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300 bg-white"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-base sm:text-lg tracking-tight text-white flex items-center gap-1">
              Restro<span className="text-orange-500 font-black">.</span>
              <span className="text-slate-300 font-semibold text-sm sm:text-base">Digital</span>
            </span>
            <span className="text-[9px] uppercase tracking-widest text-orange-400/90 font-mono -mt-1">
              Growth
            </span>
          </div>
        </a>

        {/* Desktop Navigation (Home, Services, Our Work, Process, About) */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0f1526]/60 border border-white/8 px-4 py-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            
            if (link.isAbout) {
              return (
                <button
                  key={link.name}
                  onClick={(e) => handleNavClick(link, e)}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 text-slate-300 hover:text-white hover:bg-orange-500/15 cursor-pointer"
                >
                  {link.name}
                </button>
              );
            }

            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${isActive
                    ? 'text-white bg-orange-500/20 text-orange-300 border border-orange-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Dedicated "Contact Us" Right Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => {
              if (onOpenContact) onOpenContact();
            }}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-md shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>Contact Us</span>
            <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle & Quick Contact Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => {
              if (onOpenContact) onOpenContact();
            }}
            className="text-xs px-3.5 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold shadow-md cursor-pointer"
          >
            Contact Us
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white bg-white/5 rounded-lg border border-white/10 cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <CloseIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-[#070a16]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 transition-all shadow-2xl animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              if (link.isAbout) {
                return (
                  <button
                    key={link.name}
                    onClick={(e) => handleNavClick(link, e)}
                    className="text-left px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-white hover:bg-orange-500/10 hover:border-l-4 hover:border-orange-500 transition-all cursor-pointer"
                  >
                    {link.name}
                  </button>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-white hover:bg-orange-500/10 hover:border-l-4 hover:border-orange-500 transition-all"
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenContact) onOpenContact();
                }}
                className="w-full text-center py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg shadow-orange-500/30 cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
