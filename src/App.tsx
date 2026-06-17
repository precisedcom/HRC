/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Building2, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  Menu, 
  X, 
  PhoneCall,
  Home,
  ChevronRight,
  Factory,
  Globe,
  Award,
  Layers,
  Wrench,
  ShieldCheck,
  MessageSquare
} from 'lucide-react';
import HRCLogo from './components/HRCLogo';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import ManufacturingInfrastructure from './components/ManufacturingInfrastructure';
import Exports from './components/Exports';
import ContactUs from './components/ContactUs';
import InquiryForm from './components/InquiryForm';
import IndustriesServed from './components/IndustriesServed';
import HomeSlider from './components/HomeSlider';
import KhaasPremiumBanner from './components/KhaasPremiumBanner';
import KhaasLogo from './components/KhaasLogo';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [selectedInquiryProduct, setSelectedInquiryProduct] = useState<string>('');

  // Smooth scroll handler
  const scrollSection = (id: string) => {
    setMobileMenuOpen(false);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBannerInquiry = (productName: string) => {
    setSelectedInquiryProduct(productName);
    scrollSection('inquiry-form-section');
  };

  // The 7 standard navigation channels
  const navigationLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about-us' },
    { label: 'Products', id: 'products' },
    { label: 'Infrastructure', id: 'manufacturing-infrastructure' },
    { label: 'Exports', id: 'exports' },
    { label: 'Contact Us', id: 'contact-us' },
    { label: 'Inquiry Form', id: 'inquiry-form-section' }
  ];

  return (
    <div id="home" className="min-h-screen bg-slate-50/50 font-sans text-slate-800 antialiased overflow-x-hidden selection:bg-orange-500/20 selection:text-indigo-950">
      
      {/* 1. Header Navigation Bar (7 menus / portals) */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          
          {/* Logo brand click directs back home top */}
          <div className="cursor-pointer" onClick={() => scrollSection('home')}>
            <HRCLogo className="h-10 md:h-12" showText={true} />
          </div>

          {/* Desktop Navigation links */}
          <nav className="hidden xl:flex items-center gap-1.5 font-medium">
            {navigationLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => scrollSection(link.id)}
                className="text-xs font-black text-slate-600 hover:text-indigo-650 hover:bg-slate-100/60 px-3 py-2 rounded-xl transition-all cursor-pointer font-sans uppercase tracking-wider"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Direct Procurement CTA Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => scrollSection('inquiry-form-section')}
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 px-5 rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-950/10 flex items-center gap-1.5 hover:scale-[1.02] cursor-pointer"
            >
              <PhoneCall className="h-3.5 w-3.5" />
              Inquire Now
            </button>
          </div>

          {/* Mobile Menu Icon Toggle */}
          <div className="flex xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-650 hover:text-indigo-600 p-2 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>

        {/* Mobile menu navigation links */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="xl:hidden bg-white border-b border-indigo-50 p-4 space-y-2 shadow-lg"
            >
              {navigationLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollSection(link.id)}
                  className="w-full text-left py-2.5 px-3.5 text-sm font-bold rounded-lg text-slate-700 hover:bg-indigo-50/50 hover:text-indigo-600 transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </button>
              ))}
              <div className="pt-2 border-t border-indigo-50">
                <button
                  onClick={() => scrollSection('inquiry-form-section')}
                  className="w-full text-center bg-indigo-650 hover:bg-indigo-750 text-white py-3 rounded-lg text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="h-4 w-4" />
                  Submit Bulk Inquiry
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Top Banner highlight ribbon */}
      <section className="bg-gradient-to-r from-indigo-950 to-orange-500 text-white py-2.5 px-4 text-center text-[10px] md:text-xs font-medium tracking-wide shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-1.5">
          <span>⚙️ <strong>Hitesh Ritesh &amp; Co.:</strong> Delivering International Standard Automotive Components &amp; Exhausts since 1995.</span>
          <span className="hidden sm:inline">|</span>
          <span className="text-orange-200 font-bold uppercase tracking-wider">Delhi, India Trade HQ</span>
        </div>
      </section>

      {/* Flagship Khaas Gold Auto-Rickshaw banner requested by the user */}
      <KhaasPremiumBanner onInquire={handleBannerInquiry} />

      {/* HOME / HERO Slider Banner */}
      <HomeSlider onNavigate={scrollSection} />

      {/* 2. About Us Portal Section */}
      <AboutUs />

      {/* 3. Products Portal Section */}
      <Products onInquire={handleBannerInquiry} />

      {/* 4. Manufacturing Infrastructure Portal Section */}
      <ManufacturingInfrastructure />

      {/* 5. Exports Portal Section */}
      <Exports />

      {/* Extra: Industries Served Sector Applications */}
      <IndustriesServed />

      {/* 6. Contact Us Portal Section (with google maps & whatsapp integrations) */}
      <ContactUs />

      {/* 7. Inquiry Form Section */}
      <InquiryForm selectedProduct={selectedInquiryProduct} />

      {/* Premium Footer */}
      <footer className="bg-indigo-950 text-white pt-16 pb-8 border-t-4 border-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Logo Column */}
            <div className="md:col-span-5 space-y-5">
              <div className="flex flex-wrap items-center gap-4">
                <HRCLogo className="h-9 contrast-125 shrink-0" showText={true} />
                <span className="h-6 w-px bg-indigo-900 hidden sm:inline" />
                <KhaasLogo className="h-9 shrink-0" />
              </div>
              <p className="text-xs text-indigo-200 max-w-sm leading-relaxed font-sans mt-3">
                Since 1995, HITESH RITESH &amp; CO. has refined the science of heavy-duty auto exhaust. Recognized as a premier Indian wholesale supplier and trader of auto spare components, silencers, and bend pipes.
              </p>
            </div>

            {/* Link column 1 - Smooth directions */}
            <div className="md:col-span-3 space-y-3.5">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-400 block font-mono">
                Index Portals
              </span>
              <div className="space-y-2 text-xs text-indigo-200 flex flex-col items-start font-sans font-medium">
                <button onClick={() => scrollSection('home')} className="hover:text-white transition-colors cursor-pointer block">Home</button>
                <button onClick={() => scrollSection('about-us')} className="hover:text-white transition-colors cursor-pointer block">About Corporate</button>
                <button onClick={() => scrollSection('products')} className="hover:text-white transition-colors cursor-pointer block">Products Catalog</button>
                <button onClick={() => scrollSection('manufacturing-infrastructure')} className="hover:text-white transition-colors cursor-pointer block">Infrastructure &amp; QA</button>
                <button onClick={() => scrollSection('exports')} className="hover:text-white transition-colors cursor-pointer block">Exports Routing</button>
                <button onClick={() => scrollSection('contact-us')} className="hover:text-white transition-colors cursor-pointer block text-orange-400">Contact Us (WhatsApp)</button>
              </div>
            </div>

            {/* Trade Info Column */}
            <div className="md:col-span-4 space-y-3.5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F97316] text-orange-400 block font-mono">
                Trade Logistics Info
              </span>
              <p className="text-xs text-indigo-200 leading-relaxed font-sans">
                Registered Exporter: Delhi, Delhi, India.<br />
                Direct cargo dispatches processed to Mumbai Port (JNPT).<br />
                All assemblies are compliant with international metallurgical weld ratings.
              </p>
            </div>

          </div>

          {/* Copyright bottom segment */}
          <div className="pt-8 border-t border-indigo-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-indigo-305 text-indigo-300 font-mono">
            <span>© {new Date().getFullYear()} HITESH RITESH &amp; CO. All Rights Reserved.</span>
            <div className="flex gap-4">
              <span>Standard ISO Supplier 9001:2015</span>
              <span>•</span>
              <span>Bulk Wholesalers</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
