import React, { useState, useEffect } from 'react';
import { journeyStages } from '../data/journeyStages';
import {
  StoreIcon,
  ShieldCheckIcon,
  MenuBookIcon,
  CameraIcon,
  TagIcon,
  SparklesIcon,
  ZapIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  CheckIcon,
  ArrowRightIcon
} from '../utils/icons';

// Vibrant theme mapping for each of the 8 stages
const stageThemes = {
  1: {
    name: 'Foundation',
    accent: 'amber',
    gradient: 'from-amber-400 via-orange-500 to-yellow-500',
    glowColor: 'rgba(245, 158, 11, 0.22)',
    cardBorder: 'border-amber-500/40',
    tabActive: 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/30 scale-105',
    tabDot: 'bg-amber-400',
    badge: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    watermark: 'text-amber-500/10',
    chip: 'bg-amber-500/10 border-amber-500/20 text-amber-200',
    btnAction: 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600'
  },
  2: {
    name: 'Compliance',
    accent: 'emerald',
    gradient: 'from-emerald-400 via-teal-400 to-emerald-500',
    glowColor: 'rgba(16, 185, 129, 0.22)',
    cardBorder: 'border-emerald-500/40',
    tabActive: 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30 scale-105',
    tabDot: 'bg-emerald-400',
    badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    watermark: 'text-emerald-500/10',
    chip: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-200',
    btnAction: 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600'
  },
  3: {
    name: 'Architecture',
    accent: 'cyan',
    gradient: 'from-cyan-400 via-sky-400 to-blue-500',
    glowColor: 'rgba(6, 182, 212, 0.22)',
    cardBorder: 'border-cyan-500/40',
    tabActive: 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30 scale-105',
    tabDot: 'bg-cyan-400',
    badge: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
    watermark: 'text-cyan-500/10',
    chip: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-200',
    btnAction: 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600'
  },
  4: {
    name: 'Visuals',
    accent: 'rose',
    gradient: 'from-rose-500 via-pink-400 to-rose-600',
    glowColor: 'rgba(244, 63, 94, 0.22)',
    cardBorder: 'border-rose-500/40',
    tabActive: 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-500/30 scale-105',
    tabDot: 'bg-rose-400',
    badge: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
    watermark: 'text-rose-500/10',
    chip: 'bg-rose-500/10 border-rose-500/20 text-rose-200',
    btnAction: 'bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600'
  },
  5: {
    name: 'Pricing',
    accent: 'blue',
    gradient: 'from-blue-400 via-indigo-400 to-sky-500',
    glowColor: 'rgba(59, 130, 246, 0.22)',
    cardBorder: 'border-blue-500/40',
    tabActive: 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/30 scale-105',
    tabDot: 'bg-blue-400',
    badge: 'bg-blue-500/15 text-blue-300 border-blue-500/30',
    watermark: 'text-blue-500/10',
    chip: 'bg-blue-500/10 border-blue-500/20 text-blue-200',
    btnAction: 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600'
  },
  6: {
    name: 'Modifiers',
    accent: 'purple',
    gradient: 'from-purple-400 via-violet-400 to-fuchsia-500',
    glowColor: 'rgba(168, 85, 247, 0.22)',
    cardBorder: 'border-purple-500/40',
    tabActive: 'bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white shadow-lg shadow-purple-500/30 scale-105',
    tabDot: 'bg-purple-400',
    badge: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
    watermark: 'text-purple-500/10',
    chip: 'bg-purple-500/10 border-purple-500/20 text-purple-200',
    btnAction: 'bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:from-purple-600 hover:to-fuchsia-600'
  },
  7: {
    name: 'Distribution',
    accent: 'orange',
    gradient: 'from-red-500 via-orange-500 to-amber-500',
    glowColor: 'rgba(249, 115, 22, 0.22)',
    cardBorder: 'border-orange-500/40',
    tabActive: 'bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30 scale-105',
    tabDot: 'bg-orange-400',
    badge: 'bg-orange-500/15 text-orange-300 border-orange-500/30',
    watermark: 'text-orange-500/10',
    chip: 'bg-orange-500/10 border-orange-500/20 text-orange-200',
    btnAction: 'bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600'
  },
  8: {
    name: 'Growth',
    accent: 'emerald',
    gradient: 'from-amber-400 via-emerald-400 to-teal-300',
    glowColor: 'rgba(16, 185, 129, 0.28)',
    cardBorder: 'border-emerald-500/50',
    tabActive: 'bg-gradient-to-r from-amber-500 via-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30 scale-105',
    tabDot: 'bg-emerald-300',
    badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    watermark: 'text-emerald-500/10',
    chip: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-200',
    btnAction: 'bg-gradient-to-r from-amber-500 to-emerald-500 hover:from-amber-600 hover:to-emerald-600'
  }
};

export default function ServiceJourney({ onOpenContact }) {
  const [activeStep, setActiveStep] = useState(1);
  const currentStage = journeyStages.find((s) => s.step === activeStep) || journeyStages[0];
  const currentTheme = stageThemes[activeStep] || stageThemes[1];

  // Auto progression every 5 seconds if user isn't actively clicking
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isAutoPlay) {
      setProgress(0);
      return;
    }

    setProgress(0);
    const duration = 4500; // 4.5 seconds per stage
    const intervalTime = 40;
    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setProgress(pct);

      if (elapsed >= duration) {
        clearInterval(timer);
        setActiveStep((prev) => (prev >= 8 ? 1 : prev + 1));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isAutoPlay, activeStep]);

  const renderVisualContent = () => {
    switch (currentStage.visualType) {
      case 'restaurant':
        return (
          <div className="flex flex-col items-center justify-center p-6 text-center space-y-4 animate-in zoom-in-95 duration-500 w-full max-w-md">
            {/* Ambient visual badge */}
            <div className="relative">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-amber-500/25 to-orange-500/15 border-2 border-amber-500/40 flex items-center justify-center text-amber-400 shadow-2xl shadow-amber-500/25">
                <StoreIcon className="w-12 h-12 text-amber-400 animate-pulse" />
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center text-[10px] font-bold text-slate-950 shadow-md">
                ★
              </div>
            </div>

            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-semibold">
                Offline Establishment
              </span>
              <h4 className="text-2xl font-black text-white font-heading mt-1">
                Authentic Kitchen &amp; Dining
              </h4>
              <p className="text-xs text-slate-300 max-w-xs mx-auto mt-2 leading-relaxed">
                Great authentic flavors and loyal dine-in guests, ready to be unlocked for thousands of online diners.
              </p>
            </div>

            {/* Status indicators */}
            <div className="grid grid-cols-2 gap-2.5 w-full pt-2">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-left">
                <span className="text-[10px] text-amber-300 font-mono block">Dine-in Floor</span>
                <span className="text-xs font-bold text-white">Full Capacity</span>
              </div>
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-left">
                <span className="text-[10px] text-emerald-300 font-mono block">Digital Readiness</span>
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Ready to Launch
                </span>
              </div>
            </div>
          </div>
        );

      case 'documents':
        return (
          <div className="flex flex-col items-center justify-center p-4 sm:p-6 space-y-4 animate-in slide-in-from-bottom-4 duration-500 w-full max-w-md">
            <div className="w-full bg-[#0a1424] rounded-2xl border-2 border-emerald-500/40 p-5 shadow-2xl shadow-emerald-500/15 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2.5 text-emerald-400">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                    <ShieldCheckIcon className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-xs font-bold font-mono text-white block">FSSAI Compliance Clearance</span>
                    <span className="text-[10px] text-slate-400">Official Food Safety Verified</span>
                  </div>
                </div>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full font-mono font-bold border border-emerald-500/30">
                  ACTIVE
                </span>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-xs p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-slate-300">FSSAI License ID</span>
                  <span className="font-mono text-emerald-400 font-bold bg-emerald-950/40 px-2 py-0.5 rounded">2142401000XXXX</span>
                </div>
                <div className="flex items-center justify-between text-xs p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-slate-300">Hygiene &amp; Safety Audit</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckIcon className="w-3.5 h-3.5" /> 100% Passed
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-slate-300">Platform Onboarding Status</span>
                  <span className="text-emerald-300 font-semibold">Authorized</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'menu':
        return (
          <div className="flex flex-col items-center justify-center p-4 sm:p-6 space-y-3 animate-in slide-in-from-right-4 duration-500 w-full max-w-md">
            <div className="w-full bg-[#091326] rounded-2xl border-2 border-cyan-500/40 p-5 shadow-2xl shadow-cyan-500/15">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2.5 text-cyan-400">
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                    <MenuBookIcon className="w-4 h-4 text-cyan-300" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider font-mono text-white">Digital Menu Taxonomy</span>
                </div>
                <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2.5 py-1 rounded-full font-mono font-bold border border-cyan-500/30">
                  LIVE CATALOG
                </span>
              </div>

              <div className="mt-3.5 space-y-2.5">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-cyan-500/20 flex items-center justify-between hover:bg-cyan-500/5 transition-colors">
                  <div className="flex items-start gap-2">
                    <div className="w-3.5 h-3.5 border border-emerald-500 flex items-center justify-center p-[2px] mt-0.5 rounded-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <div>
                      <span className="text-[10px] text-cyan-400 font-mono font-bold uppercase">STARTERS &bull; TANDOOR</span>
                      <h5 className="text-sm font-bold text-white">Paneer Tikka Charcoal</h5>
                      <p className="text-[11px] text-slate-400">Clay tandoor spiced, charred bell peppers</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-950/40 px-2 py-1 rounded">₹220</span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-cyan-500/20 flex items-center justify-between hover:bg-cyan-500/5 transition-colors">
                  <div className="flex items-start gap-2">
                    <div className="w-3.5 h-3.5 border border-emerald-500 flex items-center justify-center p-[2px] mt-0.5 rounded-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <div>
                      <span className="text-[10px] text-cyan-400 font-mono font-bold uppercase">MAIN COURSE &bull; GRAVY</span>
                      <h5 className="text-sm font-bold text-white">Paneer Butter Masala</h5>
                      <p className="text-[11px] text-slate-400">Velvety tomato gravy with churned butter</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-950/40 px-2 py-1 rounded">₹240</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'foodImage':
        return (
          <div className="flex flex-col items-center justify-center p-4 space-y-3 animate-in zoom-in-95 duration-500 w-full max-w-md">
            <div className="relative w-full rounded-2xl overflow-hidden border-2 border-rose-500/40 shadow-2xl shadow-rose-500/20 group">
              <img
                src="Paneer Tikka Charcoal.jpg"
                alt="Studio Paneer Tikka Charcoal"
                className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060914] via-transparent to-transparent" />

              {/* Viewfinder crosshairs */}
              <div className="absolute inset-4 border border-white/20 rounded-lg pointer-events-none flex flex-col justify-between p-2">
                <div className="flex justify-between text-[10px] font-mono text-rose-300">
                  <span className="bg-black/60 px-2 py-0.5 rounded backdrop-blur-md">ISO 200 &bull; 50mm</span>
                  <span className="bg-rose-500/80 text-white px-2 py-0.5 rounded font-bold">4:3 STUDIO</span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="bg-black/60 px-2.5 py-1 rounded text-[11px] text-white font-bold backdrop-blur-md">
                    Paneer Tikka Charcoal
                  </span>
                  <span className="text-[10px] bg-emerald-500/80 text-white px-2 py-0.5 rounded font-mono font-bold">
                    +300% VISUAL CLICKS
                  </span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'pricing':
        return (
          <div className="flex flex-col items-center justify-center p-4 sm:p-6 space-y-4 animate-in slide-in-from-top-4 duration-500 w-full max-w-md">
            <div className="w-full bg-[#081226] rounded-2xl border-2 border-blue-500/40 p-5 shadow-2xl shadow-blue-500/15">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2.5 text-blue-400">
                  <div className="w-8 h-8 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                    <TagIcon className="w-4 h-4 text-blue-300" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider font-mono text-white">Dynamic Pricing Architecture</span>
                </div>
                <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2.5 py-1 rounded-full font-mono font-bold border border-blue-500/30">
                  MARGIN +32%
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                  <span className="text-[11px] text-slate-400 block font-medium">Standard Portion</span>
                  <div className="text-2xl font-black text-white font-mono mt-1">₹220</div>
                  <span className="text-[10px] text-slate-400 mt-1 inline-block">Normal single diner</span>
                </div>
                <div className="p-3.5 rounded-xl bg-gradient-to-b from-blue-500/20 to-indigo-500/10 border-2 border-blue-500/50 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-blue-500 text-slate-950 font-black text-[9px] px-2 py-0.5 rounded-bl">
                    POPULAR
                  </div>
                  <span className="text-[11px] text-blue-200 block font-semibold">Jumbo Feast Portion</span>
                  <div className="text-2xl font-black text-blue-300 font-mono mt-1">₹390</div>
                  <span className="text-[10px] text-emerald-400 font-bold mt-1 inline-block">High-Margin Combo</span>
                </div>
              </div>

              <div className="mt-3 p-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-[11px] text-blue-200 text-center font-mono">
                Packaging overheads and delivery commissions factored in transparently
              </div>
            </div>
          </div>
        );

      case 'addons':
        return (
          <div className="flex flex-col items-center justify-center p-4 sm:p-6 space-y-4 animate-in slide-in-from-bottom-4 duration-500 w-full max-w-md">
            <div className="w-full bg-[#120e26] rounded-2xl border-2 border-purple-500/40 p-5 shadow-2xl shadow-purple-500/15">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2.5 text-purple-400">
                  <div className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                    <SparklesIcon className="w-4 h-4 text-purple-300" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider font-mono text-white">Smart Add-ons &amp; Modifiers</span>
                </div>
                <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2.5 py-1 rounded-full font-mono font-bold border border-purple-500/30">
                  +28% BASKET SIZE
                </span>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between p-3 rounded-xl bg-purple-500/15 border border-purple-500/30 text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-md bg-purple-500 flex items-center justify-center text-white">
                      <CheckIcon className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-white font-semibold">Extra Paneer Cubes (4 pcs)</span>
                  </div>
                  <span className="font-mono text-purple-300 font-bold bg-purple-950/60 px-2 py-0.5 rounded">+₹50</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-purple-500/15 border border-purple-500/30 text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-md bg-purple-500 flex items-center justify-center text-white">
                      <CheckIcon className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-white font-semibold">Amul Butter Garnish Dollop</span>
                  </div>
                  <span className="font-mono text-purple-300 font-bold bg-purple-950/60 px-2 py-0.5 rounded">+₹20</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-purple-500/15 border border-purple-500/30 text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-md bg-purple-500 flex items-center justify-center text-white">
                      <CheckIcon className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-white font-semibold">Melting Mozzarella Crust</span>
                  </div>
                  <span className="font-mono text-purple-300 font-bold bg-purple-950/60 px-2 py-0.5 rounded">+₹40</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'platforms':
        return (
          <div className="flex flex-col items-center justify-center p-4 sm:p-6 space-y-4 animate-in zoom-in-95 duration-500 w-full max-w-md">
            <div className="w-full grid grid-cols-2 gap-3.5">
              {/* Zomato Live Card */}
              <div className="p-4 rounded-2xl bg-gradient-to-b from-[#200b0f] to-[#120608] border-2 border-red-500/40 flex flex-col items-center text-center shadow-xl shadow-red-500/15 relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-red-500/20 border border-red-500/40 text-red-400 flex items-center justify-center font-black font-heading text-lg mb-2 shadow-inner">
                  Z
                </div>
                <h5 className="text-sm font-bold text-white">Zomato Sync</h5>
                <span className="text-[10px] text-emerald-400 mt-1 font-mono font-bold flex items-center gap-1 bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  CATALOG LIVE
                </span>
                <span className="text-[10px] text-slate-400 mt-2">Prices &amp; Photos Linked</span>
              </div>

              {/* Swiggy Live Card */}
              <div className="p-4 rounded-2xl bg-gradient-to-b from-[#201007] to-[#120804] border-2 border-orange-500/40 flex flex-col items-center text-center shadow-xl shadow-orange-500/15 relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/20 border border-orange-500/40 text-orange-400 flex items-center justify-center font-black font-heading text-lg mb-2 shadow-inner">
                  S
                </div>
                <h5 className="text-sm font-bold text-white">Swiggy Sync</h5>
                <span className="text-[10px] text-emerald-400 mt-1 font-mono font-bold flex items-center gap-1 bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  CATALOG LIVE
                </span>
                <span className="text-[10px] text-slate-400 mt-2">Modifiers &amp; Tags Active</span>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/8 text-center text-xs text-slate-300 font-medium">
              ⚡ Real-time inventory sync &amp; instant price updates across both apps
            </div>
          </div>
        );

      case 'ready':
        return (
          <div className="flex flex-col items-center justify-center p-4 sm:p-6 text-center space-y-4 animate-in zoom-in-90 duration-500 w-full max-w-md">
            <div className="relative">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-amber-400 flex items-center justify-center text-slate-950 shadow-2xl shadow-emerald-500/40 font-black">
                <CheckCircleIcon className="w-10 h-10 text-slate-950" />
              </div>
              <div className="absolute -inset-2 rounded-3xl border-2 border-emerald-400/40 animate-ping pointer-events-none" />
            </div>

            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-extrabold bg-emerald-950/50 px-3 py-1 rounded-full border border-emerald-500/30">
                MISSION ACCOMPLISHED
              </span>
              <h4 className="text-2xl font-black text-white font-heading mt-2">
                Your Restaurant Is Digitally Ready
              </h4>
              <p className="text-xs text-slate-300 max-w-xs mx-auto mt-2 leading-relaxed">
                Legally cleared, mouth-watering imagery, optimized margins, synced delivery network. Ready to scale.
              </p>
            </div>

            {/* Performance KPI badges */}
            <div className="grid grid-cols-3 gap-2 w-full pt-1">
              <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
                <span className="text-xs font-black text-emerald-400 block">+140%</span>
                <span className="text-[9px] text-slate-400 uppercase font-mono">Orders</span>
              </div>
              <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-center">
                <span className="text-xs font-black text-amber-400 block">4.8 ★</span>
                <span className="text-[9px] text-slate-400 uppercase font-mono">Rating</span>
              </div>
              <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-center">
                <span className="text-xs font-black text-blue-400 block">&lt; 15 min</span>
                <span className="text-[9px] text-slate-400 uppercase font-mono">Setup</span>
              </div>
            </div>

            <button
              onClick={() => {
                if (onOpenContact) onOpenContact();
              }}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-xs font-bold shadow-lg shadow-orange-500/30 hover:scale-105 transition-transform cursor-pointer"
            >
              Start Your Growth Journey
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="journey" className="relative py-24 bg-[#050711] border-t border-white/8 overflow-hidden">
      {/* Background ambient lighting matching the active stage */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full blur-3xl pointer-events-none -z-10 transition-all duration-700 opacity-60"
        style={{ background: currentTheme.glowColor }}
      />
      <div className="absolute -bottom-10 right-0 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-orange-500/15 to-amber-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-semibold uppercase tracking-wider shadow-sm">
            <SparklesIcon className="w-3.5 h-3.5 text-amber-400" />
            <span>8-Step Digital Transformation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
            From Restaurant to <span className={`bg-gradient-to-r ${currentTheme.gradient} bg-clip-text text-transparent transition-all duration-500`}>Digital Growth</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            Experience the step-by-step roadmap turning a brick-and-mortar kitchen into a high-converting digital delivery business.
          </p>
        </div>

        {/* Stage Navigation Track Buttons */}
        <div className="relative mb-8">
          <div className="flex items-center justify-between gap-1.5 sm:gap-2 overflow-x-auto pb-3 pt-1 px-1 no-scrollbar">
            {journeyStages.map((stage) => {
              const isCurrent = stage.step === activeStep;
              const theme = stageThemes[stage.step] || stageThemes[1];

              return (
                <button
                  key={stage.step}
                  onClick={() => {
                    setActiveStep(stage.step);
                    setIsAutoPlay(false);
                  }}
                  className={`flex-shrink-0 flex items-center gap-2 px-3.5 py-2.5 rounded-2xl text-xs font-semibold transition-all duration-300 cursor-pointer ${isCurrent
                      ? `${theme.tabActive} scale-105`
                      : 'bg-[#0b1222]/80 text-slate-300 hover:text-white hover:bg-[#131d34] border border-white/10'
                    }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center font-mono text-[10px] font-black ${isCurrent ? 'bg-black/30 text-white' : 'bg-white/10 text-slate-300'
                    }`}>
                    {stage.step}
                  </span>
                  <span className="tracking-tight">{stage.title}</span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Auto-play Progress Bar */}
          {isAutoPlay && (
            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-1">
              <div
                className={`h-full bg-gradient-to-r ${currentTheme.gradient} transition-all duration-75`}
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
        </div>

        {/* Stage Content Showcase Box */}
        <div className={`relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#090f20]/90 rounded-3xl border ${currentTheme.cardBorder} p-6 sm:p-10 shadow-2xl backdrop-blur-2xl transition-all duration-500 overflow-hidden`}>

          {/* Top glowing accent line */}
          <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${currentTheme.gradient} opacity-90`} />

          {/* Large decorative watermark number */}
          <span className={`absolute -bottom-10 -left-6 text-9xl sm:text-[160px] font-black font-heading ${currentTheme.watermark} select-none pointer-events-none transition-colors duration-500`}>
            0{currentStage.step}
          </span>

          {/* Left Column: Details & Step Info */}
          <div className="lg:col-span-6 space-y-5 relative z-10">
            <div className="flex items-center gap-3">
              <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${currentTheme.badge}`}>
                Stage 0{currentStage.step} of 08
              </span>
              <span className="text-xs text-slate-400 font-mono tracking-wider uppercase">
                &bull; {currentStage.badge}
              </span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
                {currentStage.title}
              </h3>
              <div className={`text-xs font-semibold uppercase tracking-wider font-mono mt-1.5 text-slate-300`}>
                {currentStage.subtitle}
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              {currentStage.description}
            </p>

            {/* Deliverable pills */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                Phase Deliverables:
              </span>
              <div className="flex flex-wrap gap-2">
                {currentStage.elements.map((el, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 rounded-xl text-xs font-medium border flex items-center gap-1.5 ${currentTheme.chip}`}
                  >
                    <CheckIcon className="w-3 h-3 stroke-[2.5]" />
                    <span>{el}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Step navigation controls */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  setActiveStep((prev) => (prev > 1 ? prev - 1 : 8));
                  setIsAutoPlay(false);
                }}
                className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-300 transition-colors cursor-pointer"
              >
                &larr; Prev
              </button>

              <button
                onClick={() => {
                  setActiveStep((prev) => (prev < 8 ? prev + 1 : 1));
                  setIsAutoPlay(false);
                }}
                className={`px-5 py-2.5 rounded-xl text-white text-xs font-bold flex items-center gap-1.5 shadow-lg transition-transform cursor-pointer hover:scale-105 ${currentTheme.btnAction}`}
              >
                <span>Next Stage</span>
                <ChevronRightIcon className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className="ml-auto text-xs text-slate-400 hover:text-white font-mono bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 transition-colors cursor-pointer"
              >
                {isAutoPlay ? '⏸ Pause Auto-run' : '▶ Play Auto-run'}
              </button>
            </div>
          </div>

          {/* Right Column: 3D Visual Simulator Box */}
          <div className={`lg:col-span-6 flex items-center justify-center min-h-[340px] sm:min-h-[400px] bg-[#050814]/90 rounded-3xl border border-white/10 relative overflow-hidden shadow-inner p-4`}>
            {/* Ambient inner gradient mesh */}
            <div
              className="absolute inset-0 opacity-30 pointer-events-none transition-all duration-700"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${currentTheme.glowColor} 0%, transparent 70%)`
              }}
            />
            {renderVisualContent()}
          </div>

        </div>

      </div>
    </section>
  );
}

