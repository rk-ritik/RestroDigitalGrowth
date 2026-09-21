import React, { useState, useEffect } from 'react';
import {
  UtensilsIcon,
  ShieldCheckIcon,
  MenuBookIcon,
  CameraIcon,
  TagIcon,
  SparklesIcon,
  ZapIcon,
  StoreIcon,
  ArrowRightIcon
} from '../utils/icons';

export default function Hero({ onOpenContact }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeNode, setActiveNode] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize between -1 and 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const ecosystemNodes = [
    {
      id: 'fssai',
      label: 'FSSAI Guidance',
      badge: 'Compliance',
      icon: <ShieldCheckIcon className="w-4 h-4 text-emerald-400" />,
      color: 'border-emerald-500/30 bg-emerald-950/40 text-emerald-300',
      glow: 'shadow-emerald-500/20',
      posClass: '-top-6 left-1/2 -translate-x-1/2',
      depth: 35,
      detail: 'Registration support & hygiene compliance check'
    },
    {
      id: 'menu',
      label: 'Structured Menu',
      badge: 'Catalog',
      icon: <MenuBookIcon className="w-4 h-4 text-orange-400" />,
      color: 'border-orange-500/30 bg-orange-950/40 text-orange-300',
      glow: 'shadow-orange-500/20',
      posClass: 'top-10 -right-8 md:-right-12',
      depth: 45,
      detail: 'Categorized sections, appetizing descriptions'
    },
    {
      id: 'food_images',
      label: 'Food Visuals',
      badge: 'Appetite',
      icon: <CameraIcon className="w-4 h-4 text-amber-400" />,
      color: 'border-amber-500/30 bg-amber-950/40 text-amber-300',
      glow: 'shadow-amber-500/20',
      posClass: 'top-12 -left-8 md:-left-12',
      depth: 40,
      detail: 'High-res dish styling formatted to platform ratios'
    },
    {
      id: 'pricing',
      label: 'Portion & Pricing',
      badge: 'Revenue',
      icon: <TagIcon className="w-4 h-4 text-sky-400" />,
      color: 'border-sky-500/30 bg-sky-950/40 text-sky-300',
      glow: 'shadow-sky-500/20',
      posClass: 'bottom-20 -left-3 md:-left-15',
      depth: 30,
      detail: 'Half / full portions & packaging cost clarity'
    },
    {
      id: 'addons',
      label: 'Smart Add-ons',
      badge: 'Basket Size',
      icon: <SparklesIcon className="w-4 h-4 text-purple-400" />,
      color: 'border-purple-500/30 bg-purple-950/40 text-purple-300',
      glow: 'shadow-purple-500/20',
      posClass: 'bottom-20 -right-3 md:-right-18',
      depth: 38,
      detail: 'Extra butter (+₹20), paneer (+₹50), cheese (+₹40)'
    },
    {
      id: 'platforms',
      label: 'Zomato & Swiggy',
      badge: 'Platforms',
      icon: <ZapIcon className="w-4 h-4 text-rose-400" />,
      color: 'border-rose-500/30 bg-rose-950/40 text-rose-300',
      glow: 'shadow-rose-500/20',
      posClass: '-bottom-6 left-1/2 -translate-x-1/2',
      depth: 42,
      detail: 'Real-time item, price & modifier catalog synchronization'
    }
  ];

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-30 pb-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[450px] bg-gradient-to-b from-orange-600/12 via-amber-700/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-blue-950/20 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Headlines and Value Proposition */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left z-10">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-300 text-xs font-medium tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
              <span>Restaurant Digital Partner &bull; From Menu to Marketplace</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white font-heading leading-[1.08]">
                Your Restaurant.
              </h1>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight font-heading leading-[1.08] gradient-text-warm">
                Digitally Ready for Growth.
              </h2>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              We help restaurants manage the digital work behind their online presence — from <span className="text-white font-medium">FSSAI assistance</span> and platform onboarding to <span className="text-white font-medium">menu creation</span>, <span className="text-white font-medium">food images</span>, pricing, descriptions, add-ons and <span className="text-white font-medium">Zomato & Swiggy</span> menu updates.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => {
                  if (onOpenContact) onOpenContact();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRightIcon className="w-4 h-4" />
              </button>

              <a
                href="#work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]"
              >
                <span>View Our Work</span>
              </a>
            </div>

            {/* Micro proof points */}
            <div className="pt-6 border-t border-white/8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Zero Technical Hassle</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                <span>Tailored Restaurant Focus</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Real-Time Menu Sync</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Digital Restaurant Ecosystem */}
          <div className="lg:col-span-6 flex items-center justify-center relative perspective-container mt-6 lg:mt-0">

            {/* 3D Stage with Tilt */}
            <div
              className="relative w-[340px] sm:w-[420px] md:w-[480px] h-[420px] sm:h-[480px] flex items-center justify-center transition-transform duration-200 ease-out preserve-3d"
              style={{
                transform: `rotateY(${mousePos.x * 12}deg) rotateX(${-mousePos.y * 12}deg)`
              }}
            >
              {/* Concentric orbital rings */}
              <div className="absolute inset-0 rounded-full border border-orange-500/15 animate-spin duration-[40s] pointer-events-none" />
              <div className="absolute inset-8 rounded-full border border-white/5 pointer-events-none" />
              <div className="absolute inset-20 rounded-full border border-orange-500/10 border-dashed pointer-events-none animate-spin duration-[60s]" />

              {/* Connecting laser lines to satellite nodes */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 480 480">
                <line x1="240" y1="240" x2="240" y2="40" stroke="rgba(249, 115, 22, 0.25)" strokeDasharray="4 4" />
                <line x1="240" y1="240" x2="410" y2="150" stroke="rgba(249, 115, 22, 0.25)" strokeDasharray="4 4" />
                <line x1="240" y1="240" x2="70" y2="150" stroke="rgba(249, 115, 22, 0.25)" strokeDasharray="4 4" />
                <line x1="240" y1="240" x2="90" y2="350" stroke="rgba(249, 115, 22, 0.25)" strokeDasharray="4 4" />
                <line x1="240" y1="240" x2="390" y2="350" stroke="rgba(249, 115, 22, 0.25)" strokeDasharray="4 4" />
                <line x1="240" y1="240" x2="240" y2="440" stroke="rgba(249, 115, 22, 0.25)" strokeDasharray="4 4" />
              </svg>

              {/* Central 3D Restaurant Core Node */}
              <div
                onClick={() => {
                  if (onOpenContact) onOpenContact();
                }}
                className="relative z-20 w-44 sm:w-52 h-44 sm:h-52 rounded-2xl bg-gradient-to-br from-[#12192e] to-[#090e1c] border-2 border-orange-500/40 p-5 shadow-2xl shadow-orange-500/20 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-orange-400 group cursor-pointer"
                style={{
                  transform: `translateZ(50px)`
                }}
              >
                {/* Kitchen / Facade ambient glow inside */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/15 via-transparent to-transparent rounded-2xl" />

                <div className="w-14 h-14 rounded-2xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400 mb-2 shadow-inner group-hover:scale-110 transition-transform">
                  <StoreIcon className="w-7 h-7" />
                </div>

                <div className="text-[10px] tracking-widest uppercase text-orange-400 font-mono font-semibold">
                  CORE HUB
                </div>
                <div className="font-heading font-extrabold text-white text-base sm:text-lg leading-tight mt-0.5">
                  YOUR RESTAURANT
                </div>

                <div className="mt-2 text-[11px] text-emerald-400 font-medium flex items-center gap-1.5 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Growth Engine</span>
                </div>
              </div>

              {/* Floating Satellite Nodes */}
              {ecosystemNodes.map((node) => (
                <div
                  key={node.id}
                  onMouseEnter={() => setActiveNode(node.id)}
                  onMouseLeave={() => setActiveNode(null)}
                  onClick={() => {
                    if (onOpenContact) onOpenContact();
                  }}
                  className={`absolute ${node.posClass} z-30 transition-all duration-300 cursor-pointer`}
                  style={{
                    transform: `translateZ(${node.depth}px)`
                  }}
                >
                  <div
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-xl backdrop-blur-md border ${node.color} shadow-lg ${node.glow} hover:scale-110 transition-all duration-200`}
                  >
                    <div className="p-1 rounded-lg bg-black/40">
                      {node.icon}
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[11px] font-bold tracking-tight text-white whitespace-nowrap">
                        {node.label}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider text-slate-400 font-mono">
                        {node.badge}
                      </span>
                    </div>
                  </div>

                  {/* Micro Tooltip on hover */}
                  {activeNode === node.id && (
                    <div className="absolute left-1/2 -translate-x-1/2 -top-12 z-40 bg-[#0c101d] border border-orange-500/40 text-slate-200 text-[11px] py-1 px-3 rounded-lg whitespace-nowrap shadow-xl shadow-black/80 pointer-events-none animate-in fade-in zoom-in-95">
                      {node.detail}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
