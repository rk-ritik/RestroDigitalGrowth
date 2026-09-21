import React from 'react';
import { processSteps } from '../data/processSteps';
import {
  MessageSquareIcon,
  LayersIcon,
  SlidersIcon,
  ZapIcon,
  SparklesIcon,
  ArrowRightIcon,
  WhatsAppIcon
} from '../utils/icons';
import { AGENCY_CONFIG } from './Contact';

export default function Process({ onOpenContact }) {
  const renderStepIcon = (iconName) => {
    switch (iconName) {
      case 'message':
        return <MessageSquareIcon className="w-5 h-5" />;
      case 'layers':
        return <LayersIcon className="w-5 h-5" />;
      case 'sliders':
        return <SlidersIcon className="w-5 h-5" />;
      case 'zap':
        return <ZapIcon className="w-5 h-5" />;
      case 'sparkles':
        return <SparklesIcon className="w-5 h-5" />;
      default:
        return <SparklesIcon className="w-5 h-5" />;
    }
  };

  return (
    <section id="process" className="relative py-14 sm:py-16 bg-[#050814] border-t border-white/10 overflow-hidden">

      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-emerald-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header - Compact Margins */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-sky-500/15 via-purple-500/15 to-emerald-500/15 border border-white/10 text-orange-400 text-xs font-semibold uppercase tracking-wider">
            <SparklesIcon className="w-3.5 h-3.5 text-orange-400" />
            <span>Simple 5-Step Process</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-heading tracking-tight">
            How We Take Your Restaurant <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent">Digital in 2-4 Days</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 font-light max-w-lg mx-auto">
            Zero technical hassle for you. Just send your paper menu or photos on WhatsApp, and we take care of the rest.
          </p>
        </div>

        {/* Desktop 5-Step Horizontal Timeline Grid */}
        <div className="hidden lg:block relative mb-8">
          {/* Continuous Multi-Color Glowing Line */}
          <div className="absolute top-8 left-12 right-12 h-[2px] bg-gradient-to-r from-sky-500 via-purple-500 to-emerald-500 opacity-30 z-0 pointer-events-none" />

          <div className="grid grid-cols-5 gap-3.5 relative z-10">
            {processSteps.map((item, idx) => (
              <div
                key={item.step}
                className={`group p-4 rounded-2xl bg-[#090e1f] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between shadow-lg hover:-translate-y-1.5 ${item.glow}`}
              >
                <div>
                  {/* Top Node & Number Badge */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.gradient} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {renderStepIcon(item.icon)}
                    </div>

                    <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full font-bold border ${item.badgeBg}`}>
                      STEP {item.step}
                    </span>
                  </div>

                  {/* Title & Short Summary */}
                  <h3 className="text-sm font-bold text-white font-heading mb-1.5 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-[11px] text-slate-300 font-light leading-relaxed mb-3">
                    {item.description}
                  </p>
                </div>

                {/* Micro Detail Box */}
                <div className="mt-auto p-2.5 rounded-xl bg-white/[0.03] border border-white/6 text-[10px] text-slate-400 leading-snug">
                  {item.details}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Cards - Compact & Colorful */}
        <div className="block lg:hidden space-y-3 mb-8">
          {processSteps.map((item) => (
            <div
              key={item.step}
              className={`p-4 rounded-2xl bg-[#090e1f] border border-white/10 flex items-start gap-3.5 shadow-md ${item.glow}`}
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} text-white flex items-center justify-center shrink-0 shadow-md`}>
                {renderStepIcon(item.icon)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="text-sm font-bold text-white font-heading truncate">
                    {item.title}
                  </h3>
                  <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full shrink-0 border ${item.badgeBg}`}>
                    STEP {item.step}
                  </span>
                </div>
                <p className="text-xs text-slate-300 font-light mb-2 leading-relaxed">
                  {item.description}
                </p>
                <p className="text-[11px] text-slate-400 bg-white/[0.03] p-2 rounded-lg border border-white/6">
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Compact Fast Action Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-orange-950/30 via-[#0d1428] to-emerald-950/30 border border-orange-500/25 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="text-center sm:text-left">
            <h4 className="text-sm sm:text-base font-bold text-white">
              Ready to start Step 01 today?
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Send your menu on WhatsApp and get your ready digital plan within 24 hours.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={`https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hi Restro Digital Growth, I want to start Step 1 and upgrade my restaurant menu.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md transition-colors cursor-pointer"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>Send Menu on WhatsApp</span>
            </a>
            <button
              onClick={() => {
                if (onOpenContact) onOpenContact();
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold shadow-md transition-colors cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
