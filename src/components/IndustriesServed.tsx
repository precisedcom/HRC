/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Compass, 
  Warehouse, 
  Truck, 
  Wrench, 
  PackageCheck, 
  Layers, 
  Sparkles,
  Zap,
  Milestone
} from 'lucide-react';

export default function IndustriesServed() {
  const industries = [
    {
      id: 1,
      name: "Three-Wheeler & Auto-Rickshaw Operators",
      description: "We are India's premier fabricator of high-resonance 3-wheeler silencers designed specifically to optimize Bajaj, TVS, and Piaggio passenger transport performance.",
      useCase: "Sound isolation, exhaust emission control, custom tailpipes",
      metric: "Over 50,000+ units on roads"
    },
    {
      id: 2,
      name: "Automotive Aftermarket & Spare Parts Networks",
      description: "We supply multi-brand spare part wholesalers with certified export-quality replacement parts, guaranteeing clean fitment, identical OEM specs, and rugged durability.",
      useCase: "Bulk inventory replacement, rapid regional supply",
      metric: "Supplying 200+ global hubs"
    },
    {
      id: 3,
      name: "Agriculture & Severe-Duty Machinery",
      description: "Our double-welded bend pipes and manifold segments are certified for high vibrations, extreme mud exposure, and heavy tractors operating in stressful weather conditions.",
      useCase: "Tractor exhaust routing, specialized engine exhaust pipelines",
      metric: "Heat-rated to 850°C"
    },
    {
      id: 4,
      name: "Commercial Transit & Urban Logistics",
      description: "We design tailpipe systems built for delivery vans and high-mileage urban cargo logistics sectors that demand maximum exhaust flow and optimized fuel savings.",
      useCase: "Cargo fleet tailpipe replacement, gas pressure optimization",
      metric: "Up to 5% improvement in gas flow"
    }
  ];

  return (
    <section id="industries-served" className="py-20 bg-white border-t border-indigo-50 relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-1.5 rounded-full text-xs font-bold text-orange-600 uppercase tracking-widest mb-4"
          >
            <Compass className="h-3.5 w-3.5 text-orange-500" /> Sector Applications
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-indigo-950 tracking-tighter"
          >
            Industries Served
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-slate-500 mt-4 leading-relaxed font-sans"
          >
            Delivering robust automotive assemblies engineered to overcome heavy vibration, carbon buildup, and extreme temperature demands across multi-tier global markets.
          </motion.p>
        </div>

        {/* Industries dynamic bento grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="relative p-8 rounded-3xl border border-indigo-50 bg-slate-50/40 hover:bg-white hover:border-orange-500/30 hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              {/* Highlight number on top right corner */}
              <div className="absolute top-6 right-8 text-5xl font-sans font-black text-indigo-950/5 select-none group-hover:text-orange-500/10 transition-colors">
                0{ind.id}
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="p-2 bg-orange-500/10 rounded-xl text-orange-600 block">
                    {ind.id === 1 && <Truck className="h-5 w-5" />}
                    {ind.id === 2 && <Warehouse className="h-5 w-5" />}
                    {ind.id === 3 && <Wrench className="h-5 w-5" />}
                    {ind.id === 4 && <Layers className="h-5 w-5" />}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-orange-500 uppercase tracking-widest block">
                    Market Focus
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-indigo-950 group-hover:text-orange-500 transition-colors leading-tight">
                    {ind.name}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-sans">
                    {ind.description}
                  </p>
                </div>
              </div>

              {/* Specs and real metrics */}
              <div className="mt-6 pt-6 border-t border-indigo-50/50 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] font-bold text-indigo-950 uppercase tracking-wide block">Primary Purpose</span>
                  <span className="text-xs text-slate-600 block mt-1 font-sans font-medium">{ind.useCase}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wide block">Verified Volume</span>
                  <span className="text-xs text-slate-700 block mt-1 font-bold font-sans flex items-center gap-1">
                    <Zap className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                    {ind.metric}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Strategic reassurance footer */}
        <div className="mt-12 p-6 bg-indigo-50/40 border border-indigo-100/50 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="h-10 w-10 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
              <Milestone className="h-5 w-5 text-orange-500" />
            </span>
            <p className="text-xs text-slate-600 font-sans leading-relaxed">
              Don't see your specific vehicle size? Custom pipe diameters, bend degree configurations, 
              and specialized weld fittings can be prepared directly in our Delhi workshop based on custom design drafts.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById('inquiry-form-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-xs font-bold text-indigo-600 hover:text-orange-500 transition-colors cursor-pointer shrink-0 flex items-center gap-1"
          >
            Request custom design parameters ➜
          </button>
        </div>

      </div>
    </section>
  );
}
