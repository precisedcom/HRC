/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  PhoneCall, 
  Sparkles, 
  Factory, 
  Award, 
  Globe, 
  CheckCircle2 
} from 'lucide-react';

interface Slide {
  id: number;
  image: string;
  highlight: string;
  title: string;
  description: string;
  primaryAction: string;
  primaryText: string;
  secondaryAction: string;
  secondaryText: string;
  icon: React.ReactNode;
}

interface HomeSliderProps {
  onNavigate: (id: string) => void;
}

export default function HomeSlider({ onNavigate }: HomeSliderProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const slides: Slide[] = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1600",
      highlight: "Established 1995 • Delhi, India",
      title: "Precision Auto Exhausts & 3-Wheeler Silencers",
      description: "We manufacture and trade export-quality noise-reduction silencers, CNC bend pipes, and premium vehicle exhaust assemblies built for lasting durability.",
      primaryAction: "products",
      primaryText: "Explore Products",
      secondaryAction: "inquiry-form-section",
      secondaryText: "Request Bulk Quote",
      icon: <Factory className="h-4 w-4 text-orange-400" />
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600",
      highlight: "CNC Mandrel Bending • Automated Welding",
      title: "High-Performance Industrial Infrastructure",
      description: "Utilizing CNC mandrel benders and robotic MIG seam welders to achieve perfectly rigid joints, uniform pipe walls, and precise gas flow acoustics.",
      primaryAction: "manufacturing-infrastructure",
      primaryText: "Our Infrastructure",
      secondaryAction: "about-us",
      secondaryText: "About Corporate",
      icon: <Award className="h-4 w-4 text-orange-400" />
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1600",
      highlight: "Worldwide Shipping Logistics Hub",
      title: "Seamless Global Bulk Export Channels",
      description: "Secure moisture-proof packaging, comprehensive custom documents, and direct port dispatches to South Asia, East Africa, and Latin America.",
      primaryAction: "exports",
      primaryText: "Global Trade Route",
      secondaryAction: "inquiry-form-section",
      secondaryText: "Submit Bulk Inquiry",
      icon: <Globe className="h-4 w-4 text-orange-400" />
    }
  ];

  // Auto slider effect
  useEffect(() => {
    if (!isHovered) {
      autoPlayTimerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [isHovered, slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div 
      className="relative w-full h-[520px] md:h-[620px] lg:h-[680px] bg-indigo-950 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides Representation */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          {slides.map((slide, index) => {
            if (index !== currentSlide) return null;
            return (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full"
              >
                {/* Background Image with Dark Vignette Overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                
                {/* Dynamic gradient scrim to secure visual readable contrast ratios */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-950 via-indigo-950/85 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/90 via-transparent to-indigo-950/40" />

                {/* Content Container */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
                  <div className="max-w-2xl lg:max-w-3xl space-y-6 text-left">
                    
                    {/* Slide Highlight Label */}
                    <motion.div 
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 px-3.5 py-1.5 rounded-full text-xs font-black text-orange-200 uppercase tracking-widest font-mono"
                    >
                      {slide.icon}
                      <span>{slide.highlight}</span>
                    </motion.div>

                    {/* Slide Main Heading */}
                    <motion.h1 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] font-sans text-shadow-sm"
                    >
                      {slide.title}
                    </motion.h1>

                    {/* Slide Description */}
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="text-base sm:text-lg text-indigo-150 leading-relaxed font-sans text-indigo-100 max-w-xl"
                    >
                      {slide.description}
                    </motion.p>

                    {/* Slide Trigger Buttons */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="flex flex-col sm:flex-row gap-3 pt-4"
                    >
                      <button
                        onClick={() => onNavigate(slide.primaryAction)}
                        className="bg-orange-500 hover:bg-orange-600 text-white py-3.5 px-6 rounded-xl text-xs font-extrabold tracking-wider uppercase transition-all shadow-xl shadow-orange-500/20 flex items-center justify-center gap-2 group cursor-pointer"
                      >
                        {slide.primaryText}
                        <ArrowRight className="h-4 w-4 transform group-hover:translate-x-0.5 transition-transform" />
                      </button>
                      <button
                        onClick={() => onNavigate(slide.secondaryAction)}
                        className="bg-indigo-950/60 border border-indigo-700/60 hover:bg-indigo-900 text-white py-3.5 px-6 rounded-xl text-xs font-extrabold tracking-wider uppercase transition-all text-center flex items-center justify-center gap-2 backdrop-blur-sm cursor-pointer"
                      >
                        <PhoneCall className="h-3.5 w-3.5 text-orange-400" />
                        {slide.secondaryText}
                      </button>
                    </motion.div>

                  </div>
                </div>

              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Manual Slide Navigation Control Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-indigo-950/50 hover:bg-orange-500 border border-indigo-800/40 text-white flex items-center justify-center transition-all duration-300 pointer-events-auto cursor-pointer focus:outline-none hover:scale-105 active:scale-95"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-indigo-950/50 hover:bg-orange-500 border border-indigo-800/40 text-white flex items-center justify-center transition-all duration-300 pointer-events-auto cursor-pointer focus:outline-none hover:scale-105 active:scale-95"
        aria-label="Next Slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Bottom slide pagination dots indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2.5 items-center bg-indigo-950/40 px-4 py-2 rounded-full backdrop-blur-sm border border-indigo-800/30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2.5 transition-all duration-300 rounded-full cursor-pointer focus:outline-none ${
              idx === currentSlide ? 'w-8 bg-orange-500 shadow-md shadow-orange-500/20' : 'w-2.5 bg-indigo-400/50 hover:bg-indigo-200'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </div>
  );
}
