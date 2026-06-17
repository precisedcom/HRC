/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Globe, 
  Package, 
  MapPin, 
  Compass, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Check, 
  Truck,
  Sparkles
} from 'lucide-react';

export default function Exports() {
  const globalMarkets = [
    { country: "East Africa", cities: "Kenya • Tanzania • Uganda", details: "High-demand trade corridors for heavy-duty replacement 3-wheeler silencers." },
    { country: "South Asia", cities: "Nepal • Bangladesh • Sri Lanka", details: "Extensive wholesale distribution networks servicing passenger transport fleets." },
    { country: "Latin America", cities: "Peru • Colombia • Ecuador", details: "Supplying precision bend pipes and structural auto components for challenging high-altitude operations." },
    { country: "Middle East", cities: "Egypt • Yemen • UAE Hubs", details: "Direct distributor dispatches accommodating extreme temperature resilience requirements." }
  ];

  const complianceStandards = [
    { title: "Standardized Customs Clearances", icon: <ShieldCheck className="h-4 w-4 text-emerald-500" /> },
    { title: "Complete HS Code Alignment & Documentation", icon: <Check className="h-4 w-4 text-emerald-500" /> },
    { title: "Fully Bureau of Indian Standards (BIS) Approved Processes", icon: <Award className="h-4 w-4 text-emerald-500" /> },
    { title: "Export Grade Anti-Rust Surface Assurances", icon: <ShieldCheck className="h-4 w-4 text-emerald-500" /> }
  ];

  return (
    <section id="exports" className="py-20 bg-slate-50 border-t border-indigo-50 relative overflow-hidden scroll-mt-20">
      {/* Visual background details */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-500/5 rounded-full filter blur-[130px] pointer-events-none" />
      <div className="absolute top-3/4 right-0 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-1.5 rounded-full text-xs font-bold text-indigo-700 uppercase tracking-widest mb-4 font-mono">
            <Globe className="h-3.5 w-3.5 text-indigo-600 animate-spin" style={{ animationDuration: '6s' }} /> Worldwide Supply
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-indigo-950 tracking-tighter">
            Global Trade &amp; Exports
          </h2>
          <p className="text-sm md:text-base text-slate-500 mt-4 leading-relaxed font-sans">
            Transporting custom metallurgic solutions across key international trade networks. We facilitate direct port dispatches from our Delhi hub to major centers globally.
          </p>
        </div>

        {/* Global Markets map grid card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Left: Global Markets Coverage details */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {globalMarkets.map((market, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-6 rounded-3xl border border-indigo-50/70 bg-white hover:border-orange-200 hover:shadow-xl transition-all space-y-3 group"
              >
                <div className="flex justify-between items-center">
                  <span className="p-2 rounded-xl bg-orange-500/10 text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    <Compass className="h-4 w-4" />
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                    Verified Trade Route
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-xl font-bold text-indigo-950 font-sans">
                    {market.country}
                  </h4>
                  <span className="text-xs text-orange-600 font-extrabold tracking-wide block uppercase font-mono">
                    {market.cities}
                  </span>
                  <p className="text-xs text-slate-550 leading-relaxed font-sans text-slate-500 mt-2">
                    {market.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Immersive Logistics and Packaging Highlight */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-gradient-to-tr from-indigo-950 to-indigo-900 text-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden border border-indigo-850 flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full filter blur-3xl pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <span className="text-[10px] font-mono font-bold text-orange-400 uppercase tracking-widest block">
                Logistics protective measures
              </span>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-tight">
                Secure Export Grade Packaging
              </h3>
              <p className="text-sm text-indigo-200 leading-relaxed font-sans">
                Each shipment is protected against sea moisture. Silencers, manifolds, and bended pipes go through specialized heavy poly-shrink wrapping, placement of silica gel moisture absorption sachets, and are secured with custom reinforce wooden framing blocks to guarantee damage-free vessel delivery.
              </p>

              <div className="space-y-4 pt-4 border-t border-indigo-900">
                <div className="flex items-start gap-3">
                  <span className="h-8 w-8 rounded-lg bg-indigo-900/60 border border-indigo-800 flex items-center justify-center text-orange-400 shrink-0">
                    <Package className="h-4 w-4" />
                  </span>
                  <div>
                    <h5 className="text-xs font-bold text-white uppercase tracking-wider">Moisture Protections</h5>
                    <p className="text-[11px] text-indigo-250 font-sans text-indigo-200 mt-0.5">Heavy stretch poly-wrapped with industrial silica gels.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="h-8 w-8 rounded-lg bg-indigo-900/60 border border-indigo-800 flex items-center justify-center text-orange-400 shrink-0">
                    <Truck className="h-4 w-4" />
                  </span>
                  <div>
                    <h5 className="text-xs font-bold text-white uppercase tracking-wider">Container Optimization</h5>
                    <p className="text-[11px] text-indigo-250 font-sans text-indigo-200 mt-0.5">Clever structural block stacking to reduce ocean cargo shifting issues.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-indigo-850 pt-6 mt-8 flex justify-between text-xs text-indigo-300 relative z-10">
              <span>Port of Loading: Mumbai, India</span>
              <span className="font-bold text-white uppercase">Delhi HQ Registry</span>
            </div>
          </motion.div>

        </div>

        {/* Compliance Row */}
        <div className="p-8 bg-white border border-indigo-50 rounded-[2rem] shadow-sm mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700 uppercase tracking-wider font-mono">
                <Sparkles className="h-4 w-4 text-orange-500 animate-spin" /> Supply Chain Compliance
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-indigo-950 tracking-tight leading-none">
                Export Compliance Standards
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed font-sans">
                We handle complete trade documentation clearances, export tax invoicing alignment, and custom broker configurations under legal IEC numbers so our wholesale partners experience completely frictionless delivery cycles.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {complianceStandards.map((std, index) => (
                <div key={index} className="p-4 bg-slate-50 rounded-xl border border-indigo-50/50 flex items-center gap-3">
                  <span className="h-7 w-7 rounded-lg bg-emerald-50 border border-emerald-150 flex items-center justify-center text-emerald-600 shrink-0">
                    {std.icon}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-indigo-950 font-sans tracking-tight">{std.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
