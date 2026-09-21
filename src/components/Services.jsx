import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import {
  ShieldCheckIcon,
  StoreIcon,
  CameraIcon,
  MenuBookIcon,
  RefreshCwIcon,
  TagIcon,
  SlidersIcon,
  ArrowRightIcon,
  CheckIcon,
  SparklesIcon
} from '../utils/icons';

// Vibrant theme definition for each service card
const serviceThemes = {
  '01': {
    category: 'onboarding',
    glowColor: 'rgba(16, 185, 129, 0.22)',
    topLine: 'from-emerald-400 via-teal-300 to-emerald-500',
    borderHover: 'hover:border-emerald-500/60 hover:shadow-emerald-500/20',
    cardBorderActive: 'border-emerald-500/60 shadow-emerald-500/25',
    iconBoxBg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 shadow-emerald-500/20',
    iconBoxHover: 'group-hover:bg-emerald-500 group-hover:text-slate-950 group-hover:border-emerald-400 group-hover:shadow-lg group-hover:shadow-emerald-500/40',
    badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    badgeDot: 'bg-emerald-400',
    numWatermark: 'text-emerald-400/20 group-hover:text-emerald-400/40',
    checkCircle: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
    highlightBadge: 'border-emerald-500/25 bg-emerald-950/40 text-emerald-300',
    btnText: 'text-emerald-400 group-hover:text-emerald-300',
    btnArrowBg: 'bg-emerald-500/15 text-emerald-300 group-hover:bg-emerald-500 group-hover:text-slate-950',
    modalBorder: 'border-emerald-500/50 shadow-emerald-500/25',
    modalBtn: 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold'
  },
  '02': {
    category: 'onboarding',
    glowColor: 'rgba(245, 158, 11, 0.22)',
    topLine: 'from-amber-400 via-yellow-300 to-orange-500',
    borderHover: 'hover:border-amber-500/60 hover:shadow-amber-500/20',
    cardBorderActive: 'border-amber-500/60 shadow-amber-500/25',
    iconBoxBg: 'bg-amber-500/10 border-amber-500/30 text-amber-400 shadow-amber-500/20',
    iconBoxHover: 'group-hover:bg-amber-500 group-hover:text-slate-950 group-hover:border-amber-400 group-hover:shadow-lg group-hover:shadow-amber-500/40',
    badge: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    badgeDot: 'bg-amber-400',
    numWatermark: 'text-amber-400/20 group-hover:text-amber-400/40',
    checkCircle: 'bg-amber-500/20 text-amber-400 border border-amber-500/30',
    highlightBadge: 'border-amber-500/25 bg-amber-950/40 text-amber-300',
    btnText: 'text-amber-400 group-hover:text-amber-300',
    btnArrowBg: 'bg-amber-500/15 text-amber-300 group-hover:bg-amber-500 group-hover:text-slate-950',
    modalBorder: 'border-amber-500/50 shadow-amber-500/25',
    modalBtn: 'bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold'
  },
  '03': {
    category: 'menu',
    glowColor: 'rgba(244, 63, 94, 0.22)',
    topLine: 'from-rose-400 via-pink-300 to-rose-500',
    borderHover: 'hover:border-rose-500/60 hover:shadow-rose-500/20',
    cardBorderActive: 'border-rose-500/60 shadow-rose-500/25',
    iconBoxBg: 'bg-rose-500/10 border-rose-500/30 text-rose-400 shadow-rose-500/20',
    iconBoxHover: 'group-hover:bg-rose-500 group-hover:text-white group-hover:border-rose-400 group-hover:shadow-lg group-hover:shadow-rose-500/40',
    badge: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
    badgeDot: 'bg-rose-400',
    numWatermark: 'text-rose-400/20 group-hover:text-rose-400/40',
    checkCircle: 'bg-rose-500/20 text-rose-400 border border-rose-500/30',
    highlightBadge: 'border-rose-500/25 bg-rose-950/40 text-rose-300',
    btnText: 'text-rose-400 group-hover:text-rose-300',
    btnArrowBg: 'bg-rose-500/15 text-rose-300 group-hover:bg-rose-500 group-hover:text-white',
    modalBorder: 'border-rose-500/50 shadow-rose-500/25',
    modalBtn: 'bg-rose-500 hover:bg-rose-400 text-white font-bold'
  },
  '04': {
    category: 'menu',
    glowColor: 'rgba(6, 182, 212, 0.22)',
    topLine: 'from-cyan-400 via-sky-300 to-blue-500',
    borderHover: 'hover:border-cyan-500/60 hover:shadow-cyan-500/20',
    cardBorderActive: 'border-cyan-500/60 shadow-cyan-500/25',
    iconBoxBg: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400 shadow-cyan-500/20',
    iconBoxHover: 'group-hover:bg-cyan-400 group-hover:text-slate-950 group-hover:border-cyan-300 group-hover:shadow-lg group-hover:shadow-cyan-500/40',
    badge: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
    badgeDot: 'bg-cyan-400',
    numWatermark: 'text-cyan-400/20 group-hover:text-cyan-400/40',
    checkCircle: 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30',
    highlightBadge: 'border-cyan-500/25 bg-cyan-950/40 text-cyan-300',
    btnText: 'text-cyan-400 group-hover:text-cyan-300',
    btnArrowBg: 'bg-cyan-500/15 text-cyan-300 group-hover:bg-cyan-400 group-hover:text-slate-950',
    modalBorder: 'border-cyan-500/50 shadow-cyan-500/25',
    modalBtn: 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold'
  },
  '05': {
    category: 'updates',
    glowColor: 'rgba(239, 68, 68, 0.22)',
    topLine: 'from-red-400 via-rose-400 to-red-600',
    borderHover: 'hover:border-red-500/60 hover:shadow-red-500/20',
    cardBorderActive: 'border-red-500/60 shadow-red-500/25',
    iconBoxBg: 'bg-red-500/10 border-red-500/30 text-red-400 shadow-red-500/20',
    iconBoxHover: 'group-hover:bg-red-500 group-hover:text-white group-hover:border-red-400 group-hover:shadow-lg group-hover:shadow-red-500/40',
    badge: 'bg-red-500/15 text-red-300 border-red-500/30',
    badgeDot: 'bg-red-400',
    numWatermark: 'text-red-400/20 group-hover:text-red-400/40',
    checkCircle: 'bg-red-500/20 text-red-400 border border-red-500/30',
    highlightBadge: 'border-red-500/25 bg-red-950/40 text-red-300',
    btnText: 'text-red-400 group-hover:text-red-300',
    btnArrowBg: 'bg-red-500/15 text-red-300 group-hover:bg-red-500 group-hover:text-white',
    modalBorder: 'border-red-500/50 shadow-red-500/25',
    modalBtn: 'bg-red-500 hover:bg-red-400 text-white font-bold'
  },
  '06': {
    category: 'updates',
    glowColor: 'rgba(249, 115, 22, 0.22)',
    topLine: 'from-orange-400 via-amber-400 to-orange-600',
    borderHover: 'hover:border-orange-500/60 hover:shadow-orange-500/20',
    cardBorderActive: 'border-orange-500/60 shadow-orange-500/25',
    iconBoxBg: 'bg-orange-500/10 border-orange-500/30 text-orange-400 shadow-orange-500/20',
    iconBoxHover: 'group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-400 group-hover:shadow-lg group-hover:shadow-orange-500/40',
    badge: 'bg-orange-500/15 text-orange-300 border-orange-500/30',
    badgeDot: 'bg-orange-400',
    numWatermark: 'text-orange-400/20 group-hover:text-orange-400/40',
    checkCircle: 'bg-orange-500/20 text-orange-400 border border-orange-500/30',
    highlightBadge: 'border-orange-500/25 bg-orange-950/40 text-orange-300',
    btnText: 'text-orange-400 group-hover:text-orange-300',
    btnArrowBg: 'bg-orange-500/15 text-orange-300 group-hover:bg-orange-500 group-hover:text-white',
    modalBorder: 'border-orange-500/50 shadow-orange-500/25',
    modalBtn: 'bg-orange-500 hover:bg-orange-400 text-white font-bold'
  },
  '07': {
    category: 'growth',
    glowColor: 'rgba(168, 85, 247, 0.22)',
    topLine: 'from-purple-400 via-fuchsia-400 to-violet-500',
    borderHover: 'hover:border-purple-500/60 hover:shadow-purple-500/20',
    cardBorderActive: 'border-purple-500/60 shadow-purple-500/25',
    iconBoxBg: 'bg-purple-500/10 border-purple-500/30 text-purple-400 shadow-purple-500/20',
    iconBoxHover: 'group-hover:bg-purple-500 group-hover:text-white group-hover:border-purple-400 group-hover:shadow-lg group-hover:shadow-purple-500/40',
    badge: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
    badgeDot: 'bg-purple-400',
    numWatermark: 'text-purple-400/20 group-hover:text-purple-400/40',
    checkCircle: 'bg-purple-500/20 text-purple-400 border border-purple-500/30',
    highlightBadge: 'border-purple-500/25 bg-purple-950/40 text-purple-300',
    btnText: 'text-purple-400 group-hover:text-purple-300',
    btnArrowBg: 'bg-purple-500/15 text-purple-300 group-hover:bg-purple-500 group-hover:text-white',
    modalBorder: 'border-purple-500/50 shadow-purple-500/25',
    modalBtn: 'bg-purple-500 hover:bg-purple-400 text-white font-bold'
  },
  '08': {
    category: 'growth',
    glowColor: 'rgba(99, 102, 241, 0.22)',
    topLine: 'from-indigo-400 via-blue-400 to-indigo-600',
    borderHover: 'hover:border-indigo-500/60 hover:shadow-indigo-500/20',
    cardBorderActive: 'border-indigo-500/60 shadow-indigo-500/25',
    iconBoxBg: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400 shadow-indigo-500/20',
    iconBoxHover: 'group-hover:bg-indigo-500 group-hover:text-white group-hover:border-indigo-400 group-hover:shadow-lg group-hover:shadow-indigo-500/40',
    badge: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
    badgeDot: 'bg-indigo-400',
    numWatermark: 'text-indigo-400/20 group-hover:text-indigo-400/40',
    checkCircle: 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30',
    highlightBadge: 'border-indigo-500/25 bg-indigo-950/40 text-indigo-300',
    btnText: 'text-indigo-400 group-hover:text-indigo-300',
    btnArrowBg: 'bg-indigo-500/15 text-indigo-300 group-hover:bg-indigo-500 group-hover:text-white',
    modalBorder: 'border-indigo-500/50 shadow-indigo-500/25',
    modalBtn: 'bg-indigo-500 hover:bg-indigo-400 text-white font-bold'
  }
};

export default function Services({ onOpenContact }) {
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Services (8)' },
    { id: 'onboarding', label: 'Setup & Compliance' },
    { id: 'menu', label: 'Menu & Visuals' },
    { id: 'updates', label: 'Platform Management' },
    { id: 'growth', label: 'Growth & Pricing' }
  ];

  const filteredServices = servicesData.filter((service) => {
    if (activeCategory === 'all') return true;
    const theme = serviceThemes[service.id];
    return theme && theme.category === activeCategory;
  });

  const renderIcon = (type) => {
    switch (type) {
      case 'shield':
        return <ShieldCheckIcon className="w-6 h-6" />;
      case 'store':
        return <StoreIcon className="w-6 h-6" />;
      case 'camera':
        return <CameraIcon className="w-6 h-6" />;
      case 'menu':
        return <MenuBookIcon className="w-6 h-6" />;
      case 'refresh':
        return <RefreshCwIcon className="w-6 h-6" />;
      case 'tag':
        return <TagIcon className="w-6 h-6" />;
      case 'sliders':
        return <SlidersIcon className="w-6 h-6" />;
      default:
        return <MenuBookIcon className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="relative py-24 bg-[#05070f] overflow-hidden">
      {/* Background ambient multi-color glow elements */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-tr from-emerald-500/10 to-teal-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-rose-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-orange-500/15 to-amber-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-semibold uppercase tracking-wider shadow-sm">
            <SparklesIcon className="w-3.5 h-3.5 text-amber-400" />
            <span>Specialized Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
            What We <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">Do</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            Practical digital services designed around the everyday needs of restaurants. From compliance and visual catalogs to live platform management.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30 scale-105'
                      : 'bg-[#0f172a]/70 text-slate-300 hover:text-white hover:bg-[#1e293b] border border-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 8 Colorful & Interactive Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => {
            const isHovered = hoveredId === service.id;
            const theme = serviceThemes[service.id] || serviceThemes['01'];

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedService(service)}
                className={`group relative rounded-3xl p-6 sm:p-7 transition-all duration-300 cursor-pointer flex flex-col justify-between border overflow-hidden backdrop-blur-xl ${
                  isHovered
                    ? `bg-[#0e172e] ${theme.cardBorderActive} -translate-y-2 shadow-2xl scale-[1.02]`
                    : `bg-[#0b1222]/80 border-white/10 ${theme.borderHover} shadow-lg shadow-black/40`
                }`}
              >
                {/* Radial ambient spotlight for this card's specific color */}
                <div
                  className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-2xl transition-opacity duration-500 pointer-events-none opacity-20 group-hover:opacity-75"
                  style={{ background: theme.glowColor }}
                />

                {/* Top Glowing Color Accent Bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${theme.topLine} transition-opacity duration-300 opacity-70 group-hover:opacity-100`}
                />

                {/* Card Top: Number Watermark, Tag & Glowing Icon */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    {/* Big stylized number badge */}
                    <div className="flex items-center gap-2">
                      <span className={`text-2xl sm:text-3xl font-black font-heading tracking-tighter transition-colors duration-300 ${theme.numWatermark}`}>
                        {service.num}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border flex items-center gap-1.5 ${theme.badge}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${theme.badgeDot} animate-pulse`} />
                        {service.tag}
                      </span>
                    </div>

                    {/* 3D Radiant Icon Badge */}
                    <div
                      className={`w-11 h-11 rounded-2xl border flex items-center justify-center transition-all duration-300 shadow-md ${theme.iconBoxBg} ${theme.iconBoxHover}`}
                    >
                      {renderIcon(service.iconType)}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white font-heading mt-1 mb-2 leading-snug group-hover:text-white transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-300/90 leading-relaxed font-normal mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Highlight pill */}
                  <div className={`text-[11px] px-3 py-1.5 rounded-xl border mb-5 font-medium flex items-center gap-2 ${theme.highlightBadge}`}>
                    <SparklesIcon className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{service.highlight}</span>
                  </div>
                </div>

                {/* Card Bottom: Deliverable Highlights & Action Button */}
                <div className="relative z-10 pt-4 border-t border-white/10 space-y-2">
                  <div className="text-xs text-slate-300 flex items-center gap-2 font-medium">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${theme.checkCircle}`}>
                      <CheckIcon className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="truncate">{service.features[0]}</span>
                  </div>
                  <div className="text-xs text-slate-300 flex items-center gap-2 font-medium">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${theme.checkCircle}`}>
                      <CheckIcon className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="truncate">{service.features[1]}</span>
                  </div>

                  {/* Interactive Button CTA */}
                  <div className="pt-3 mt-1 flex items-center justify-between border-t border-white/5">
                    <span className={`text-xs font-bold tracking-wide transition-colors ${theme.btnText}`}>
                      Explore Service
                    </span>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${theme.btnArrowBg} group-hover:translate-x-1 shadow-sm`}>
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal when clicked with active color matching */}
      {selectedService && (() => {
        const theme = serviceThemes[selectedService.id] || serviceThemes['01'];
        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg animate-in fade-in">
            <div className={`relative w-full max-w-lg rounded-3xl bg-[#0b1222] border ${theme.modalBorder} p-6 sm:p-8 shadow-2xl text-left overflow-hidden`}>
              {/* Modal top ambient glow */}
              <div
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-40"
                style={{ background: theme.glowColor }}
              />

              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-xl bg-white/5 border border-white/10 transition-colors"
                aria-label="Close dialog"
              >
                &times;
              </button>

              <div className="flex items-center gap-3.5 mb-5 relative z-10">
                <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shadow-lg ${theme.iconBoxBg}`}>
                  {renderIcon(selectedService.iconType)}
                </div>
                <div>
                  <span className={`text-xs font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${theme.badge}`}>
                    Service {selectedService.num} &bull; {selectedService.tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mt-1">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6 relative z-10">
                {selectedService.description}
              </p>

              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 sm:p-5 mb-6 relative z-10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <SparklesIcon className="w-3.5 h-3.5 text-orange-400" />
                  Key Scope & Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${theme.checkCircle}`}>
                        <CheckIcon className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-white/10 relative z-10">
                <span className="text-xs text-slate-400 italic max-w-[60%]">
                  {selectedService.highlight}
                </span>
                <button
                  onClick={() => {
                    setSelectedService(null);
                    if (onOpenContact) onOpenContact();
                  }}
                  className={`px-5 py-2.5 rounded-xl text-xs shadow-lg transition-all transform hover:scale-105 cursor-pointer ${theme.modalBtn}`}
                >
                  Inquire Service
                </button>
              </div>
            </div>
          </div>
        );
      })()}
    </section>
  );
}
