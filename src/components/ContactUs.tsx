/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Mail, 
  Clock, 
  Map, 
  Copy, 
  Check, 
  ExternalLink,
  MessageSquare,
  Compass,
  PhoneCall,
  Sparkles
} from 'lucide-react';

export default function ContactUs() {
  const [copied, setCopied] = useState(false);
  const supportEmail = "soniahitesh.arora177@gmail.com";
  // WhatsApp Link pre-filled with a professional procurement request inquiry
  const whatsappNumber = "919868586678"; // Indian country code prefix +91
  const whatsappMessage = encodeURIComponent("Hello Hitesh Ritesh & Co., I am interested in procuring export-quality 3-wheeler silencers and bend pipes. Please share your wholesale product catalog and bulk pricing models.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(supportEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact-us" className="py-20 bg-white border-t border-indigo-50 relative overflow-hidden scroll-mt-20">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-[460px] h-[460px] bg-orange-500/5 rounded-full filter blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-indigo-500/5 rounded-full filter blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-505/10 bg-indigo-500/10 border border-indigo-500/20 px-4 py-1.5 rounded-full text-xs font-bold text-indigo-750 uppercase tracking-widest mb-4 font-mono">
            <MapPin className="h-3.5 w-3.5 text-indigo-600 animate-bounce" /> Global Trade HQ
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-indigo-950 tracking-tighter">
            Contact Us &amp; Communications
          </h2>
          <p className="text-sm md:text-base text-slate-500 mt-4 leading-relaxed font-sans">
            Ready to integrate peak metallurgical auto components into your distribution channels? Connect with our Delhi trade office via instant WhatsApp or direct inquiry forms below.
          </p>
        </div>

        {/* Dual Grid Layout: Contact Info & WhatsApp left, Real Google Map right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Contact details & Instant WhatsApp Integration */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            
            {/* Interactive Email Copy Section */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-3xl border border-indigo-50 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-600">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-xs font-bold text-indigo-950 uppercase tracking-wider">Direct Procurement Desk</h3>
                  <p className="text-[10px] text-slate-400">Export &amp; Supply Coordination</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-slate-100">
                <span className="text-sm font-mono font-bold text-indigo-950 break-all select-all pl-1">
                  {supportEmail}
                </span>
                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className="bg-indigo-50 hover:bg-indigo-100 text-indigo-750 py-2 px-4 rounded-xl text-xs font-bold font-sans flex items-center justify-center gap-1.5 cursor-pointer transition-colors shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Copied Email Address!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-indigo-650" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>

            {/* INSTANT WHATSAPP CHAT INTEGRATION CARD */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="p-6 rounded-3xl border border-emerald-100 bg-emerald-50/20 hover:bg-white hover:border-emerald-300 hover:shadow-xl transition-all space-y-4"
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <span className="h-10 w-10 bg-emerald-550/10 bg-emerald-500/10 text-emerald-600 rounded-xl flex items-center justify-center">
                    {/* SVG representation of standard custom WhatsApp Symbol */}
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.1 1.448 4.7 1.449 5.583 0 10.124-4.516 10.127-10.07.001-2.69-1.04-5.217-2.93-7.11a9.904 9.904 0 0 0-7.114-2.923C5.79 1.5 1.25 6.012 1.248 11.562c-.001 1.743.46 3.447 1.34 4.954L1.7 20.25l3.877-1.017c1.478.858 3.023 1.31 4.542 1.31h.005l.525-.091z" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-xs font-bold text-emerald-950 uppercase tracking-wider">Direct WhatsApp Procurement</h3>
                    <span className="text-[10px] text-emerald-600 font-extrabold uppercase tracking-widest font-mono">Instant Response Desk</span>
                  </div>
                </div>
                <span className="bg-emerald-500 text-white font-mono text-[8px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider animate-pulse">
                  Online
                </span>
              </div>
              
              <p className="text-xs text-slate-600 leading-relaxed font-sans pl-1">
                Skip standard email delays! Click to start a live negotiation chat on WhatsApp with our commercial dispatch directors regarding custom sizing specifications, blueprints, or wholesale volume quotations.
              </p>

              <div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-5 rounded-2xl text-xs font-black tracking-widest uppercase transition-all shadow-md shadow-emerald-500/20 flex items-center justify-center gap-2 hover:scale-[1.01] font-mono"
                >
                  <MessageSquare className="h-4 w-4" />
                  Initiate Instant WhatsApp Inquiry
                </a>
              </div>
            </motion.div>

            {/* Trading Facility Address Card */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-3xl border border-indigo-50 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all space-y-3"
            >
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-600 animate-pulse">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-xs font-bold text-indigo-950 uppercase tracking-wider">Manufacturing &amp; Trading Plant</h3>
                  <p className="text-[10px] text-slate-400">Delhi, India</p>
                </div>
              </div>
              <p className="text-sm text-slate-650 leading-relaxed font-sans pl-1 text-slate-600">
                <strong>Hitesh Ritesh &amp; Co.</strong><br />
                L-19, Sector-1, DSIIDC, Bawana Industrial Area,<br />
                Delhi-110039, India.
              </p>
            </motion.div>

            {/* Operating Standard Hours Card */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="p-6 rounded-3xl border border-indigo-50 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all space-y-3"
            >
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-600">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-xs font-bold text-indigo-950 uppercase tracking-wider">Active Standard Hours</h3>
                  <p className="text-[10px] text-slate-400 block font-mono">Delhi Time (IST) • GMT+5:30</p>
                </div>
              </div>
              <div className="font-sans text-xs text-slate-600 pl-1 space-y-1.5">
                <div className="flex justify-between border-b border-indigo-50/40 pb-1">
                  <span>Monday – Saturday</span>
                  <span className="font-bold text-indigo-950">9:30 AM – 6:30 PM (IST)</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday &amp; Gazetted Holidays</span>
                  <span className="text-orange-500 font-bold uppercase tracking-wider text-[10px]">Registry Off duty</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Embedded Real Google Map & Overlay Highlights */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 rounded-[2.5rem] border border-slate-200/50 bg-slate-100 flex flex-col justify-between overflow-hidden relative min-h-[450px]"
          >
            {/* Real Interactive Google Maps Iframe showing Bawana Industrials Delhi */}
            <div className="absolute inset-0 z-0">
              <iframe
                title="Google Map HRC Bawana Delhi"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13982.684534720612!2d77.0431234!3d28.8183124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390da92c90606bcf%3A0xb351ab647e30d17e!2sSector%201%2C%20Bawana%20Industrial%20Area%2C%20Bawana%2C%20Delhi%2C%20110039!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Overlap Map Info Label */}
            <div className="relative z-10 m-4 p-4 rounded-2xl bg-indigo-950/90 text-white backdrop-blur-sm border border-indigo-800 shadow-xl max-w-sm space-y-2">
              <span className="text-[10px] font-mono font-bold text-orange-400 uppercase tracking-widest block">
                BAWANA PLANT COORDINATES
              </span>
              <p className="text-xs font-bold leading-tight text-white">
                L-19, Sector 1, Bawana Industrial Area, Delhi-110039
              </p>
              <div className="flex items-center gap-1.5 text-[10px] text-indigo-200">
                <Map className="h-3.5 w-3.5 text-orange-400 shrink-0" />
                <span>Sector-1, DSIIDC, Delhi, 110039, India</span>
              </div>
            </div>

            {/* Map action bar footer pointing to direct map coordinates redirect */}
            <div className="relative z-10 m-4 p-4 rounded-xl bg-indigo-950 text-white flex justify-between items-center bg-gradient-to-r from-indigo-950 to-indigo-900 border border-indigo-800/55 shadow-lg">
              <div className="space-y-0.5">
                <span className="text-[9px] font-mono font-bold text-orange-400 uppercase block">Logistics Dispatch Coordinate</span>
                <span className="text-xs font-sans">Open external directions map</span>
              </div>
              <a
                href="https://maps.google.com/?q=L-19+Sector+1+Bawana+Industrial+Area+Delhi-110039"
                target="_blank"
                rel="noreferrer"
                className="bg-orange-500 hover:bg-orange-650 text-white p-2.5 rounded-xl transition-colors flex items-center justify-center shadow-lg cursor-pointer"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
