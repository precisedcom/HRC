/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Send, 
  User, 
  Building, 
  Hash, 
  MessageSquare, 
  CheckCircle2, 
  X, 
  Package, 
  Sparkles, 
  ChevronRight,
  PhoneCall
} from 'lucide-react';

interface InquiryFormProps {
  selectedProduct?: string;
}

export default function InquiryForm({ selectedProduct }: InquiryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    productType: 'silencer',
    volume: '500_1000',
    message: ''
  });

  // Pre-fill effect if a product is selected
  useEffect(() => {
    if (selectedProduct) {
      setFormData((prev) => ({
        ...prev,
        productType: 'silencer',
        message: `Hello Hitesh Ritesh & Co., I am interested in procuring a bulk wholesale quotation for the flagship "${selectedProduct}". Please share raw specification details, shipping logistics timeline, and bulk pricing tiers.`
      }));
    }
  }, [selectedProduct]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.company.trim()) newErrors.company = 'Company Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address format';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required for bulk verification';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Please specify your requirements or part specifications';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate server side processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Generate a nice simulated Indian Export reference ID
      const generatedRef = `HRC-EXP-95-${Math.floor(1000 + Math.random() * 9000)}`;
      setReferenceId(generatedRef);
    }, 1100);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      productType: 'silencer',
      volume: '500_1000',
      message: ''
    });
    setErrors({});
    setSubmitSuccess(false);
    setReferenceId('');
  };

  return (
    <section id="inquiry-form-section" className="py-20 bg-slate-50 border-t border-indigo-50 relative overflow-hidden">
      {/* Visual background ambient light blobs */}
      <div className="absolute top-1/4 right-[5%] w-[420px] h-[420px] bg-indigo-500/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[5%] w-[380px] h-[380px] bg-orange-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-1.5 rounded-full text-xs font-bold text-orange-600 uppercase tracking-widest mb-4">
            <Mail className="h-3.5 w-3.5 text-orange-500" /> Commercial Dispatch Desk
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-indigo-950 tracking-tighter">
            Submit Trade Inquiry
          </h2>
          <p className="text-sm text-slate-500 mt-3 font-sans leading-relaxed">
            Specify your desired quantities, custom diameters, or OEM blueprints. Our Delhi export coordinators will compile a thorough quotation within 12 business hours.
          </p>
        </div>

        {/* Outer Form Container */}
        <div className="bg-white border border-indigo-50 rounded-3xl p-8 md:p-10 shadow-xl relative">
          
          <AnimatePresence mode="wait">
            {!submitSuccess ? (
              <motion.form 
                key="inquiry-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Full Name field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-indigo-950 uppercase tracking-wide block">
                      Contact Representative <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                        <User className="h-4 w-4" />
                      </span>
                      <input
                        type="text"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-sans focus:outline-none transition-all ${
                          errors.name 
                            ? 'border-red-400 focus:border-red-500 bg-red-50/10' 
                            : 'border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100'
                        }`}
                      />
                    </div>
                    {errors.name && <p className="text-red-500 text-[10px] font-bold font-mono pl-1">{errors.name}</p>}
                  </div>

                  {/* Company Name field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-indigo-950 uppercase tracking-wide block">
                      Registered Company Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                        <Building className="h-4 w-4" />
                      </span>
                      <input
                        type="text"
                        placeholder="AutoParts Logistics Ltd"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-sans focus:outline-none transition-all ${
                          errors.company 
                            ? 'border-red-400 focus:border-red-500 bg-red-50/10' 
                            : 'border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100'
                        }`}
                      />
                    </div>
                    {errors.company && <p className="text-red-500 text-[10px] font-bold font-mono pl-1">{errors.company}</p>}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-indigo-950 uppercase tracking-wide block">
                      Corporate Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                        <Mail className="h-4 w-4" />
                      </span>
                      <input
                        type="email"
                        placeholder="procurement@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-sans focus:outline-none transition-all ${
                          errors.email 
                            ? 'border-red-400 focus:border-red-500 bg-red-50/10' 
                            : 'border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100'
                        }`}
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-[10px] font-bold font-mono pl-1">{errors.email}</p>}
                  </div>

                  {/* Phone Number field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-indigo-950 uppercase tracking-wide block">
                      Phone Number &amp; Country Code <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                        <PhoneCall className="h-4 w-4 text-slate-400" />
                      </span>
                      <input
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-sans focus:outline-none transition-all ${
                          errors.phone 
                            ? 'border-red-400 focus:border-red-500 bg-red-50/10' 
                            : 'border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100'
                        }`}
                      />
                    </div>
                    {errors.phone && <p className="text-red-500 text-[10px] font-bold font-mono pl-1">{errors.phone}</p>}
                  </div>

                  {/* Product Category Interest Dropdown */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-indigo-950 uppercase tracking-wide block">
                      Primary Products of Interest
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 pointer-events-none">
                        <Package className="h-4 w-4" />
                      </span>
                      <select
                        value={formData.productType}
                        onChange={(e) => setFormData({...formData, productType: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm font-sans focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 bg-white"
                      >
                        <option value="silencer">3-Wheeler Silencers (Standard / High-volume)</option>
                        <option value="auto_parts">Export Auto Parts &amp; Metallurgic Accessories</option>
                        <option value="bend_pipes">Heavy Radii CNC Bend Pipes</option>
                        <option value="custom_oem">Custom Fabricated OEM Exhaust Fittings</option>
                      </select>
                    </div>
                  </div>

                  {/* Volume selectors */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-indigo-950 uppercase tracking-wide block">
                      Anticipated Wholesale Volume
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 pointer-events-none">
                        <Hash className="h-4 w-4" />
                      </span>
                      <select
                        value={formData.volume}
                        onChange={(e) => setFormData({...formData, volume: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm font-sans focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 bg-white"
                      >
                        <option value="small_bulk">Evaluation Sample (10 to 100 units)</option>
                        <option value="100_500">Medium Batch (100 to 500 units)</option>
                        <option value="500_1000">Heavy Wholesale (500 to 1,000 units)</option>
                        <option value="1000_above">Global Importer Dispatch (1,000+ units)</option>
                      </select>
                    </div>
                  </div>

                </div>

                {/* Message detail specification */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-indigo-950 uppercase tracking-wide block">
                    Detailed Sizing Specifications or Request Message <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute top-3 left-3.5 text-slate-400">
                      <MessageSquare className="h-4 w-4" />
                    </span>
                    <textarea
                      rows={4}
                      placeholder="Please enter model compatibility (e.g. Bajaj RE 4-Stroke Silencers), pipe diameter requirements, specific radii bends, destination port details, or custom tooling needs..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-sans focus:outline-none transition-all ${
                        errors.message 
                          ? 'border-red-400 focus:border-red-500 bg-red-50/10' 
                          : 'border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100'
                      }`}
                    />
                  </div>
                  {errors.message && <p className="text-red-500 text-[10px] font-bold font-mono pl-1">{errors.message}</p>}
                </div>

                {/* Submit button selection */}
                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3.5 px-8 rounded-xl text-xs font-bold tracking-widest uppercase transition-all shadow-lg shadow-orange-500/20 cursor-pointer flex items-center justify-center gap-2 hover:scale-[1.01] ${
                      isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Securing Pipeline...
                      </>
                    ) : (
                      <>
                        Transmit Official Inquiry
                        <Send className="h-3.5 w-3.5" />
                      </>
                    )}
                  </button>
                </div>

              </motion.form>
            ) : (
              <motion.div 
                key="success-container"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                tabIndex={-1}
                className="py-8 text-center space-y-6"
              >
                <div className="inline-flex h-16 w-16 bg-emerald-50 border border-emerald-100 rounded-full items-center justify-center text-emerald-500">
                  <CheckCircle2 className="h-10 w-10" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-indigo-950">
                    Trade Proposal Transmitted!
                  </h3>
                  <p className="text-xs font-mono font-bold text-orange-600 flex items-center justify-center gap-1">
                    <Sparkles className="h-3.5 w-3.5 text-orange-500 animate-pulse" />
                    REFERENCE ID: {referenceId}
                  </p>
                  <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed font-sans">
                    Thank you for contacting <strong>Hitesh Ritesh &amp; Co.</strong> Your request has been queued at our Delhi dispatch coordinate registry. An export specialist will email custom quotation pricing models to <strong>{formData.email}</strong> shortly.
                  </p>
                </div>

                <div className="pt-4 border-t border-indigo-50 max-w-sm mx-auto flex gap-3">
                  <a
                    href="mailto:soniahitesh.arora177@gmail.com"
                    className="flex-1 border border-slate-200 hover:bg-slate-50 text-slate-700 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-center"
                  >
                    Email HQ Directly
                  </a>
                  <button
                    onClick={handleReset}
                    type="button"
                    className="flex-1 bg-indigo-650 hover:bg-indigo-750 text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    Submit Another
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
