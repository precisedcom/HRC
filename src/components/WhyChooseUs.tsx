/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Settings, 
  MapPin, 
  Truck, 
  Award, 
  Flame, 
  Users2, 
  CheckCircle,
  HelpCircle,
  Clock
} from 'lucide-react';

export default function WhyChooseUs() {
  const values = [
    {
      icon: <Award className="h-6 w-6 text-orange-500" />,
      title: "Extensive Sector Expertise",
      desc: "Since 1995, we have honed our manufacturing capabilities in Delhi, achieving meticulous precision in standard-gauge automotive and multi-wheeler equipment.",
      badge: "30+ Years"
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-orange-500" />,
      title: "Export Quality Standard",
      desc: "Our products undergo strict metallurgical tolerances, high pressure resistance testing, and double-pass visual weld assessments to secure global certifications.",
      badge: "Zero Defect"
    },
    {
      icon: <Flame className="h-6 w-6 text-orange-500" />,
      title: "Optimized Thermal & Sound Acoustics",
      desc: "Engineered with sound-trapping wool and low-backpressure exhaust channels to boost fuel mileage while meeting strictly regulated urban noise laws.",
      badge: "Acoustic Guard"
    },
    {
      icon: <Truck className="h-6 w-6 text-orange-500" />,
      title: "Delhi Hub Logistical Agility",
      desc: "Positioned directly in Delhi's premier industrial corridor to support hyper-rapid domestic dispatch, maritime packaging, and simplified bulk customs clearance.",
      badge: "Real-time Dispatch"
    },
    {
      icon: <Settings className="h-6 w-6 text-orange-500" />,
      title: "Bespoke OEM Sizing & Tooling",
      desc: "We supply customized bend radii, diameter ranges, and accessory brackets to align seamlessly with any auto, tractor, or 3-wheeler specifications.",
      badge: "Fully Tailorable"
    },
    {
      icon: <Users2 className="h-6 w-6 text-orange-500" />,
      title: "Direct Wholesale Advantage",
      desc: "By trading as raw manufacturers, we bypass broker middlemen to offer unbeatable volume savings, predictable commercial payment terms, and persistent supply channels.",
      badge: "Wholesale Value"
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-slate-50 border-t border-indigo-50 relative overflow-hidden">
      {/* Decorative abstract mesh elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-indigo-500/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-orange-500/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-1.5 rounded-full text-xs font-bold text-indigo-700 uppercase tracking-widest mb-4"
          >
            <HelpCircle className="h-3.5 w-3.5 text-indigo-600" /> Operational Integrity
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-indigo-950 tracking-tighter"
          >
            Why Choose Hitesh Ritesh &amp; Co. (I)?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-slate-500 mt-4 leading-relaxed font-sans"
          >
            We represent the pinnacle of heavy-duty auto exhaust technology. Discover why multi-tier auto assemblers, fleet managers, and spare part distributors count on our Delhi-based facility.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white border border-indigo-50/80 rounded-2xl p-6 hover:shadow-xl hover:border-orange-200/60 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  {/* Icon wrapper */}
                  <div className="h-12 w-12 bg-orange-50 border border-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all text-orange-600">
                    {item.icon}
                  </div>
                  {/* Small badge label */}
                  <span className="text-[9px] font-mono font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-black text-indigo-950 group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Decorative accent footer */}
              <div className="mt-4 pt-4 border-t border-indigo-50/50 flex items-center gap-1.5 text-xs text-orange-500 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                <CheckCircle className="h-3.5 w-3.5" />
                <span>Delhi OEM Guarantee</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom statistics highlight banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-indigo-950 to-indigo-900 rounded-[2rem] p-8 text-white relative overflow-hidden border border-indigo-850"
        >
          <div className="absolute top-[-50%] right-[-10%] w-96 h-96 bg-orange-500/10 rounded-full filter blur-3xl pointer-events-none" />
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-indigo-800/60">
            <div className="pt-4 lg:pt-0">
              <span className="block text-4xl font-extrabold text-orange-400 font-sans">100%</span>
              <span className="block text-[10px] text-indigo-200 uppercase tracking-widest mt-1 font-mono">India Manufactured</span>
            </div>
            <div className="pt-4 lg:pt-0">
              <span className="block text-4xl font-extrabold text-white font-sans">30+ Years</span>
              <span className="block text-[10px] text-indigo-200 uppercase tracking-widest mt-1 font-mono">Combined Metallurgy</span>
            </div>
            <div className="pt-4 lg:pt-0">
              <span className="block text-4xl font-extrabold text-orange-400 font-sans">0.05%</span>
              <span className="block text-[10px] text-indigo-200 uppercase tracking-widest mt-1 font-mono">Quality Claim Return Rate</span>
            </div>
            <div className="pt-4 lg:pt-0">
              <span className="block text-4xl font-extrabold text-white font-sans">Delhi, IN</span>
              <span className="block text-[10px] text-indigo-200 uppercase tracking-widest mt-1 font-mono">Headquarters &amp; Hub</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
