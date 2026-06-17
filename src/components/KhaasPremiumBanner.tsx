/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle, Package, Send } from 'lucide-react';

interface KhaasPremiumBannerProps {
  onInquire: (productName: string) => void;
}

export default function KhaasPremiumBanner({ onInquire }: KhaasPremiumBannerProps) {
  const [activeTab, setActiveTab] = useState<'bajaj' | 'tvs'>('bajaj');

  return (
    <div className="w-full bg-slate-50 border-b border-slate-200 overflow-hidden relative">
      {/* Repeating fine top pattern ribbon */}
      <div className="bg-slate-100 py-1 px-4 border-b border-slate-200 flex justify-between items-center text-[10px] md:text-xs text-slate-500 overflow-hidden whitespace-nowrap select-none font-mono tracking-widest uppercase">
        <div className="flex gap-8 animate-marquee">
          <span>⚡ KHAAS® GOLD ⚡ HITESH RITESH & CO. ⚡ ORIGINAL FIT SILENCERS ⚡ BAJAJ 3W RE ⚡ TVS KING ⚡ PIAGGIO APE ⚡</span>
          <span>⚡ KHAAS® GOLD ⚡ HITESH RITESH & CO. ⚡ ORIGINAL FIT SILENCERS ⚡ BAJAJ 3W RE ⚡ TVS KING ⚡ PIAGGIO APE ⚡</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT PANEL: The Auto-Rickshaw Showcase & Big Visual Typography */}
          <div className="lg:col-span-7 space-y-6 relative z-10 flex flex-col md:flex-row items-center gap-6">
            
            {/* Highly crafted SVG Green & Yellow Auto-Rickshaw representing the Bajaj 3W RE */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-[280px] sm:max-w-[320px] shrink-0 bg-white p-4 rounded-3xl border border-slate-200/60 shadow-xl relative group"
            >
              {/* Dynamic yellow/orange energy glow background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-amber-500/5 rounded-3xl pointer-events-none" />
              
              <div className="relative w-full aspect-[4/3] flex items-center justify-center">
                {/* SVG Auto Rickshaw Drawing */}
                <svg viewBox="0 0 400 300" className="w-full h-full drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Road Shadow */}
                  <ellipse cx="200" cy="265" rx="140" ry="12" fill="rgba(15, 23, 42, 0.12)" />
                  
                  {/* Wheel Front */}
                  <circle cx="95" cy="255" r="22" fill="#1e293b" stroke="#64748b" strokeWidth="4" />
                  <circle cx="95" cy="255" r="12" fill="#94a3b8" />
                  <circle cx="95" cy="255" r="5" fill="#e2e8f0" />

                  {/* Wheel Back */}
                  <circle cx="285" cy="255" r="26" fill="#1e293b" stroke="#64748b" strokeWidth="4" />
                  <circle cx="285" cy="255" r="14" fill="#94a3b8" />
                  <circle cx="285" cy="255" r="6" fill="#e2e8f0" />
                  
                  {/* Mudguards */}
                  <path d="M70 245 C 70 220, 120 220, 120 245" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
                  <path d="M250 255 C 250 215, 320 215, 320 255" stroke="#1e293b" strokeWidth="8" strokeLinecap="round" />

                  {/* Main Green Body Chassis */}
                  <path d="M90 235 L 140 235 L 150 170 L 330 170 L 330 245 L 260 245 L 230 245 L 130 245 Z" fill="#047857" />
                  
                  {/* Front nose panel (Green) */}
                  <path d="M85 235 L 115 150 L 140 150 L 140 235 Z" fill="#065f46" />
                  <path d="M85 235 L 75 210 L 110 150 L 122 150 Z" fill="#047857" />

                  {/* Yellow Fabric Roof Canopy structure */}
                  <path d="M125 150 C 130 90, 180 82, 270 82 C 320 82, 332 95, 335 155 C 335 160, 333 170, 315 170 L 140 170 Z" fill="#eab308" />
                  <path d="M125 150 C 128 100, 160 92, 230 92 Z" fill="#facc15" /> {/* Highlight Yellow stripe */}

                  {/* Windshield Guard & Chrome pillars */}
                  <path d="M115 150 L 128 100" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" />
                  <path d="M150 170 L 155 95" stroke="#cbd5e1" strokeWidth="3" />
                  <path d="M210 170 L 210 90" stroke="#cbd5e1" strokeWidth="2" />
                  <path d="M280 170 L 280 90" stroke="#cbd5e1" strokeWidth="3" />

                  {/* Glass Windshield */}
                  <path d="M125 145 L 135 102 L 152 102 L 146 145 Z" fill="rgba(186, 230, 253, 0.4)" stroke="#38bdf8" strokeWidth="1.5" />

                  {/* Side open door canvas frames */}
                  <path d="M158 170 L 164 110 C 190 110, 220 110, 235 125 L 235 170 Z" fill="none" stroke="#ca8a04" strokeWidth="3" />
                  <path d="M245 170 L 245 110 C 275 110, 310 110, 322 130 L 322 170 Z" fill="none" stroke="#ca8a04" strokeWidth="3" />
                  
                  {/* Drivers Seat details */}
                  <rect x="165" y="152" width="60" height="12" rx="4" fill="#1e293b" />
                  <rect x="250" y="148" width="70" height="15" rx="4" fill="#334155" />

                  {/* Chrome bumper & Front Headlight */}
                  <path d="M68 220 L 92 220" stroke="#cbd5e1" strokeWidth="5" strokeLinecap="round" />
                  <circle cx="80" cy="205" r="9" fill="#fef08a" stroke="#eab308" strokeWidth="2" />
                  <path d="M80 205 L 60 215" stroke="rgba(254, 240, 138, 0.4)" strokeWidth="6" strokeLinecap="round" /> {/* Light beam */}

                  {/* Rear Indicator Tail light */}
                  <rect x="328" y="180" width="8" height="14" rx="2" fill="#ef4444" />
                  
                  {/* Silencer Tailpipe (represented under chassis) */}
                  <path d="M230 252 L 270 252" stroke="#475569" strokeWidth="5" strokeLinecap="round" />
                  <path d="M270 252 C 280 252, 298 258, 305 258" stroke="#334155" strokeWidth="4" />
                  <path d="M220 252 L 210 242" stroke="#64748b" strokeWidth="4" />

                  {/* Side branding emblem 'HRC' on auto */}
                  <rect x="180" y="195" width="40" height="18" rx="6" fill="#eab308" />
                  <text x="200" y="208" fill="#1e293b" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">HRC</text>
                </svg>
              </div>

              {/* Dynamic tag */}
              <div className="mt-2 text-center">
                <span className="inline-flex items-center gap-1.5 bg-emerald-500/15 text-emerald-800 text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-ping" /> Perfect OEM Design Fit
                </span>
              </div>
            </motion.div>

            {/* Typography Content Column */}
            <div className="space-y-4 text-center md:text-left">
              {/* Khaas series banner badge */}
              <div className="inline-flex items-center gap-2 bg-[#0d4f66]/10 border border-[#0d4f66]/20 px-3.5 py-1 rounded-full text-[10px] md:text-xs font-black text-[#0d4f66] uppercase tracking-widest font-mono">
                <Sparkles className="h-3.5 w-3.5 text-orange-500" /> Premium Flagship Launch
              </div>

              {/* Dynamic Image Text Copy: "EXHAUST SILENCER COMPACT 4 St. FOR BAJAJ 3W RE" */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.05] font-sans">
                EXHAUST SILENCER <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">COMPACT 4 St.</span><br />
                <span className="text-[#0d4f66] uppercase drop-shadow-sm">FOR BAJAJ 3W RE &amp; TVS</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans max-w-lg">
                Engineered with heavy-duty rigid steel baffles &amp; high gas flow acoustics. <strong>HRC KHAAS GOLD</strong> series reduces noise emission limits while delivering maximum 4-stroke thermal combustion endurance.
              </p>

              {/* Key badges inspired by image */}
              <div className="flex flex-wrap gap-2.5 justify-center md:justify-start pt-2">
                <span className="flex items-center gap-1.5 bg-white border border-slate-200 shadow-sm text-[10px] md:text-xs font-semibold px-3 py-1.5 rounded-xl text-slate-700">
                  <CheckCircle className="h-3.5 w-3.5 text-orange-500" /> 100% Leak Tested
                </span>
                <span className="flex items-center gap-1.5 bg-white border border-slate-200 shadow-sm text-[10px] md:text-xs font-semibold px-3 py-1.5 rounded-xl text-slate-700">
                  <ShieldCheck className="h-3.5 w-3.5 text-orange-500" /> Rust-Proof Coating
                </span>
                <span className="flex items-center gap-1.5 bg-white border border-slate-200 shadow-sm text-[10px] md:text-xs font-semibold px-3 py-1.5 rounded-xl text-slate-700">
                  <Package className="h-3.5 w-3.5 text-orange-500" /> Moisture-Proof Packing
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT PANEL: Interactive Product Showcase Cards from the image */}
          <div className="lg:col-span-5 relative z-10">
            <div className="bg-gradient-to-br from-indigo-950 to-indigo-900 text-white rounded-[2.2rem] p-6 shadow-2xl border border-indigo-800 relative overflow-hidden">
              {/* Stylized visual graphic accents */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full filter blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/5 rounded-full filter blur-2xl pointer-events-none" />
              
              <div className="flex justify-between items-center mb-6">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-orange-500" />
                    <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest font-mono">Brand Series</span>
                  </div>
                  <h3 className="text-xl font-black tracking-tight text-white flex items-center gap-2">
                    KHAAS <span className="bg-amber-400 text-slate-900 text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider font-mono">GOLD</span>
                  </h3>
                </div>
                
                {/* Switch tab buttons */}
                <div className="bg-indigo-900/60 p-1 rounded-xl border border-indigo-800/80 flex gap-1">
                  <button
                    onClick={() => setActiveTab('bajaj')}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                      activeTab === 'bajaj' ? 'bg-orange-500 text-white shadow-md' : 'text-indigo-250 hover:text-white'
                    }`}
                  >
                    Bajaj
                  </button>
                  <button
                    onClick={() => setActiveTab('tvs')}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                      activeTab === 'tvs' ? 'bg-orange-500 text-white shadow-md' : 'text-indigo-250 hover:text-white'
                    }`}
                  >
                    TVS King
                  </button>
                </div>
              </div>

              {/* Product Card Rendering */}
              <div className="space-y-4 min-h-[180px] flex flex-col justify-between">
                
                {activeTab === 'bajaj' ? (
                  <motion.div
                    key="bajaj"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="bg-indigo-1000/60 p-4 rounded-2xl border border-indigo-800/50 flex gap-4 items-center">
                      {/* Technical Silencer SVG Illustration */}
                      <div className="w-16 h-16 bg-white/5 rounded-xl shrink-0 flex items-center justify-center p-2 border border-white/10">
                        <svg viewBox="0 0 100 100" className="w-full h-full text-orange-400" fill="currentColor">
                          {/* Inlet Pipe */}
                          <path d="M10 50 C20 50, 20 20, 40 20" stroke="currentColor" strokeWidth="6" fill="none" />
                          {/* Silencer Canister */}
                          <rect x="35" y="10" width="40" height="25" rx="6" fill="currentColor" opacity="0.85" />
                          {/* Tail Bend */}
                          <path d="M75 22 C90 22, 90 70, 75 75" stroke="currentColor" strokeWidth="5" fill="none" />
                          <circle cx="75" cy="75" r="4" fill="currentColor" />
                        </svg>
                      </div>
                      
                      <div className="space-y-1">
                        <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest font-mono">Compatible Model</span>
                        <h4 className="text-sm font-bold text-white">Silencer With Bend RE 205 CNG 4 St</h4>
                        <p className="text-[11px] text-indigo-200">Custom rigid mounting system for Bajaj RE Series</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-center text-xs font-sans">
                      <div className="bg-indigo-900/30 p-2.5 rounded-xl border border-indigo-800/30">
                        <span className="text-[10px] text-indigo-300 block">Spec Grade</span>
                        <span className="font-bold text-white block mt-0.5">Heavy Gauge ERW</span>
                      </div>
                      <div className="bg-indigo-900/30 p-2.5 rounded-xl border border-indigo-800/30">
                        <span className="text-[10px] text-indigo-300 block">Warranty</span>
                        <span className="font-bold text-white block mt-0.5">Custom OEM Fit</span>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="tvs"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="bg-indigo-1000/60 p-4 rounded-2xl border border-indigo-800/50 flex gap-4 items-center">
                      {/* TVS Silencer Illustration */}
                      <div className="w-16 h-16 bg-white/5 rounded-xl shrink-0 flex items-center justify-center p-2 border border-white/10">
                        <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-400" fill="currentColor">
                          {/* TVS King Bend Pipe Pattern */}
                          <path d="M10 30 C30 30, 20 60, 45 60" stroke="currentColor" strokeWidth="6" fill="none" />
                          {/* Silencer Chamber */}
                          <rect x="42" y="45" width="45" height="28" rx="6" fill="currentColor" opacity="0.85" />
                          {/* Exhaust Outflow */}
                          <path d="M87 59 L95 59" stroke="currentColor" strokeWidth="5" />
                        </svg>
                      </div>
                      
                      <div className="space-y-1">
                        <span className="text-[9px] font-black text-amber-400 uppercase tracking-widest font-mono">Compatible Model</span>
                        <h4 className="text-sm font-bold text-white">Silencer With Bend TVS King 4 St</h4>
                        <p className="text-[11px] text-indigo-200">Anti-backfire acoustics architecture</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-center text-xs font-sans">
                      <div className="bg-indigo-900/30 p-2.5 rounded-xl border border-indigo-800/30">
                        <span className="text-[10px] text-indigo-300 block">Spec Grade</span>
                        <span className="font-bold text-white block mt-0.5">MIG Seam Welded</span>
                      </div>
                      <div className="bg-indigo-900/30 p-2.5 rounded-xl border border-indigo-800/30">
                        <span className="text-[10px] text-indigo-300 block">Bending tech</span>
                        <span className="font-bold text-white block mt-0.5">CNC Mandrel Bend</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Instant CTA to inquire about this product specifically */}
                <button
                  onClick={() => onInquire(
                    activeTab === 'bajaj' 
                      ? 'Khaas Gold - Silencer With Bend RE 205 CNG 4 St'
                      : 'Khaas Gold - Silencer With Bend TVS King 4 St'
                  )}
                  className="w-full bg-orange-500 hover:bg-orange-600 active:scale-[0.98] text-white py-3.5 px-6 rounded-xl text-xs font-black tracking-widest uppercase transition-all flex items-center justify-center gap-2 group cursor-pointer shadow-lg shadow-orange-500/20"
                >
                  <span>Select for Bulk Quotation</span>
                  <Send className="h-3.5 w-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
