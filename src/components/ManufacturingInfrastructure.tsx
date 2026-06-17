/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Building, 
  Cpu, 
  ShieldCheck, 
  Search, 
  CpuIcon as Tool, 
  Award, 
  Settings, 
  CheckCircle,
  TrendingDown,
  Hammer,
  Gauge
} from 'lucide-react';

export default function ManufacturingInfrastructure() {
  const machineryList = [
    {
      name: "Automated CNC Mandrel Benders",
      desc: "Hydraulically calibrated bending rigs yielding repeatable arc trajectories without pipe collapse or diameter narrowing.",
      icon: <Cpu className="h-5 w-5 text-indigo-600" />
    },
    {
      name: "Robotic Seam MIG Welders",
      desc: "Double-pass automated weld setups achieving air-tight, ultra-rigid joints that handle severe thermal shocks.",
      icon: <Hammer className="h-5 w-5 text-indigo-600" />
    },
    {
      name: "Automated Sheet Shearing",
      desc: "CNC shears slicing high-alloy sheets with flat, deburred edge alignment for optimal layout fabrication.",
      icon: <Settings className="h-5 w-5 text-indigo-600" />
    },
    {
      name: "Tonnage Hydraulic Stamping Press",
      desc: "Heavy-duty press lines embossing custom logos, part parameters, and precise bracket structures.",
      icon: <Tool className="h-5 w-5 text-indigo-600" />
    }
  ];

  const qualityTests = [
    {
      title: "Pressure Leak Smoke Assessment",
      metric: "Tested at 8 Bar pressure",
      desc: "Helium/smoke dispersion analysis guaranteeing exactly zero gas escape points along joint lines to ensure clean emissions."
    },
    {
      title: "Acoustic Decibel Calibrations",
      metric: "Compliant to regional standards",
      desc: "Measuring sound resonance waves in simulated high RPM environments using high-fidelity dB analyzers."
    },
    {
      title: "Vibration Durability Benchmarking",
      metric: "Sustained simulated runs",
      desc: "Stress-testing mount clips and hangers on simulated rough terrain vibration benches to ensure lasting integrity."
    },
    {
      title: "Metallurgical Hardness Audits",
      metric: "Premium Alloy Standard",
      desc: "Regular mechanical load pressing and hardness testing ensures raw steel holds up against heavy vibration impacts."
    }
  ];

  return (
    <section id="manufacturing-infrastructure" className="py-20 bg-white border-t border-indigo-50 relative overflow-hidden scroll-mt-20">
      {/* Visual background ambient details */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-[130px] pointer-events-none" />
      <div className="absolute top-3/4 left-0 w-96 h-96 bg-orange-500/5 rounded-full filter blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-1.5 rounded-full text-xs font-bold text-orange-600 uppercase tracking-widest mb-4 font-mono">
            <Building className="h-3.5 w-3.5 text-orange-500" /> Industrial Backbone
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-indigo-950 tracking-tighter">
            Manufacturing Infrastructure
          </h2>
          <p className="text-sm md:text-base text-slate-500 mt-4 leading-relaxed font-sans">
            Built directly in Delhi's manufacturing industrial belt, our fully integrated plant merges advanced automation machinery with severe-testing checkpoints to maintain standard export reliability.
          </p>
        </div>

        {/* Bento Layout Grid for Infrastructure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Left Large Column: Facility & R&D Overview */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-gradient-to-tr from-indigo-950 to-indigo-900 text-white rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-indigo-850 relative overflow-hidden flex flex-col justify-between"
          >
            {/* Ambient glows inside dark card */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full filter blur-3xl pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <span className="text-[10px] font-mono font-black text-orange-400 uppercase tracking-widest block">
                DELHI PLANT SPECS
              </span>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-tight">
                Our Advanced Production Facility
              </h3>
              <p className="text-sm text-indigo-200 leading-relaxed font-sans">
                Our plant grounds feature separate automated sections for raw material assay inspections, computerized steel plate layout shearing, heavy hydraulic stamping presses, multi-axis mandrel bending divisions, and clean-flow assembly lines. 
              </p>

              <div className="p-5 bg-indigo-1000/60 border border-indigo-850 rounded-2xl space-y-3">
                <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider block font-mono">
                  ✨ R&amp;D Division (Metallurgical Advancements)
                </span>
                <p className="text-xs text-indigo-150 leading-relaxed font-sans text-indigo-200">
                  We employ dedicated steel CAD flow engineers mapping ideal inner gas vortex alignments. By redesigning inner baffles and exhaust sound insulation compartments, our R&amp;D division continuously achieves average exhaust gas flow enhancements of 5%.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-indigo-850 flex flex-wrap items-center justify-between text-xs text-indigo-300 gap-4 mt-8 relative z-10">
              <span>Standard ISO Supplying Layout</span>
              <span className="font-bold text-white uppercase tracking-wider">Delhi Quality Verified</span>
            </div>
          </motion.div>

          {/* Right Column: Advanced Machinery list */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <h4 className="text-xs font-black text-indigo-950 uppercase tracking-wider block border-b border-indigo-50 pb-2">
              Advanced Machinery Standard
            </h4>
            
            {machineryList.map((mach, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-5 rounded-2xl border border-indigo-50/80 bg-slate-50/40 hover:bg-white hover:border-orange-200 transition-all flex gap-4 items-start group"
              >
                <div className="h-10 w-10 rounded-xl bg-indigo-100 flex items-center justify-center shrink-0 group-hover:bg-indigo-650 group-hover:text-white transition-all text-indigo-700">
                  {mach.icon}
                </div>
                <div className="space-y-1">
                  <h5 className="text-sm font-bold text-indigo-950 group-hover:text-orange-600 transition-colors">
                    {mach.name}
                  </h5>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">
                    {mach.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Quality Assurance & Processes details row */}
        <div className="border-t border-indigo-50/80 pt-16 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-4 space-y-4">
              <span className="inline-flex items-center gap-1 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full text-xs font-bold text-indigo-700 uppercase tracking-wider font-mono">
                <ShieldCheck className="h-3.5 w-3.5" /> High Standards QA
              </span>
              <h3 className="text-3xl font-extrabold text-indigo-950 tracking-tight leading-tight">
                Quality Assurance &amp; Testing Protocols
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed font-sans">
                Each product batch undergoes structural inspections before commercial logistics packaging. We run extensive stress tests to guarantee zero defect thresholds across our global export channels.
              </p>

              <div className="p-4 bg-orange-50 border border-orange-100 rounded-2xl flex items-center gap-2 text-xs font-sans text-orange-850 font-medium">
                <Award className="h-4 w-4 text-orange-500 shrink-0" />
                <span>ISO 9001:2015 Compliant Metallurgical Setup</span>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {qualityTests.map((test, index) => (
                <div 
                  key={index} 
                  className="p-6 rounded-2xl border border-indigo-50/70 bg-slate-50/20 hover:bg-white hover:shadow-lg transition-all space-y-3 group"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono font-bold text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {test.metric}
                    </span>
                    <div className="h-2 w-2 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform" />
                  </div>

                  <h4 className="text-base font-bold text-indigo-950 font-sans group-hover:text-orange-600 transition-colors">
                    {test.title}
                  </h4>
                  
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">
                    {test.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
