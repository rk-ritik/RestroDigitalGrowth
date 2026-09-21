import React from 'react';
import {
  ShieldCheckIcon,
  MenuBookIcon,
  CameraIcon,
  RefreshCwIcon,
  CheckCircleIcon,
  SparklesIcon
} from '../utils/icons';

export default function CapabilityStrip() {
  const capabilityCategories = [
    {
      title: "Onboarding & Compliance",
      icon: ShieldCheckIcon,
      tag: "Ready in 24h",
      color: "emerald",
      gradient: "from-emerald-500 to-teal-600",
      glowBorder: "hover:border-emerald-400/40",
      badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/25",
      items: [
        "FSSAI & document guidance",
        "Outlet profile & tax setup",
        "Fast bank verification prep"
      ]
    },
    {
      title: "Digital & QR Menu Design",
      icon: MenuBookIcon,
      tag: "Clear Pricing",
      color: "amber",
      gradient: "from-amber-500 to-orange-500",
      glowBorder: "hover:border-amber-400/40",
      badge: "bg-amber-500/15 text-amber-300 border-amber-500/25",
      items: [
        "Veg (🟢) & Non-Veg (🔴) marks",
        "Mouthwatering dish descriptions",
        "High-margin meal combo structuring"
      ]
    },
    {
      title: "HD Food Photography",
      icon: CameraIcon,
      tag: "4K Studio",
      color: "rose",
      gradient: "from-rose-500 to-pink-600",
      glowBorder: "hover:border-rose-400/40",
      badge: "bg-rose-500/15 text-rose-300 border-rose-500/25",
      items: [
        "Zomato & Swiggy 1:1 format",
        "Sizzling steam & garnish lighting",
        "Authentic dish appeal & styling"
      ]
    },
    {
      title: "Platform Sync & Updates",
      icon: RefreshCwIcon,
      tag: "Zero Errors",
      color: "sky",
      gradient: "from-sky-500 to-blue-600",
      glowBorder: "hover:border-sky-400/40",
      badge: "bg-sky-500/15 text-sky-300 border-sky-500/25",
      items: [
        "Instant rate & price changes",
        "Swiggy & Zomato modifier add-ons",
        "Live out-of-stock item sync"
      ]
    }
  ];

  return (
    <section className="relative py-10 sm:py-12 bg-[#060a17] border-t border-white/10 overflow-hidden">

      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[150px] bg-gradient-to-r from-orange-500/10 via-emerald-500/10 to-sky-500/10 blur-[90px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header - Compact Spacing */}
        <div className="text-center max-w-2xl mx-auto mb-7 space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/5 border border-white/10 text-orange-400 text-[11px] font-semibold uppercase tracking-wider">
            <SparklesIcon className="w-3 h-3 text-orange-400" />
            <span>Full Service Capabilities</span>
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white font-heading tracking-tight">
            Complete Digital Coverage For <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">Your Restaurant</span>
          </h3>

          <p className="text-xs sm:text-sm text-slate-400 font-light max-w-md mx-auto">
            Everything handled accurately so you can focus 100% on delicious food and welcoming diners.
          </p>
        </div>

        {/* 4 Colorful Capability Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {capabilityCategories.map((cat, idx) => {
            const IconComponent = cat.icon;

            return (
              <div
                key={idx}
                className={`p-4 sm:p-5 rounded-2xl bg-[#090e1f] border border-white/10 ${cat.glowBorder} hover:shadow-lg transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1`}
              >
                <div>
                  {/* Card Top: Gradient Icon + Micro Tag */}
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${cat.gradient} text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}>
                      <IconComponent className="w-4 h-4" />
                    </div>

                    <span className={`text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full font-bold border ${cat.badge}`}>
                      {cat.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-sm font-bold text-white font-heading mb-3 group-hover:text-amber-300 transition-colors">
                    {cat.title}
                  </h4>

                  {/* Bullet Points */}
                  <ul className="space-y-2 text-xs text-slate-300">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircleIcon className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="font-light leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
