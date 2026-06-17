/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  History, 
  Target, 
  Lightbulb, 
  Users, 
  Award, 
  Compass, 
  Sparkles, 
  ShieldCheck, 
  Briefcase 
} from 'lucide-react';

export default function AboutUs() {
  const leadershipTeam = [
    {
      name: "Mr. Hitesh Arora",
      role: "Managing Director • Founder",
      bio: "Over 30 years of industrial expertise in raw metallurgy and precision automotive exhaust fabrication.",
      icon: <Users className="h-5 w-5 text-indigo-400" />
    },
    {
      name: "Mr. Ritesh Arora",
      role: "Director of International Trade & QA",
      bio: "Spearheads global export compliances, supply channels, and advanced quality assurance protocols.",
      icon: <Briefcase className="h-5 w-5 text-indigo-400" />
    }
  ];

  const milestones = [
    { year: "1995", title: "Genesis", desc: "Established in Delhi, starting with specialized 3-wheeler silencer production." },
    { year: "2005", title: "OEM Integration", desc: "Integrated with India's largest passenger & cargo transport logistics networks." },
    { year: "2015", title: "Going Global", desc: "Initiated key international trade corridors for bulk auto components export." },
    { year: "2026", title: "Smart Metallurgy", desc: "Transitioned to CNC precision cutting & robotic double-pass welding infrastructure." }
  ];

  return (
    <section id="about-us" className="py-20 bg-white border-t border-indigo-50 relative overflow-hidden scroll-mt-20">
      {/* Radiant Background Accents */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute top-2/3 right-0 w-96 h-96 bg-orange-500/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-1.5 rounded-full text-xs font-bold text-orange-600 uppercase tracking-widest mb-4 font-mono"
          >
            <History className="h-3.5 w-3.5 text-orange-500 animate-pulse" /> Corporate Pedigree
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-indigo-950 tracking-tighter"
          >
            About Hitesh Ritesh &amp; Co.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-slate-500 mt-4 leading-relaxed font-sans"
          >
            Since 1995, we have engineered and traded premier automotive systems right from Delhi, India's iconic hardware hub, to standard-governed wholesale markets worldwide.
          </motion.p>
        </div>

        {/* Vision & Mission bento cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 rounded-[2rem] border border-indigo-50/80 bg-slate-50/40 relative overflow-hidden group hover:border-indigo-250 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <span className="h-12 w-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600">
                <Target className="h-6 w-6" />
              </span>
              <h3 className="text-2xl font-bold text-indigo-950">Our Vision</h3>
              <p className="text-sm text-slate-650 font-sans leading-relaxed">
                To position Indian metallurgical craftsmanship at the apex of global spare parts supply chain. We strive to pioneer eco-optimized, vibration-resistant exhaust systems that support cleaner, smoother heavy-duty and passenger logistics.
              </p>
            </div>
            <div className="border-t border-indigo-50/65 mt-6 pt-4 text-xs font-mono font-bold text-indigo-600 block">
              ✦ Precision Engineering Leadership
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 rounded-[2rem] border border-indigo-50/80 bg-slate-50/40 relative overflow-hidden group hover:border-orange-250 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <span className="h-12 w-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600">
                <Lightbulb className="h-6 w-6" />
              </span>
              <h3 className="text-2xl font-bold text-indigo-950">Our Mission</h3>
              <p className="text-sm text-slate-650 font-sans leading-relaxed">
                To construct state-of-the-art auto parts and 3-wheeler silencers that set standard benchmarks in gas flow acceleration and high-thermal resistance, while delivering absolute commercial value to bulk global procurement networks.
              </p>
            </div>
            <div className="border-t border-indigo-50/65 mt-6 pt-4 text-xs font-mono font-bold text-orange-600 block">
              ✦ Zero-Compromise Supply Integrity
            </div>
          </motion.div>

        </div>

        {/* Dynamic Timeline of Manufacturing History */}
        <div className="bg-indigo-950 text-white rounded-[2.5rem] p-8 md:p-12 mb-16 relative overflow-hidden border border-indigo-850 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full filter blur-[100px]" />
          
          <div className="mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-indigo-850 pb-6">
            <div>
              <span className="text-[10px] font-mono font-bold text-orange-400 uppercase tracking-widest block">
                Since 1995
              </span>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight mt-1">Our Evolutionary Milestone Timeline</h3>
            </div>
            <span className="bg-orange-500 text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              31 Years of Excellence
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((item, idx) => (
              <div key={idx} className="space-y-3 relative group">
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-7 left-full right-4 h-[1px] bg-indigo-800 z-0" />
                )}
                <span className="inline-block text-3xl font-black text-orange-400 font-sans select-none relative z-10">
                  {item.year}
                </span>
                <h4 className="text-base font-bold text-white relative z-10">{item.title}</h4>
                <p className="text-xs text-indigo-200 leading-relaxed font-sans relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Representation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 uppercase tracking-wider">
              <Sparkles className="h-4 w-4 text-orange-500 animate-spin" style={{ animationDuration: '3s' }} /> Executive Leadership
            </div>
            <h3 className="text-3xl font-extrabold text-indigo-950 leading-tight">
              Founders driving engineering integrity
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed font-sans">
              Hitesh Ritesh &amp; Co. operates under a multi-generational legacy of professional metallurgical directors, holding true to our founding goals: quality materials, honest pricing, and streamlined trade dispatch models.
            </p>
            <div className="p-4 bg-orange-50 border border-orange-100 rounded-2xl flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-650 leading-relaxed font-sans">
                <strong>Certified Indian Direct Sourcing:</strong> All materials are sourced ethically from state-registered premium steel casting units.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {leadershipTeam.map((leader, index) => (
              <div 
                key={index}
                className="bg-slate-50/60 p-6 rounded-3xl border border-indigo-50/60 hover:shadow-xl hover:bg-white hover:border-orange-200 transition-all space-y-4 group"
              >
                <div className="h-10 w-10 bg-indigo-950/5 text-indigo-950 rounded-xl flex items-center justify-center group-hover:bg-indigo-650 group-hover:text-white transition-all text-indigo-750">
                  {leader.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-indigo-950 font-sans">{leader.name}</h4>
                  <span className="text-xs text-orange-600 font-extrabold tracking-wide block uppercase mt-0.5 font-mono">{leader.role}</span>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans mt-2">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
