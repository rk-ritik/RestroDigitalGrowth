import React, { useState } from 'react';
import {
  MenuBookIcon,
  SparklesIcon,
  TagIcon,
  CameraIcon,
  RefreshCwIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  CheckIcon,
  ZapIcon,
  ShieldCheckIcon,
  LayersIcon,
  TrendingUpIcon,
  EyeIcon,
  UtensilsIcon
} from '../utils/icons';

export default function DeliveryPlatforms() {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'zomato' | 'swiggy'

  const platformFeatures = [
    {
      name: "Digital Menu Setup",
      desc: "Structured cataloging & dietary taxonomy",
      icon: MenuBookIcon,
      color: "from-blue-500 to-indigo-500",
      textColor: "text-blue-400",
      borderColor: "border-blue-500/30",
      bgColor: "bg-blue-500/10"
    },
    {
      name: "Food Visuals Sync",
      desc: "High-definition appetizing dish covers",
      icon: CameraIcon,
      color: "from-amber-500 to-orange-500",
      textColor: "text-amber-400",
      borderColor: "border-amber-500/30",
      bgColor: "bg-amber-500/10"
    },
    {
      name: "Price & Tax Alignment",
      desc: "Uniform pricing & packaging markup clarity",
      icon: TagIcon,
      color: "from-emerald-500 to-teal-500",
      textColor: "text-emerald-400",
      borderColor: "border-emerald-500/30",
      bgColor: "bg-emerald-500/10"
    },
    {
      name: "Sensory Descriptions",
      desc: "Engaging copy detailing ingredients & flavors",
      icon: SparklesIcon,
      color: "from-rose-500 to-pink-500",
      textColor: "text-rose-400",
      borderColor: "border-rose-500/30",
      bgColor: "bg-rose-500/10"
    },
    {
      name: "Category Taxonomy",
      desc: "Intuitive sections preventing customer drop-off",
      icon: LayersIcon,
      color: "from-purple-500 to-violet-500",
      textColor: "text-purple-400",
      borderColor: "border-purple-500/30",
      bgColor: "bg-purple-500/10"
    },
    {
      name: "Add-on Modifiers",
      desc: "Configuring portion sizes & high-margin combos",
      icon: ZapIcon,
      color: "from-cyan-500 to-sky-500",
      textColor: "text-cyan-400",
      borderColor: "border-cyan-500/30",
      bgColor: "bg-cyan-500/10"
    }
  ];

  const pipelineStages = [
    {
      num: "01",
      title: "Raw Menu Ingestion",
      tag: "Intake & Audit",
      note: "Physical cards, photos & handwritten recipes digitized",
      color: "from-amber-400 to-orange-500",
      borderColor: "border-amber-500/40",
      glowColor: "rgba(245, 158, 11, 0.2)",
      numColor: "text-amber-400",
      badgeBg: "bg-amber-950/60 text-amber-300"
    },
    {
      num: "02",
      title: "Digital Preparation",
      tag: "AI & Chef Review",
      note: "Taxonomy, photo grading & sensory copywriting",
      color: "from-cyan-400 to-blue-500",
      borderColor: "border-cyan-500/40",
      glowColor: "rgba(6, 182, 212, 0.2)",
      numColor: "text-cyan-400",
      badgeBg: "bg-cyan-950/60 text-cyan-300"
    },
    {
      num: "03",
      title: "Platform Standardization",
      tag: "Compliance Check",
      note: "Aspect ratios, FSSAI indicators & modifier rules",
      color: "from-purple-400 to-violet-500",
      borderColor: "border-purple-500/40",
      glowColor: "rgba(168, 85, 247, 0.2)",
      numColor: "text-purple-400",
      badgeBg: "bg-purple-950/60 text-purple-300"
    },
    {
      num: "04",
      title: "Zomato & Swiggy Sync",
      tag: "Live on Apps",
      note: "Live synchronized listings ready for hungry diners",
      color: "from-emerald-400 to-teal-400",
      borderColor: "border-emerald-500/40",
      glowColor: "rgba(16, 185, 129, 0.2)",
      numColor: "text-emerald-400",
      badgeBg: "bg-emerald-950/60 text-emerald-300"
    }
  ];

  const kpis = [
    {
      label: "Sync SLA Time",
      value: "⚡ Real-time",
      sub: "Instant menu revisions",
      color: "from-amber-500/20 to-orange-500/5",
      border: "border-amber-500/30",
      text: "text-amber-400"
    },
    {
      label: "Conversion Uplift",
      value: "📈 +35%",
      sub: "Optimized item views",
      color: "from-emerald-500/20 to-teal-500/5",
      border: "border-emerald-500/30",
      text: "text-emerald-400"
    },
    {
      label: "Taxonomy Accuracy",
      value: "🎯 100%",
      sub: "Zero platform rejections",
      color: "from-cyan-500/20 to-blue-500/5",
      border: "border-cyan-500/30",
      text: "text-cyan-400"
    },
    {
      label: "Visual Compliance",
      value: "🛡️ Ultra-HD",
      sub: "Platform guidelines certified",
      color: "from-purple-500/20 to-pink-500/5",
      border: "border-purple-500/30",
      text: "text-purple-400"
    }
  ];

  return (
    <section id="platforms" className="relative py-14 sm:py-16 bg-[#040711] border-t border-white/8 overflow-hidden">
      {/* Dynamic ambient colored light halos */}
      <div className="absolute top-1/4 -left-28 w-[450px] h-[450px] bg-red-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 -right-28 w-[450px] h-[450px] bg-orange-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/3 w-[380px] h-[380px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-orange-500/20 via-rose-500/15 to-amber-500/20 border border-orange-500/35 text-orange-300 text-xs font-mono font-semibold uppercase tracking-wider shadow-lg shadow-orange-500/10 backdrop-blur-md">
            <SparklesIcon className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>Marketplace Synchronization</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
            Your Menu. <span className="bg-gradient-to-r from-orange-400 via-amber-300 via-rose-400 to-orange-500 bg-clip-text text-transparent">Where Diners Find You.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            We format, review, and keep your restaurant catalog accurately updated across India's top food delivery channels with real-time sync.
          </p>

          {/* Quick Platform Filter Pills */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all duration-200 cursor-pointer ${activeTab === 'all'
                  ? 'bg-white/15 text-white border border-white/30 shadow-md shadow-white/5'
                  : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
                }`}
            >
              All Platforms (2)
            </button>
            <button
              onClick={() => setActiveTab('zomato')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${activeTab === 'zomato'
                  ? 'bg-red-500/25 text-red-300 border border-red-500/50 shadow-md shadow-red-500/20'
                  : 'bg-white/5 text-slate-400 hover:text-red-400 border border-white/10'
                }`}
            >
              <span className="w-2 h-2 rounded-full bg-red-500" />
              Zomato Channel
            </button>
            <button
              onClick={() => setActiveTab('swiggy')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${activeTab === 'swiggy'
                  ? 'bg-orange-500/25 text-orange-300 border border-orange-500/50 shadow-md shadow-orange-500/20'
                  : 'bg-white/5 text-slate-400 hover:text-orange-400 border border-white/10'
                }`}
            >
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              Swiggy Channel
            </button>
          </div>
        </div>

        {/* 4 KPI Metric Chips */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {kpis.map((kpi, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl bg-gradient-to-b ${kpi.color} border ${kpi.border} backdrop-blur-xl shadow-lg relative overflow-hidden group hover:scale-[1.02] transition-transform`}
            >
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-1">
                {kpi.label}
              </div>
              <div className={`text-xl sm:text-2xl font-black font-heading ${kpi.text} mb-0.5`}>
                {kpi.value}
              </div>
              <div className="text-xs text-slate-400 leading-tight">
                {kpi.sub}
              </div>
            </div>
          ))}
        </div>

        {/* 4-Stage Sync Pipeline Flow */}
        <div className="mb-12 bg-gradient-to-b from-[#0c1226]/90 to-[#070b1a]/95 rounded-3xl border border-white/15 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl relative overflow-hidden">
          {/* Top glowing multi-color line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-400 via-cyan-400 via-purple-400 to-emerald-400 opacity-90 shadow-[0_0_12px_rgba(56,189,248,0.5)]" />

          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-amber-400 animate-ping" />
              <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-slate-100 font-bold">
                The 4-Stage Digital Preparation Pipeline
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-emerald-300 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/40 flex items-center gap-1.5 font-bold shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                End-to-End Managed
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {pipelineStages.map((stage, idx) => (
              <div
                key={stage.num}
                className={`group relative flex flex-col p-5 rounded-2xl bg-[#0e1630]/90 border ${stage.borderColor} hover:border-white/40 hover:scale-[1.02] transition-all duration-300 shadow-xl overflow-hidden backdrop-blur-xl`}
              >
                {/* Corner radial glow */}
                <div
                  className="absolute -top-10 -right-10 w-28 h-28 rounded-full blur-xl opacity-30 group-hover:opacity-70 transition-opacity pointer-events-none"
                  style={{ background: stage.glowColor }}
                />

                <div className="flex items-center justify-between mb-3 relative z-10">
                  <span className={`text-xs font-mono font-black tracking-wider px-2.5 py-1 rounded-lg bg-white/5 border border-white/15 ${stage.numColor}`}>
                    STAGE {stage.num}
                  </span>
                  <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md border border-white/10 ${stage.badgeBg}`}>
                    {stage.tag}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white font-heading mb-1.5 group-hover:text-amber-200 transition-colors relative z-10">
                  {stage.title}
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed font-normal relative z-10">
                  {stage.note}
                </p>

                {/* Bottom Step Indicator Bar */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono relative z-10">
                  <span>Step {idx + 1} of 4</span>
                  {idx < 3 ? (
                    <span className="text-slate-400 flex items-center gap-1">
                      Next <ArrowRightIcon className="w-3 h-3 text-slate-400" />
                    </span>
                  ) : (
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      ✓ Synchronized
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Two Large Platform Representation Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">

          {/* Platform 1: Zomato Management Card */}
          {(activeTab === 'all' || activeTab === 'zomato') && (
            <div className="group relative rounded-3xl bg-gradient-to-b from-[#1e0a12]/95 via-[#15060d]/90 to-[#0c0512]/95 border-2 border-red-500/40 hover:border-red-500/80 p-6 sm:p-8 shadow-2xl shadow-red-500/15 hover:shadow-red-500/30 transition-all duration-300 backdrop-blur-2xl overflow-hidden flex flex-col justify-between">
              {/* Top red gradient line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-500 via-rose-400 to-red-600 opacity-95 shadow-[0_0_10px_rgba(239,68,68,0.6)]" />

              {/* Ambient corner glow */}
              <div className="absolute -top-16 -right-16 w-56 h-56 bg-red-500/20 rounded-full blur-3xl pointer-events-none group-hover:bg-red-500/30 transition-all" />

              <div>
                {/* Card Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/10 relative z-10">
                  <div className="flex items-center gap-3.5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 via-rose-600 to-red-700 border-2 border-red-400/60 flex items-center justify-center text-white font-black text-2xl font-heading shadow-xl shadow-red-500/40 group-hover:scale-105 transition-transform">
                      Z
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-red-300 font-black bg-red-950/80 px-2 py-0.5 rounded border border-red-500/40">
                          Primary Channel
                        </span>
                        <span className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono font-bold bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live Sync
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-black text-white font-heading tracking-tight mt-1">
                        Zomato Management
                      </h3>
                    </div>
                  </div>

                  <span className="px-3.5 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-200 text-xs font-mono font-bold shadow-sm">
                    Catalog Active
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-200 my-5 font-normal leading-relaxed relative z-10">
                  We format, review, and synchronize your restaurant's Zomato menu with accurate pricing, appetizing descriptions, verified FSSAI tags, and multi-tier add-on groupings.
                </p>

                {/* Capabilities Grid */}
                <div className="space-y-3 relative z-10">
                  <span className="text-xs font-mono uppercase tracking-wider text-red-300 font-bold block flex items-center gap-1.5">
                    <SparklesIcon className="w-3.5 h-3.5 text-red-400" />
                    Synchronized Capabilities:
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {platformFeatures.map((feat, idx) => {
                      const IconComp = feat.icon;
                      return (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-red-500/20 hover:border-red-500/40 text-xs transition-all duration-200 shadow-sm"
                        >
                          <div className={`w-7 h-7 rounded-lg ${feat.bgColor} border ${feat.borderColor} flex items-center justify-center shrink-0 mt-0.5 ${feat.textColor}`}>
                            <IconComp className="w-3.5 h-3.5" />
                          </div>
                          <div className="min-w-0">
                            <span className="font-bold text-white block truncate">{feat.name}</span>
                            <p className="text-[11px] text-slate-300 leading-snug line-clamp-1">{feat.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Bottom SLA / Update Frequency Bar */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs relative z-10">
                <span className="text-slate-400 font-medium flex items-center gap-1.5">
                  <RefreshCwIcon className="w-3.5 h-3.5 text-red-400 animate-spin-slow" />
                  Update SLA &amp; Support:
                </span>
                <span className="text-red-200 font-mono font-bold bg-red-950/70 px-3 py-1 rounded-lg border border-red-500/40 shadow-sm">
                  ⚡ Real-time / Same Day
                </span>
              </div>
            </div>
          )}

          {/* Platform 2: Swiggy Management Card */}
          {(activeTab === 'all' || activeTab === 'swiggy') && (
            <div className="group relative rounded-3xl bg-gradient-to-b from-[#1e1005]/95 via-[#150a03]/90 to-[#0c0512]/95 border-2 border-orange-500/40 hover:border-orange-500/80 p-6 sm:p-8 shadow-2xl shadow-orange-500/15 hover:shadow-orange-500/30 transition-all duration-300 backdrop-blur-2xl overflow-hidden flex flex-col justify-between">
              {/* Top orange gradient line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 opacity-95 shadow-[0_0_10px_rgba(249,115,22,0.6)]" />

              {/* Ambient corner glow */}
              <div className="absolute -top-16 -right-16 w-56 h-56 bg-orange-500/20 rounded-full blur-3xl pointer-events-none group-hover:bg-orange-500/30 transition-all" />

              <div>
                {/* Card Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/10 relative z-10">
                  <div className="flex items-center gap-3.5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 via-amber-600 to-orange-700 border-2 border-orange-400/60 flex items-center justify-center text-white font-black text-2xl font-heading shadow-xl shadow-orange-500/40 group-hover:scale-105 transition-transform">
                      S
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-orange-300 font-black bg-orange-950/80 px-2 py-0.5 rounded border border-orange-500/40">
                          Primary Channel
                        </span>
                        <span className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono font-bold bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live Sync
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-black text-white font-heading tracking-tight mt-1">
                        Swiggy Management
                      </h3>
                    </div>
                  </div>

                  <span className="px-3.5 py-1 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-200 text-xs font-mono font-bold shadow-sm">
                    Catalog Active
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-200 my-5 font-normal leading-relaxed relative z-10">
                  Keep your Swiggy menu pristine with correct stock status, portion options, combo meals, high-resolution food visual attachments, and prompt price updates.
                </p>

                {/* Capabilities Grid */}
                <div className="space-y-3 relative z-10">
                  <span className="text-xs font-mono uppercase tracking-wider text-orange-300 font-bold block flex items-center gap-1.5">
                    <SparklesIcon className="w-3.5 h-3.5 text-orange-400" />
                    Synchronized Capabilities:
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {platformFeatures.map((feat, idx) => {
                      const IconComp = feat.icon;
                      return (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-orange-500/20 hover:border-orange-500/40 text-xs transition-all duration-200 shadow-sm"
                        >
                          <div className={`w-7 h-7 rounded-lg ${feat.bgColor} border ${feat.borderColor} flex items-center justify-center shrink-0 mt-0.5 ${feat.textColor}`}>
                            <IconComp className="w-3.5 h-3.5" />
                          </div>
                          <div className="min-w-0">
                            <span className="font-bold text-white block truncate">{feat.name}</span>
                            <p className="text-[11px] text-slate-300 leading-snug line-clamp-1">{feat.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Bottom SLA / Update Frequency Bar */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs relative z-10">
                <span className="text-slate-400 font-medium flex items-center gap-1.5">
                  <RefreshCwIcon className="w-3.5 h-3.5 text-orange-400 animate-spin-slow" />
                  Update SLA &amp; Support:
                </span>
                <span className="text-orange-200 font-mono font-bold bg-orange-950/70 px-3 py-1 rounded-lg border border-orange-500/40 shadow-sm">
                  ⚡ Real-time / Same Day
                </span>
              </div>
            </div>
          )}

        </div>

        {/* Compliant Disclaimer Note */}
        <div className="mt-8 sm:mt-10 text-center">
          <p className="text-xs text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Note: Restro Digital Growth provides independent menu catalog management, food styling, and digital preparation services to assist restaurant owners. Platform names are referenced solely to describe operational compatibility.
          </p>
        </div>

      </div>
    </section>
  );
}
