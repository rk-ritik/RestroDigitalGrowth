import React from 'react';
import { MenuBookIcon, CameraIcon, ZapIcon, StoreIcon } from '../utils/icons';

export default function TrustStrip() {
  const indicators = [
    {
      title: "Menu Management",
      desc: "Full taxonomy, portions & modifier setup",
      icon: <MenuBookIcon className="w-5 h-5 text-orange-400" />
    },
    {
      title: "Food Images",
      desc: "Appetite-driven, platform-ready visuals",
      icon: <CameraIcon className="w-5 h-5 text-amber-400" />
    },
    {
      title: "Platform Support",
      desc: "Zomato & Swiggy listing maintenance",
      icon: <ZapIcon className="w-5 h-5 text-rose-400" />
    },
    {
      title: "Restaurant Setup",
      desc: "FSSAI guidance & outlet registration",
      icon: <StoreIcon className="w-5 h-5 text-emerald-400" />
    }
  ];

  return (
    <section className="relative py-12 border-y border-white/8 bg-[#070b16]/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-white/6 gap-4">
          <div>
            <span className="text-[11px] font-mono tracking-widest uppercase text-orange-400 font-semibold">
              End-To-End Readiness
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mt-1">
              Everything Your Restaurant Needs to Go Digital
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-lg leading-relaxed">
            From documentation and onboarding to menu presentation and platform updates, we help keep your restaurant's digital presence organized and ready.
          </p>
        </div>

        {/* 4 Visual Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {indicators.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3.5 p-4 rounded-xl bg-white/[0.03] border border-white/8 hover:border-orange-500/30 hover:bg-orange-500/[0.04] transition-all duration-300 group"
            >
              <div className="p-2.5 rounded-lg bg-[#0d1222] border border-white/10 group-hover:scale-110 group-hover:border-orange-500/40 transition-all">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm font-bold text-white group-hover:text-orange-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5 leading-snug">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
