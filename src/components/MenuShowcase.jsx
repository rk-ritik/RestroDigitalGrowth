import React, { useState } from 'react';
import { sampleMenuItems, menuCategories } from '../data/menuData';
import { SparklesIcon, TagIcon, CheckIcon, CheckCircleIcon, ZapIcon } from '../utils/icons';

export default function MenuShowcase() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedDishesAddons, setSelectedDishesAddons] = useState({});

  const filteredItems =
    activeCategory === 'All'
      ? sampleMenuItems
      : sampleMenuItems.filter((item) => item.category === activeCategory);

  const toggleAddon = (dishId, addonId) => {
    setSelectedDishesAddons((prev) => {
      const currentAddons = prev[dishId] || [];
      if (currentAddons.includes(addonId)) {
        return { ...prev, [dishId]: currentAddons.filter((id) => id !== addonId) };
      } else {
        return { ...prev, [dishId]: [...currentAddons, addonId] };
      }
    });
  };

  const calculateDishTotal = (item) => {
    const selectedIds = selectedDishesAddons[item.id] || [];
    const addonsTotal = item.availableAddons
      .filter((a) => selectedIds.includes(a.id))
      .reduce((sum, a) => sum + a.price, 0);
    return item.price + addonsTotal;
  };

  return (
    <section id="menu" className="relative py-14 sm:py-16 bg-[#05070e] border-t border-white/8 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading with compact margins */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-orange-500/15 to-amber-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-semibold uppercase tracking-wider shadow-sm">
            <SparklesIcon className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Live Menu Engine</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
            We Make Your Menu <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">Work Better</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            Experience how structured typography, clear high-definition imagery, and smart add-on modifiers transform simple dishes into high-revenue signature choices.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${activeCategory === 'All'
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30 scale-105'
                : 'bg-[#0b1222]/80 text-slate-300 hover:text-white hover:bg-[#131d34] border border-white/10'
              }`}
          >
            All Items ({sampleMenuItems.length})
          </button>
          {menuCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${activeCategory === cat
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30 scale-105'
                  : 'bg-[#0b1222]/80 text-slate-300 hover:text-white hover:bg-[#131d34] border border-white/10'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredItems.map((item) => {
            const selectedAddonIds = selectedDishesAddons[item.id] || [];
            const dishTotal = calculateDishTotal(item);
            const addonTotal = dishTotal - item.price;
            const extraCount = selectedAddonIds.length;
            const marginUplift = Math.round((addonTotal / item.price) * 100);

            return (
              <div
                key={item.id}
                className="group relative bg-[#090f20]/95 rounded-3xl border-2 border-white/10 hover:border-orange-500/50 p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-2xl backdrop-blur-2xl hover:-translate-y-1 hover:shadow-orange-500/10 overflow-hidden"
              >
                {/* Top ambient color bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 opacity-80 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Food Image with High Visibility */}
                  <div className="relative rounded-2xl overflow-hidden mb-5 h-60 sm:h-64 w-full bg-slate-950 border border-white/10 shadow-inner">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80";
                      }}
                    />

                    {/* Soft subtle contrast gradients at edges (leaves center fully bright) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                      {/* Veg indicator */}
                      <div className="w-5 h-5 rounded-md bg-emerald-950/90 border border-emerald-400 flex items-center justify-center p-0.5 shadow-md">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      </div>

                      {item.isBestseller && (
                        <span className="px-3 py-0.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[10px] font-extrabold tracking-wider uppercase shadow-lg shadow-orange-500/40">
                          Bestseller
                        </span>
                      )}
                    </div>

                    {/* Top-Right Rating Badge */}
                    <div className="absolute top-3.5 right-3.5 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono font-bold text-amber-300 flex items-center gap-1.5 border border-white/15 shadow-md">
                      <span className="text-amber-400 font-black">★ {item.rating}</span>
                      <span className="text-slate-400 text-[10px] font-normal">({item.ordersCount})</span>
                    </div>

                    {/* Bottom-Right Floating Price Badge */}
                    <div className="absolute bottom-3.5 right-3.5 bg-[#070d1d]/90 backdrop-blur-md border border-cyan-500/40 px-3.5 py-1.5 rounded-xl text-right shadow-xl">
                      <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block font-semibold">
                        Total Rate
                      </span>
                      <div className="text-xl sm:text-2xl font-black font-mono text-cyan-300 leading-tight">
                        ₹{dishTotal}
                      </div>
                    </div>

                    {/* Bottom-Left Category Tag */}
                    <div className="absolute bottom-3.5 left-3.5">
                      <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-orange-300 border border-orange-500/30 text-[10px] font-mono font-bold uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xl sm:text-2xl font-black text-white font-heading group-hover:text-orange-200 transition-colors tracking-tight">
                        {item.name}
                      </h3>
                      {extraCount > 0 && (
                        <span className="text-[11px] font-mono font-bold text-emerald-400 bg-emerald-950/50 px-2.5 py-0.5 rounded-full border border-emerald-500/30 shrink-0">
                          +{extraCount} Add-on{extraCount > 1 ? 's' : ''} Active
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal mt-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Interactive Add-ons (The Growth Multiplier) */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider flex items-center gap-1.5">
                        <ZapIcon className="w-3.5 h-3.5 text-amber-400" />
                        <span>Interactive Modifiers (Click to Add)</span>
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">
                        Base ₹{item.price}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {item.availableAddons.map((addon) => {
                        const isSelected = selectedAddonIds.includes(addon.id);
                        return (
                          <button
                            key={addon.id}
                            type="button"
                            onClick={() => toggleAddon(item.id, addon.id)}
                            className={`flex items-center justify-between p-2.5 rounded-xl text-xs transition-all duration-200 text-left cursor-pointer border ${isSelected
                                ? 'bg-gradient-to-r from-orange-500/25 to-amber-500/20 border-2 border-orange-400 text-white font-bold shadow-md shadow-orange-500/20 scale-[1.01]'
                                : 'bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.08] hover:border-white/20'
                              }`}
                          >
                            <div className="flex items-center gap-2 truncate pr-1">
                              <div
                                className={`w-4 h-4 rounded flex items-center justify-center shrink-0 transition-colors ${isSelected ? 'bg-orange-500 text-slate-950 font-black' : 'border border-white/30 bg-white/5'
                                  }`}
                              >
                                {isSelected && <CheckIcon className="w-3 h-3 stroke-[3]" />}
                              </div>
                              <span className="truncate">{addon.name}</span>
                            </div>
                            <span
                              className={`font-mono text-xs font-bold shrink-0 ${isSelected ? 'text-amber-300' : 'text-slate-400'
                                }`}
                            >
                              +₹{addon.price}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Bottom Value Banner for Restaurant Owner */}
                <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-400 font-medium">Order Ticket Boost:</span>
                    <span className="font-mono text-white font-bold">
                      ₹{item.price} &rarr; <span className="text-cyan-300 font-black">₹{dishTotal}</span>
                    </span>
                  </div>

                  <span className={`font-mono font-bold text-xs px-2.5 py-0.5 rounded-full border ${marginUplift > 0
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-sm'
                      : 'bg-white/5 text-slate-400 border-white/10'
                    }`}>
                    +{marginUplift}% Margin Lift
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

