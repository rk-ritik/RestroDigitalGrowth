import React, { useState, useRef } from 'react';
import {
  SlidersIcon,
  SparklesIcon,
  TrendingUpIcon,
  CheckCircleIcon
} from '../utils/icons';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleSliderMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  const transformationPillars = [
    {
      title: "1. Digital Menu & QR Overhaul",
      type: "Dine-in Clarity",
      before: "Old paper cards with messy handwriting and missing veg/non-veg marks.",
      after: "Sleek mobile QR menu with categorized sections, dish photos & instant order speed.",
      benefit: "Customers order in < 4 mins without waiting for busy waiters."
    },
    {
      title: "2. HD Food Photography",
      type: "Appetite Appeal",
      before: "Dull phone camera snaps in plastic containers with washed-out gravy.",
      after: "Sizzling 4K studio food photography highlighting textures, garnishing and steam.",
      benefit: "Boosts delivery clicks by 45% over competitors."
    },
    {
      title: "3. Zomato & Swiggy Optimization",
      type: "Zero Mistakes",
      before: "Outdated pricing, missing portion sizes, and frequent wrong order complaints.",
      after: "Clean item variants (Half/Full), bestseller tags, and real-time menu sync.",
      benefit: "Eliminates refund penalties and customer cancellation complaints."
    },
    {
      title: "4. Smart Add-ons & Combos",
      type: "Higher Profits",
      before: "Flat dish listing with zero options to add extra cheese, butter or drinks.",
      after: "Step-by-step modifier prompts (+₹40 Butter, +₹50 Paneer, +₹30 Cold Drink).",
      benefit: "Raises average bill value by ₹40 to ₹80 per order."
    }
  ];

  return (
    <section id="before-after" className="relative py-24 bg-[#050814] border-t border-white/10 overflow-hidden">

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[300px] bg-rose-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[300px] bg-emerald-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-rose-500/15 via-orange-500/15 to-emerald-500/15 border border-white/10 text-orange-300 text-xs font-semibold uppercase tracking-wider">
            <SparklesIcon className="w-3.5 h-3.5 text-orange-400" />
            <span>Before &amp; After Comparison</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-heading tracking-tight">
            See The <span className="bg-gradient-to-r from-rose-400 via-orange-400 to-emerald-400 bg-clip-text text-transparent">Transformation</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light max-w-xl mx-auto">
            Drag the interactive slider to see the difference between an amateur smartphone upload and a mouthwatering, platform-ready dish shoot.
          </p>
        </div>

        {/* Interactive Before / After Slider Box */}
        <div className="max-w-4xl mx-auto mb-16">
          <div
            ref={containerRef}
            onMouseMove={(e) => {
              if (e.buttons === 1) handleSliderMove(e);
            }}
            onTouchMove={handleSliderMove}
            onClick={handleSliderMove}
            className="relative h-[340px] sm:h-[440px] md:h-[480px] rounded-3xl overflow-hidden border-2 border-white/15 shadow-2xl select-none cursor-ew-resize group bg-black"
          >
            {/* "AFTER" Background (Complete Full Layer) */}
            <div className="absolute inset-0">
              <img
                src="/Paneer Tikka Charcoal.jpg"
                alt="After: Sizzling HD Food Photography"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40 pointer-events-none" />

              {/* After Info Overlay */}
              <div className="absolute bottom-4 right-4 max-w-[260px] sm:max-w-xs text-right bg-black/80 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-emerald-500/40 shadow-xl">
                <div className="flex items-center justify-end gap-1.5 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-black font-black text-[10px] tracking-wider uppercase">
                    AFTER: RESTRO DIGITAL
                  </span>
                </div>
                <h4 className="text-white font-bold text-sm sm:text-base font-heading">
                  HD 4K Dish Photography
                </h4>
                <ul className="text-[11px] text-emerald-200/90 mt-1.5 space-y-0.5 text-right font-light">
                  <li>&bull; Warm studio lighting &amp; visible steam</li>
                  <li>&bull; Appetite-inducing garnishing</li>
                  <li>&bull; +45% higher click-to-order rate</li>
                </ul>
              </div>

              {/* After Top Tag */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-500 text-black text-xs font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                <CheckCircleIcon className="w-3.5 h-3.5" />
                <span>AFTER</span>
              </div>
            </div>

            {/* "BEFORE" Foreground Layer (Clipped by slider position) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="/Before.png"
                alt="Before: Amateur Smartphone Upload"
                className="absolute inset-0 w-full h-full object-cover max-w-none filter brightness-90 contrast-90"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/50 pointer-events-none" />

              {/* Before Info Overlay */}
              <div className="absolute bottom-4 left-4 max-w-[260px] sm:max-w-xs text-left bg-black/80 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-rose-500/40 shadow-xl">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  <span className="px-2 py-0.5 rounded-full bg-rose-600 text-white font-black text-[10px] tracking-wider uppercase">
                    BEFORE: UNOPTIMIZED
                  </span>
                </div>
                <h4 className="text-white font-bold text-sm sm:text-base font-heading">
                  Amateur Phone Snap
                </h4>
                <ul className="text-[11px] text-rose-200/90 mt-1.5 space-y-0.5 text-left font-light">
                  <li>&bull; Flat, unlit smartphone flash</li>
                  <li>&bull; Dull colors &amp; zero appetite appeal</li>
                  <li>&bull; Low clicks on Zomato &amp; Swiggy</li>
                </ul>
              </div>

              {/* Before Top Tag */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-rose-600 text-white text-xs font-black uppercase tracking-wider shadow-lg">
                <span>BEFORE</span>
              </div>
            </div>

            {/* Draggable Divider Line & Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] z-30"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white border-2 border-white flex items-center justify-center shadow-2xl shadow-orange-500/80 group-hover:scale-110 transition-transform">
                <SlidersIcon className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Quick preset control buttons & slider percentage */}
          <div className="mt-4 flex items-center justify-between gap-2 text-xs text-slate-400">
            <button
              onClick={() => setSliderPosition(10)}
              className="px-2.5 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 transition-colors font-medium cursor-pointer"
            >
              Show Full After &rarr;
            </button>

            <div className="flex items-center gap-2 font-mono text-[11px] text-slate-300">
              <span className="text-rose-400">Before {Math.round(sliderPosition)}%</span>
              <span className="text-slate-500">&bull;</span>
              <span className="text-emerald-400">After {Math.round(100 - sliderPosition)}%</span>
            </div>

            <button
              onClick={() => setSliderPosition(90)}
              className="px-2.5 py-1 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 transition-colors font-medium cursor-pointer"
            >
              &larr; Show Full Before
            </button>
          </div>
        </div>

        {/* 4 Transformation Pillar Cards */}
        <div className="space-y-6">
          <div className="text-center">
            <span className="text-xs font-mono uppercase tracking-widest text-orange-400 font-bold">
              Complete Upgrade System
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white font-heading mt-1">
              4 Ways We Elevate Your Restaurant
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {transformationPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-[#090e1e] border border-white/10 hover:border-orange-500/40 transition-all duration-300 shadow-xl group hover:-translate-y-1"
              >
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/8 mb-3.5">
                  <h4 className="text-sm sm:text-base font-bold text-white font-heading group-hover:text-orange-300 transition-colors">
                    {pillar.title}
                  </h4>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-orange-300 bg-orange-500/10 border border-orange-500/20 px-2.5 py-0.5 rounded-full font-bold">
                    {pillar.type}
                  </span>
                </div>

                {/* Dual Before / After comparison boxes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-3.5">
                  <div className="p-3 rounded-xl bg-rose-950/25 border border-rose-500/25">
                    <span className="text-[10px] font-mono uppercase text-rose-400 font-bold block mb-1">
                      ❌ Before (Old Way):
                    </span>
                    <p className="text-slate-300 leading-relaxed font-light text-[11px]">
                      {pillar.before}
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-950/25 border border-emerald-500/25">
                    <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block mb-1">
                      ✅ After (Our Standard):
                    </span>
                    <p className="text-slate-200 leading-relaxed font-light text-[11px]">
                      {pillar.after}
                    </p>
                  </div>
                </div>

                {/* Measurable ROI Result */}
                <div className="pt-2 flex items-center gap-2 text-xs font-medium">
                  <TrendingUpIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-emerald-300">{pillar.benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
