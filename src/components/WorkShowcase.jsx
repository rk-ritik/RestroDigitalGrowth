import React, { useState, useEffect } from 'react';
import { portfolioProjects, portfolioCategories } from '../data/portfolioData';
import {
  ArrowUpRightIcon,
  SparklesIcon,
  EyeIcon,
  CheckCircleIcon,
  TrendingUpIcon,
  UtensilsIcon,
  WhatsAppIcon,
  CloseIcon
} from '../utils/icons';
import { AGENCY_CONFIG } from './Contact';

// Theme styling for clean, compact badges and subtle professional borders
const colorThemes = {
  amber: {
    badge: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    glowBorder: "hover:border-amber-400/40",
    metricText: "text-amber-400",
    accentBg: "bg-amber-500/10 border-amber-500/20"
  },
  rose: {
    badge: "bg-rose-500/20 text-rose-300 border-rose-500/30",
    glowBorder: "hover:border-rose-400/40",
    metricText: "text-rose-400",
    accentBg: "bg-rose-500/10 border-rose-500/20"
  },
  red: {
    badge: "bg-red-500/20 text-red-300 border-red-500/30",
    glowBorder: "hover:border-red-400/40",
    metricText: "text-red-400",
    accentBg: "bg-red-500/10 border-red-500/20"
  },
  orange: {
    badge: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    glowBorder: "hover:border-orange-400/40",
    metricText: "text-orange-400",
    accentBg: "bg-orange-500/10 border-orange-500/20"
  },
  emerald: {
    badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    glowBorder: "hover:border-emerald-400/40",
    metricText: "text-emerald-400",
    accentBg: "bg-emerald-500/10 border-emerald-500/20"
  },
  purple: {
    badge: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    glowBorder: "hover:border-purple-400/40",
    metricText: "text-purple-400",
    accentBg: "bg-purple-500/10 border-purple-500/20"
  }
};

export default function WorkShowcase({ onOpenContact }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveModalProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredProjects =
    selectedCategory === 'All'
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="relative py-20 bg-[#060a17] border-t border-white/10 overflow-hidden">

      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[250px] bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-rose-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-semibold uppercase tracking-wider">
            <SparklesIcon className="w-3.5 h-3.5 text-orange-400" />
            <span>Proven Transformations</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-heading tracking-tight">
            Our Work &amp; <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">Real Restaurant Results</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 font-light max-w-lg mx-auto">
            Clean digital menus, mouthwatering dish photos, and optimized online listings that help restaurants get more orders and happy guests.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap mb-10">
          {portfolioCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${isSelected
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-500/25 font-semibold'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
                  }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-black/30 text-white' : 'bg-white/10 text-slate-400'}`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Compact Professional Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project) => {
            const theme = colorThemes[project.accentColor] || colorThemes.orange;

            return (
              <div
                key={project.id}
                className={`portfolio-card group bg-[#090e1f] rounded-xl border border-white/10 overflow-hidden ${theme.glowBorder} hover:shadow-xl hover:shadow-black/50 transition-all duration-300 flex flex-col justify-between`}
              >
                {/* Compact Image Container with Non-overlapping Badge Header */}
                <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />

                  {/* Subtle Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090e1f] via-transparent to-black/50 opacity-90" />

                  {/* Clean Non-Overlapping Top Bar */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-2 z-10">
                    <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border shadow-sm ${theme.badge}`}>
                      {project.badge}
                    </span>

                    <span className="px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md border border-white/15 text-[10px] text-slate-300 font-medium truncate max-w-[130px]">
                      {project.client}
                    </span>
                  </div>

                  {/* Quick View Button */}
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-black/70 hover:bg-orange-500 backdrop-blur-md border border-white/20 hover:border-orange-400 text-white text-[11px] font-medium flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-all cursor-pointer shadow-md"
                    aria-label={`Preview ${project.title}`}
                  >
                    <EyeIcon className="w-3 h-3" />
                    <span>Details</span>
                  </button>
                </div>

                {/* Compact Card Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    {/* Project Title */}
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-orange-300 transition-colors line-clamp-1">
                      {project.title}
                    </h3>

                    {/* Simple 2-Line Description */}
                    <p className="text-xs text-slate-300 leading-relaxed font-light line-clamp-2">
                      {project.simpleDescription}
                    </p>

                    {/* Compact Highlight Strip */}
                    <div className="mt-3 p-2.5 rounded-lg bg-white/[0.03] border border-white/6 space-y-1">
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span className="font-medium text-slate-400">Owner:</span>
                        <span className="truncate text-slate-200">{project.ownerBenefit}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                        <span className="font-medium text-slate-400">Guests:</span>
                        <span className="truncate text-slate-200">{project.customerBenefit}</span>
                      </div>
                    </div>

                    {/* Mini Tags */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-white/[0.04] text-[10px] text-slate-400 font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Compact Bottom Metric & Action */}
                  <div className="mt-4 pt-3 border-t border-white/8 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <TrendingUpIcon className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="text-xs font-semibold text-emerald-400 truncate">
                        {project.resultMetric}
                      </span>
                    </div>

                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-orange-400 hover:text-orange-300 shrink-0 cursor-pointer"
                    >
                      <span>View Case</span>
                      <ArrowUpRightIcon className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact Bottom Quick CTA */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-[#090e1f] border border-orange-500/25 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm sm:text-base font-bold text-white">
              Want a clean, profitable menu setup for your restaurant?
            </h4>
            <p className="text-xs text-slate-400">
              We design digital QR menus, take HD dish photos, and sync Zomato &amp; Swiggy in 2-4 days.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="https://wa.me/?text=Hi%20Restro%20Digital%20Growth,%20I%20want%20to%20upgrade%20my%20restaurant%20menu%20and%20online%20sales."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <button
              onClick={() => {
                if (onOpenContact) onOpenContact();
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              <span>Get Free Review</span>
              <ArrowUpRightIcon className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Clean Interactive Modal Preview */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm overflow-y-auto"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="relative w-full max-w-2xl my-auto rounded-2xl bg-[#090e1f] border border-orange-500/40 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-3 right-3 z-20 p-1.5 text-white bg-black/70 hover:bg-red-600 rounded-full transition-colors border border-white/20 cursor-pointer"
              aria-label="Close modal"
            >
              <CloseIcon className="w-4 h-4" />
            </button>

            {/* Modal Image Header */}
            <div className="h-56 sm:h-64 overflow-hidden relative bg-slate-950">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090e1f] via-black/30 to-black/40" />

              <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded bg-orange-500 text-white text-[10px] font-bold uppercase tracking-wider mb-1.5 shadow">
                  {activeModalProject.badge}
                </span>
                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white font-heading">
                  {activeModalProject.title}
                </h3>
                <p className="text-xs text-amber-300 font-medium mt-0.5">
                  {activeModalProject.client} &bull; {activeModalProject.tagline}
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 space-y-4">

              {/* 3 Metric Scorecards */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {activeModalProject.stats?.map((stat, i) => (
                  <div key={i} className="p-2.5 sm:p-3 rounded-xl bg-white/[0.03] border border-white/8 text-center">
                    <div className="text-base sm:text-lg font-extrabold text-amber-400 font-heading">
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-slate-400 truncate">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* What We Did */}
              <div className="space-y-1">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  What We Did
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  {activeModalProject.simpleDescription}
                </p>
              </div>

              {/* Dual Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-300">
                    <CheckCircleIcon className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Restaurant Owner Benefit</span>
                  </div>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {activeModalProject.ownerBenefit}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
                    <UtensilsIcon className="w-3.5 h-3.5 text-amber-400" />
                    <span>Customer Experience</span>
                  </div>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {activeModalProject.customerBenefit}
                  </p>
                </div>
              </div>

              {/* Verified Result Banner */}
              <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-start gap-2.5">
                <TrendingUpIcon className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300">
                  <span className="font-bold text-orange-300 mr-1">Verified Result:</span>
                  {activeModalProject.resultDetail}
                </div>
              </div>

              {/* Tags & Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10">
                <div className="flex flex-wrap gap-1">
                  {activeModalProject.tags.map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300 text-[10px]">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href={`https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hi Restro Digital Growth, I want a setup like ${activeModalProject.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setActiveModalProject(null);
                      if (onOpenContact) onOpenContact();
                    }}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center px-3.5 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    Get This Setup
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
