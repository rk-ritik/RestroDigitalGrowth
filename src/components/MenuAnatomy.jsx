import React, { useState } from 'react';
import {
  CameraIcon,
  TagIcon,
  SparklesIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  CheckIcon,
  ZapIcon,
  ShieldCheckIcon,
  UtensilsIcon
} from '../utils/icons';

export default function MenuAnatomy() {
  const [highlightPart, setHighlightPart] = useState('all');

  const parts = [
    {
      id: 'image',
      num: '01',
      label: 'Food Image',
      role: 'Appetite Catalyst',
      desc: 'Shot at 4:3 studio ratio with appetizing specular lighting and steam visibility.',
      icon: CameraIcon,
      accentColor: 'amber',
      activeBorder: 'border-amber-500 shadow-amber-500/25 bg-amber-950/20',
      activeGlow: 'rgba(245, 158, 11, 0.25)',
      badgeBg: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
      iconBox: 'bg-amber-500/20 text-amber-400 border-amber-500/40',
      textAccent: 'text-amber-400'
    },
    {
      id: 'name',
      num: '02',
      label: 'Item Name & Dietary',
      role: 'Instant Recognition',
      desc: 'Clear, standardized title with green/red FSSAI dietary indicator and bestseller tag.',
      icon: ShieldCheckIcon,
      accentColor: 'emerald',
      activeBorder: 'border-emerald-500 shadow-emerald-500/25 bg-emerald-950/20',
      activeGlow: 'rgba(16, 185, 129, 0.25)',
      badgeBg: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
      iconBox: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40',
      textAccent: 'text-emerald-400'
    },
    {
      id: 'price',
      num: '03',
      label: 'Transparent Pricing',
      role: 'Frictionless Checkout',
      desc: 'Formatted typography eliminating decimal clutter, with clear half/full portion options.',
      icon: TagIcon,
      accentColor: 'cyan',
      activeBorder: 'border-cyan-500 shadow-cyan-500/25 bg-cyan-950/20',
      activeGlow: 'rgba(6, 182, 212, 0.25)',
      badgeBg: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
      iconBox: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/40',
      textAccent: 'text-cyan-400'
    },
    {
      id: 'desc',
      num: '04',
      label: 'Sensory Description',
      role: 'Emotional Hook',
      desc: 'Evocative copy detailing aroma, preparation style, texture, and regional spices.',
      icon: SparklesIcon,
      accentColor: 'rose',
      activeBorder: 'border-rose-500 shadow-rose-500/25 bg-rose-950/20',
      activeGlow: 'rgba(244, 63, 94, 0.25)',
      badgeBg: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
      iconBox: 'bg-rose-500/20 text-rose-400 border-rose-500/40',
      textAccent: 'text-rose-400'
    },
    {
      id: 'addons',
      num: '05',
      label: 'High-Margin Add-ons',
      role: 'Ticket Multiplier',
      desc: 'Relevant modifier groups that increase order value with one tap (+₹50 Extra Paneer, etc).',
      icon: ZapIcon,
      accentColor: 'purple',
      activeBorder: 'border-purple-500 shadow-purple-500/25 bg-purple-950/20',
      activeGlow: 'rgba(168, 85, 247, 0.25)',
      badgeBg: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
      iconBox: 'bg-purple-500/20 text-purple-400 border-purple-500/40',
      textAccent: 'text-purple-400'
    }
  ];

  // Active glow color for the simulated card
  const getActiveGlow = () => {
    if (highlightPart === 'all') return 'rgba(249, 115, 22, 0.25)';
    const found = parts.find((p) => p.id === highlightPart);
    return found ? found.activeGlow : 'rgba(249, 115, 22, 0.25)';
  };

  return (
    <section id="menu-anatomy" className="relative py-24 bg-[#050711] border-t border-white/8 overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/3 right-10 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none -z-10 transition-all duration-700 opacity-40"
        style={{ background: getActiveGlow() }}
      />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-orange-500/15 to-amber-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-semibold uppercase tracking-wider shadow-sm">
            <SparklesIcon className="w-3.5 h-3.5 text-amber-400" />
            <span>Menu Architecture Standard</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
            Anatomy of a <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">High-Converting Dish</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            Click each component to explore how our 5-pillar structure turns casual hungry browsers into confirmed restaurant orders.
          </p>
        </div>

        {/* Interactive Breakdown Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Left: 5 Pillar Selector Cards */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-400" />
                5 Critical Elements
              </span>

              <button
                onClick={() => setHighlightPart('all')}
                className={`text-xs px-3.5 py-1.5 rounded-xl font-bold transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${highlightPart === 'all'
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30 scale-105'
                    : 'text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10'
                  }`}
              >
                <SparklesIcon className="w-3 h-3" />
                <span>Highlight All</span>
              </button>
            </div>

            {parts.map((part) => {
              const isSelected = highlightPart === part.id;
              const IconComp = part.icon;

              return (
                <div
                  key={part.id}
                  onClick={() => setHighlightPart(part.id)}
                  className={`group p-4 rounded-2xl cursor-pointer border transition-all duration-300 relative overflow-hidden backdrop-blur-xl ${isSelected
                      ? `${part.activeBorder} shadow-xl scale-[1.02]`
                      : 'bg-[#0b1222]/80 border-white/8 hover:border-white/20 hover:bg-[#101930]'
                    }`}
                >
                  <div className="flex items-start gap-3.5">
                    {/* Icon container */}
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 transition-all ${isSelected ? part.iconBox : 'bg-white/5 border-white/10 text-slate-400 group-hover:text-white'
                      }`}>
                      <IconComp className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className={`font-bold text-sm sm:text-base font-heading tracking-tight ${isSelected ? 'text-white' : 'text-slate-200 group-hover:text-white'
                          }`}>
                          {part.num}. {part.label}
                        </span>

                        <span className={`text-[10px] font-mono uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full border ${isSelected ? part.badgeBg : 'bg-white/5 text-slate-400 border-white/10'
                          }`}>
                          {part.role}
                        </span>
                      </div>

                      <p className="text-xs text-slate-300/80 leading-relaxed font-normal">
                        {part.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Exploded Simulated Menu Card with highlighted segments */}
          <div className="lg:col-span-7">
            <div className="relative bg-[#090f20]/95 rounded-3xl border-2 border-white/15 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl overflow-hidden">

              {/* Dynamic top glowing accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-400 via-emerald-400 to-purple-400 opacity-90"
              />

              {/* Part 1: Food Image with Camera HUD */}
              <div
                className={`relative rounded-2xl overflow-hidden mb-5 transition-all duration-500 border-2 ${highlightPart === 'image' || highlightPart === 'all'
                    ? 'border-amber-400 shadow-2xl shadow-amber-500/30 scale-[1.01]'
                    : 'border-white/10 opacity-60'
                  }`}
              >
                <img
                  src="Paneer Tikka Charcoal.jpg"
                  alt="Paneer Tikka Charcoal"
                  className="w-full h-60 sm:h-64 object-cover"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=1000&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                {/* Camera HUD Overlays */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono text-amber-300 font-bold border border-amber-500/30 flex items-center gap-1.5">
                    <CameraIcon className="w-3 h-3 text-amber-400" />
                    <span>01: 4:3 STUDIO RATIO</span>
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="bg-emerald-500/90 text-slate-950 px-2.5 py-1 rounded-full text-[10px] font-mono font-black uppercase shadow-md">
                    Spec-Compliant
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-semibold block">
                      Visual Specular Highlights
                    </span>
                    <span className="text-sm font-bold text-white">
                      Charcoal Charring &bull; Fresh Coriander Garnish
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-300 bg-black/60 px-2 py-0.5 rounded backdrop-blur font-mono">
                    High Res
                  </span>
                </div>
              </div>

              {/* Part 2 & 3: Name & Price */}
              <div
                className={`p-4 rounded-2xl mb-4 transition-all duration-500 border-2 ${highlightPart === 'name' || highlightPart === 'price' || highlightPart === 'all'
                    ? 'border-emerald-400 bg-[#0c182a]/90 shadow-xl shadow-emerald-500/20'
                    : 'border-white/8 bg-white/[0.02] opacity-60'
                  }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  {/* Item Name & Dietary Indicator */}
                  <div className="flex items-center gap-3">
                    {/* FSSAI Veg Indicator Badge */}
                    <div className="w-5 h-5 rounded-md border-2 border-emerald-500 flex items-center justify-center p-0.5 bg-emerald-950/40 shrink-0 shadow-sm">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-xl sm:text-2xl font-black text-white font-heading tracking-tight">
                          Paneer Tikka Charcoal
                        </h4>
                        <span className="text-[10px] bg-gradient-to-r from-orange-500 to-amber-500 text-white px-2 py-0.5 rounded-full font-mono font-extrabold shadow-sm">
                          BESTSELLER
                        </span>
                      </div>
                      <span className="text-[11px] text-emerald-400 font-mono font-medium block mt-0.5">
                        Element 02: Verified Veg &bull; Instant Category Anchor
                      </span>
                    </div>
                  </div>

                  {/* Pricing Architecture */}
                  <div className="text-right sm:pl-4 sm:border-l sm:border-white/10">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-semibold block">
                      Element 03: Net Rate
                    </span>
                    <div className="text-2xl sm:text-3xl font-black text-cyan-300 font-mono leading-tight">
                      ₹220
                    </div>
                    <span className="text-[10px] text-slate-300 font-medium">Regular (300g)</span>
                  </div>
                </div>
              </div>

              {/* Part 4: Sensory Description */}
              <div
                className={`p-4 rounded-2xl mb-4 transition-all duration-500 border-2 ${highlightPart === 'desc' || highlightPart === 'all'
                    ? 'border-rose-400 bg-[#160e1e]/90 shadow-xl shadow-rose-500/20'
                    : 'border-white/8 bg-white/[0.02] opacity-60'
                  }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-rose-400 font-bold flex items-center gap-1.5">
                    <SparklesIcon className="w-3.5 h-3.5" />
                    Element 04: Sensory Appetite Copywriting
                  </span>
                  <span className="text-[10px] text-rose-300 font-mono bg-rose-950/40 px-2 py-0.5 rounded border border-rose-500/30">
                    Aroma &bull; Texture
                  </span>
                </div>

                <p className="text-xs sm:text-[13px] text-slate-200 leading-relaxed font-normal">
                  Soft malai paneer cubes marinated for 8 hours in Kashmiri chili, hung curd and hand-pounded garam masala, grilled slowly over open charcoal with charred bell peppers and pickled baby onions.
                </p>
              </div>

              {/* Part 5: Add-ons */}
              <div
                className={`p-4 rounded-2xl transition-all duration-500 border-2 ${highlightPart === 'addons' || highlightPart === 'all'
                    ? 'border-purple-400 bg-[#150f29]/90 shadow-2xl shadow-purple-500/25'
                    : 'border-white/8 bg-white/[0.02] opacity-60'
                  }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5 text-purple-300 font-bold text-xs font-mono uppercase tracking-wider">
                    <ZapIcon className="w-3.5 h-3.5 text-purple-400" />
                    <span>Element 05: High-Margin Add-on Modifiers</span>
                  </div>

                  <span className="text-[11px] font-mono font-bold text-emerald-300 bg-emerald-950/50 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                    +₹110 Potential Basket Boost
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                  <div className="p-2.5 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-between hover:bg-purple-500/20 transition-colors">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-purple-500 flex items-center justify-center text-white">
                        <CheckIcon className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-slate-200 font-medium">Extra Paneer (4 pcs)</span>
                    </div>
                    <span className="text-purple-300 font-mono font-black">+₹50</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-between hover:bg-purple-500/20 transition-colors">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-purple-500 flex items-center justify-center text-white">
                        <CheckIcon className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-slate-200 font-medium">Amul Butter Dollop</span>
                    </div>
                    <span className="text-purple-300 font-mono font-black">+₹20</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-between hover:bg-purple-500/20 transition-colors">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-purple-500 flex items-center justify-center text-white">
                        <CheckIcon className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-slate-200 font-medium">Melting Cheese</span>
                    </div>
                    <span className="text-purple-300 font-mono font-black">+₹40</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

