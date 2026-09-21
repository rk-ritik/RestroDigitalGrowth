import React from 'react';
import {
  StoreIcon,
  LayersIcon,
  CameraIcon,
  SlidersIcon,
  ShieldCheckIcon,
  TrendingUpIcon,
  SparklesIcon,
  CheckCircleIcon
} from '../utils/icons';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "100% Restaurant Specialized",
      desc: "Built specifically for cafes, cloud kitchens, dhabas, and family restaurants — no generic corporate templates.",
      icon: StoreIcon,
      tag: "Food Specialized",
      color: "amber",
      gradient: "from-amber-500 to-orange-500",
      borderHover: "hover:border-amber-400/50",
      badge: "bg-amber-500/15 text-amber-300 border-amber-500/30",
      highlight: "Tailored for food businesses"
    },
    {
      title: "All-in-One Digital Hub",
      desc: "QR menus, HD food photography, Zomato & Swiggy catalog updates, and social graphics all handled under one roof.",
      icon: LayersIcon,
      tag: "Unified Service",
      color: "sky",
      gradient: "from-sky-500 to-blue-600",
      borderHover: "hover:border-sky-400/50",
      badge: "bg-sky-500/15 text-sky-300 border-sky-500/30",
      highlight: "No multiple freelancers"
    },
    {
      title: "Appetite-Driven Visuals",
      desc: "High-definition dish photos showing authentic steam, crisp textures, and mouthwatering garnishes that make guests click and buy.",
      icon: CameraIcon,
      tag: "HD Dish Shots",
      color: "rose",
      gradient: "from-rose-500 to-pink-600",
      borderHover: "hover:border-rose-400/50",
      badge: "bg-rose-500/15 text-rose-300 border-rose-500/30",
      highlight: "+45% more delivery clicks"
    },
    {
      title: "Smart Pricing & Add-ons",
      desc: "Custom modifier steps (extra butter +₹20, extra paneer +₹50, dips) that raise your average bill without extra marketing cost.",
      icon: SlidersIcon,
      tag: "Higher Margin",
      color: "emerald",
      gradient: "from-emerald-500 to-teal-600",
      borderHover: "hover:border-emerald-400/50",
      badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
      highlight: "+₹40-₹80 per order"
    },
    {
      title: "Zero Headaches & Fast Launch",
      desc: "Send your paper menu on WhatsApp and go live in 2-4 days. 100% price accuracy with zero wrong order errors.",
      icon: ShieldCheckIcon,
      tag: "2-4 Day Setup",
      color: "purple",
      gradient: "from-purple-500 to-indigo-600",
      borderHover: "hover:border-purple-400/50",
      badge: "bg-purple-500/15 text-purple-300 border-purple-500/30",
      highlight: "Fast & stress-free"
    },
    {
      title: "Proven Revenue Growth",
      desc: "Faster dine-in table turnover, top-3 local search visibility, and higher repeat customer loyalty from day one.",
      icon: TrendingUpIcon,
      tag: "Measurable ROI",
      color: "orange",
      gradient: "from-orange-500 to-amber-500",
      borderHover: "hover:border-orange-400/50",
      badge: "bg-orange-500/15 text-orange-300 border-orange-500/30",
      highlight: "2x faster ordering"
    }
  ];

  return (
    <section id="why-us" className="relative py-14 sm:py-16 bg-[#050814] border-t border-white/10 overflow-hidden">

      {/* Background Ambience Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[250px] bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-sky-500/10 blur-[110px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header - Compact Margins */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/15 via-rose-500/15 to-emerald-500/15 border border-white/10 text-orange-400 text-xs font-semibold uppercase tracking-wider">
            <SparklesIcon className="w-3.5 h-3.5 text-orange-400" />
            <span>Why Restaurants Trust Us</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-heading tracking-tight">
            Built For Real Food Businesses, <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent">Not Generic Brands</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 font-light max-w-lg mx-auto">
            Practical digital execution that actually brings more orders, cuts customer confusion, and makes restaurant operations smoother.
          </p>
        </div>

        {/* 6 Colorful & Balanced Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {reasons.map((r, i) => {
            const IconComponent = r.icon;
            return (
              <div
                key={i}
                className={`p-5 sm:p-6 rounded-2xl bg-[#090e1f] border border-white/10 ${r.borderHover} hover:shadow-xl transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1`}
              >
                <div>
                  {/* Card Top: Gradient Icon & Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${r.gradient} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full font-bold border ${r.badge}`}>
                      {r.tag}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-base sm:text-lg font-bold text-white font-heading group-hover:text-amber-300 transition-colors">
                    {r.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-xs text-slate-300 mt-2 font-light leading-relaxed">
                    {r.desc}
                  </p>
                </div>

                {/* Bottom Highlight Strip */}
                <div className="mt-4 pt-3 border-t border-white/6 flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                  <CheckCircleIcon className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{r.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
