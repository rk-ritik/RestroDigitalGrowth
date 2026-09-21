import React, { useEffect } from 'react';
import { 
  StoreIcon, 
  MenuBookIcon, 
  CameraIcon, 
  ZapIcon, 
  TrendingUpIcon, 
  ArrowRightIcon, 
  SparklesIcon, 
  CheckCircleIcon,
  CloseIcon,
  WhatsAppIcon,
  ShieldCheckIcon
} from '../utils/icons';
import { AGENCY_CONFIG } from './Contact';

export default function About({ isOpen, onClose, onOpenContact }) {
  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const corePillars = [
    {
      title: "Clean Menu & QR Setup",
      desc: "Categorized dishes with veg/non-veg marks & fast phone ordering.",
      icon: MenuBookIcon,
      gradient: "from-amber-500 to-orange-500",
      badge: "Amber",
      bg: "bg-amber-500/10 border-amber-500/20 text-amber-300"
    },
    {
      title: "HD Food Photography",
      desc: "4K appetite food photos with steam, garnish & delivery formatting.",
      icon: CameraIcon,
      gradient: "from-rose-500 to-pink-600",
      badge: "Rose",
      bg: "bg-rose-500/10 border-rose-500/20 text-rose-300"
    },
    {
      title: "Zomato & Swiggy Sync",
      desc: "Accurate price mapping, portion sizes & zero order errors.",
      icon: ZapIcon,
      gradient: "from-orange-500 to-red-600",
      badge: "Orange",
      bg: "bg-orange-500/10 border-orange-500/20 text-orange-300"
    },
    {
      title: "Combos & Revenue Growth",
      desc: "High-margin modifier add-ons & meal combos that boost average bill.",
      icon: TrendingUpIcon,
      gradient: "from-emerald-500 to-teal-500",
      badge: "Emerald",
      bg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300"
    }
  ];

  const stats = [
    { value: "100+", label: "Menus Transformed" },
    { value: "2-4 Days", label: "Fast Go-Live" },
    { value: "0%", label: "Order Errors" },
    { value: "4.9 ★", label: "Client Rating" }
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl my-auto rounded-3xl bg-[#080d20] border border-orange-500/40 overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2 text-white bg-black/70 hover:bg-red-600 rounded-full transition-colors border border-white/20 cursor-pointer shadow-lg"
          aria-label="Close About modal"
        >
          <CloseIcon className="w-4 h-4" />
        </button>

        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[550px] h-32 bg-gradient-to-r from-orange-500/15 via-amber-500/15 to-emerald-500/15 blur-[90px] pointer-events-none rounded-full" />

        {/* 2-Column Non-Scrolling Layout with Generous Top & Bottom Padding */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 p-6 sm:p-8 md:p-9 relative">
          
          {/* Left Column (5 of 12 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
            <div>
              {/* Header Badge & Brand */}
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-500 p-[2px] shadow-lg shadow-orange-500/30 shrink-0">
                  <img
                    src="/logo.jpeg"
                    alt="Restro Digital Growth Logo"
                    className="w-full h-full object-cover rounded-[14px] bg-white"
                  />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 text-[10px] font-mono font-bold uppercase tracking-wider">
                    <SparklesIcon className="w-3 h-3 text-orange-400" />
                    <span>RESTAURANT TECH AGENCY</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-white font-heading mt-0.5">
                    Restro Digital Growth
                  </h2>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-4">
                Specialized digital support built exclusively for <span className="text-white font-semibold">restaurants, cafes, dhabas &amp; cloud kitchens</span>. We manage your digital operations so you can focus on cooking delicious food.
              </p>

              {/* Founder Promise Box */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-950/40 via-[#0c1329] to-amber-950/40 border border-orange-500/25 flex items-start gap-3 shadow-md mb-4">
                <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                  <StoreIcon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-[10px] font-mono uppercase tracking-wider text-orange-400 font-bold mb-0.5">
                    Our Core Promise
                  </h3>
                  <p className="text-[11px] text-slate-200 font-light leading-snug">
                    "You focus on hospitality and food. We take care of menus, appetizing photos, and platform updates."
                  </p>
                </div>
              </div>

              {/* 4 Stats Grid */}
              <div className="grid grid-cols-4 gap-2">
                {stats.map((st, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-white/[0.03] border border-white/8 text-center">
                    <div className="text-sm sm:text-base font-black text-amber-400 font-heading">
                      {st.value}
                    </div>
                    <div className="text-[9px] text-slate-400 truncate mt-0.5">
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Left Action Buttons */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={`https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hi Restro Digital Growth, I want to know more about your services for my restaurant.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors cursor-pointer shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  onClose();
                  if (onOpenContact) onOpenContact();
                }}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-xs font-bold transition-all cursor-pointer shadow-md"
              >
                <span>Partner With Us</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column (7 of 12 cols): 4 Colorful Pillars Grid */}
          <div className="lg:col-span-7 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 pt-5 lg:pt-0 lg:pl-8 space-y-4">
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
                  What We Do Under One Roof
                </span>
                <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                  <CheckCircleIcon className="w-3.5 h-3.5" />
                  <span>2-4 Day Setup</span>
                </span>
              </div>

              {/* 4 Pillars 2x2 Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {corePillars.map((pillar, idx) => {
                  const IconComponent = pillar.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-[#0c1226] border border-white/8 hover:border-orange-500/30 transition-all flex flex-col justify-between group shadow-md"
                    >
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${pillar.gradient} text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-white font-heading group-hover:text-amber-300 transition-colors line-clamp-1">
                          {pillar.title}
                        </h4>
                      </div>
                      <p className="text-[11px] text-slate-300 font-light leading-snug">
                        {pillar.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Highlights Strip */}
            <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/6 flex items-center justify-between text-[11px] text-slate-300">
              <div className="flex items-center gap-1.5">
                <ShieldCheckIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Price &amp; Menu Accuracy Guaranteed</span>
              </div>
              <span className="text-orange-400 font-mono text-[10px] hidden sm:inline">
                Zero Headaches
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
