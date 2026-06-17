/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Settings, 
  Package, 
  Wrench, 
  Layers, 
  Flame, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  ShieldCheck,
  CheckCircle,
  Search,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

type ProductCategory = 'all' | 'silencer' | 'bend_pipe' | 'trailing_arm';

interface ProductsProps {
  onInquire?: (productName: string) => void;
}

export default function Products({ onInquire }: ProductsProps) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');

  const productTabs = [
    { id: 'all', label: 'All Catalog (36)' },
    { id: 'silencer', label: 'Silencers & Assemblies' },
    { id: 'bend_pipe', label: 'Bend & Tail Pipes' },
    { id: 'trailing_arm', label: 'Trailing Arms / Suspension' }
  ];

  const productsData = [
    {
      id: 1,
      category: 'silencer',
      title: '1. Silencer Bend Bajaj CNG 4st N/M',
      desc: 'High-performance integrated exhaust silencer canister pre-fitted with optimized front-end gas-dynamics bend pipe for Bajaj 4-Stroke CNG (New Model).',
      sku: 'HRC-SIL-01',
      specs: [
        'Vehicle: Bajaj 3W CNG RE 4-Stroke (New Model)',
        'Unified pre-welded rigid layout preventing split cracks',
        '8-bar smoke-pressure certified zero-leakage canister',
        'Finished in high-temperature curing black carbon-coating'
      ],
      badge: 'Bestseller'
    },
    {
      id: 2,
      category: 'bend_pipe',
      title: '2. Tail Pipe With Jaali 5 Port',
      desc: 'Heavy-gauge auxiliary tailpipe extension featuring precision-drilled internal noise-dampening Jaali barriers for 5-Port engine blocks.',
      sku: 'HRC-TLP-02',
      specs: [
        'Engine compatibility: 5-Port heavy combustion runs',
        'Built-in internal sound-dispersion Jaali system',
        'Reduces sharp sound crackles without trapping heat exhaust',
        'CNC milled mounting surface interface'
      ],
      badge: 'Spec Fit'
    },
    {
      id: 3,
      category: 'bend_pipe',
      title: '3. Bend Pipe 5 Port',
      desc: 'Form-focused heavy-walled front bend pipe connector engineered to facilitate non-restricted primary exhaust delivery from 5-Port engines.',
      sku: 'HRC-BDP-03',
      specs: [
        'Engine Class: 3-Wheeler 5-Port platforms',
        'Curvature: Fully smooth mandrel bended structure',
        'Prevents hot-gas blockages & optimizes engine cycle',
        'Constructed of robust 1.8mm heavy cold-rolled iron'
      ],
      badge: 'Perfect Bend'
    },
    {
      id: 4,
      category: 'bend_pipe',
      title: '4. Bend Pipe 5 Port 2010 Model',
      desc: 'Vintage-specific engine connection bend pipe precisely bended to fit the body clearance structure of the 5-Port 2010 model series.',
      sku: 'HRC-BDP-04',
      specs: [
        'Vintage Range: 2010 Model 5-Port autorickshaws',
        'Perfect structural offset to pass frame bars safely',
        'Pre-gasketed high-pressure coupling plate',
        'Oven-baked anti-rust primer coat protection'
      ],
      badge: 'Custom OEM'
    },
    {
      id: 5,
      category: 'silencer',
      title: '5. Silencer Compact 2 Stroke',
      desc: 'Low-impedance retrofitted exhaust silencer designed to sustain necessary expansion-chamber scavenge backpressure on compact 2-Stroke engines.',
      sku: 'HRC-SIL-05',
      specs: [
        'Power Unit: 2-Stroke Compact engine fleets',
        'Dual-expansion chamber acoustic design',
        'Optimized for perfect fuel-air scavenge efficiency',
        'High structural crash-tolerance outer plates'
      ],
      badge: 'Classic 2T'
    },
    {
      id: 6,
      category: 'bend_pipe',
      title: '6. Bend Pipe Compact 4 Stroke 2017 Model',
      desc: 'Standard replacement front-end bend pipe calibrated to align seamlessly with 2017 model compact 4-Stroke passenger auto-rickshaw builds.',
      sku: 'HRC-BDP-06',
      specs: [
        'Engine compatibility: Compact 4-Stroke (2017 Model)',
        'Mandrel bended to guarantee constant internal diameter',
        'Heavy-duty alloy connection flange blocks',
        'Salt-spray tested against road-water rust degradation'
      ],
      badge: 'High Precision'
    },
    {
      id: 7,
      category: 'silencer',
      title: '7. Silencer With Bend Compact BS3',
      desc: 'Highly reliable exhaust assembly combining a soundproofed silencer and direct manifold bend pipe, fully compliant with BS3 emission norms.',
      sku: 'HRC-SIL-07',
      specs: [
        'Emission rating: Bharat Stage III (BS3)',
        'Class: Compact 3W Passenger category',
        'Unitary pre-welded structure with no dynamic slip joints',
        'Packed inside moisture-proof premium export bubble cases'
      ],
      badge: 'BS3 Ready'
    },
    {
      id: 8,
      category: 'silencer',
      title: '8. Silencer Maxima BS3 Diesel',
      desc: 'Heavy-duty industrial diesel-grade silencer canister calibrated to handle extreme gas temperature runs of Bajaj Maxima BS3 diesel engines.',
      sku: 'HRC-SIL-08',
      specs: [
        'Vehicle fit: Bajaj Maxima Diesel categories',
        'Emission rating: Bharat Stage III (BS3 compliant)',
        'Thick internal steel partition walls to trap carbon soot',
        'Vibration dissipation mounting brackets'
      ],
      badge: 'Heavy Duty'
    },
    {
      id: 9,
      category: 'silencer',
      title: '9. Silencer Ape BS2',
      desc: 'Durable and heavy aftermarket replacement exhaust silencer housing engineered to fit Piaggio Ape BS2 commercial transporter configurations.',
      sku: 'HRC-SIL-09',
      specs: [
        'Vehicle: Piaggio Ape Diesel Cargo / Carrier',
        'Compliance: Bharat Stage II (BS2 models)',
        'Robust structural frame mounting alignment',
        'Cost-effective high-durability replacement solution'
      ],
      badge: 'OEM Classic'
    },
    {
      id: 10,
      category: 'bend_pipe',
      title: '10. Bend Pipe GC Max',
      desc: 'Severe-duty high-diameter diesel manifold bend connection pipe designed to withstand heavy payload vibration on GC Max cargo fleets.',
      sku: 'HRC-BDP-10',
      specs: [
        'Vehicle range: Piaggio Ape GC Max Commercial',
        'Enlarged exhaust bore for uninhibited thermal routing',
        'Cast heavy-gauge coupling plates',
        'Withstands severe payload suspension twisting'
      ],
      badge: 'Cargo Grade'
    },
    {
      id: 11,
      category: 'silencer',
      title: '11. Silencer GC Max New Model',
      desc: 'Advanced replacement silencer canister built to original factory specifications for GC Max cargo transports (New Model editions).',
      sku: 'HRC-SIL-11',
      specs: [
        'Vehicle Category: GC Max (New Model)',
        'Enhanced internal particulate dissipation architecture',
        'Equipped with pre-aligned secure chassis hook brackets',
        'Electroplated with premium carbon-black finish'
      ],
      badge: 'Premium Build'
    },
    {
      id: 12,
      category: 'silencer',
      title: '12. Silencer Ape City CNG/Petrol BS3',
      desc: 'Acoustically optimized silencer canister designed specifically for multi-fuel (CNG/Petrol) Piaggio Ape City BS3 passenger fleets.',
      sku: 'HRC-SIL-12',
      specs: [
        'Vehicle model: Piaggio Ape City CNG / Petrol combo',
        'Compliance: Bharat Stage III (BS3)',
        'Tolerates extreme CNG combustion heat spikes effortlessly',
        'Baffled flow minimizes noisy popping sounds'
      ],
      badge: 'Multi-Fuel'
    },
    {
      id: 13,
      category: 'silencer',
      title: '13. Silencer Ape City CNG/Petrol BS4',
      desc: 'Upgraded high-pressure capacity silencer canister matching strict BS4 environmental constraints for Piaggio Ape City vehicles.',
      sku: 'HRC-SIL-13',
      specs: [
        'Vehicle: Piaggio Ape City CNG/Petrol editions',
        'Compliance: Bharat Stage IV (BS4)',
        'Built-in simulated catalytic mock chamber framework',
        'Dual-wall insulation layers reduce ambient skin temperatures'
      ],
      badge: 'BS4 Standard'
    },
    {
      id: 14,
      category: 'silencer',
      title: '14. Silencer With Bend Pipe Compact BS4',
      desc: 'Acoustically superior integrated exhaust system with pre-joined manifold bend pipe, engineered for BS4 class compact auto-rickshaws.',
      sku: 'HRC-SIL-14',
      specs: [
        'Compliance: Bharat Stage IV (BS4)',
        'Design fit: Compact Class 3W Autorickshaws',
        'Continuous automatic seam welds avoid pinhole leakage',
        'Fully integrated layout simplifies field installations'
      ],
      badge: 'BS4 High-Flow'
    },
    {
      id: 15,
      category: 'silencer',
      title: '15. Silencer With Bend TVS King 4 Stroke Old Model',
      desc: 'Original replacement exhaust silencer with factory-calibrated integrated bend pipe matching legacy 4-Stroke TVS King models.',
      sku: 'HRC-SIL-15',
      specs: [
        'Vehicle Compatibility: TVS King 4-Stroke (Old Model)',
        'Unified exhaust package pre-aligned to standard hangers',
        'Excellent sound absorption reduces environmental noise',
        'Robust steel connection collar plates'
      ],
      badge: 'Legacy Swap'
    },
    {
      id: 16,
      category: 'bend_pipe',
      title: '16. Bend Pipe Ape BS4',
      desc: 'Perfect replacement manifold bend pipe shaped via digital CNC mandrel bending for Piaggio Ape BS4 compliant diesel models.',
      sku: 'HRC-BDP-16',
      specs: [
        'Vehicle fit: Piaggio Ape BS4 Diesel commercial units',
        'Zero-wrinkle internal curve keeps gas flow smooth',
        'Thick 2.0mm steel walls resist thermal expansion stress',
        'Accurately set bolt alignment holes'
      ],
      badge: 'Perfect Fit'
    },
    {
      id: 17,
      category: 'bend_pipe',
      title: '17. Bend Pipe Ape BS3',
      desc: 'Excellent durability replacement bend pipe designed to bridge exhaust manifolds on Piaggio Ape BS3 cargo or passenger variants.',
      sku: 'HRC-BDP-17',
      specs: [
        'Vehicle fit: Piaggio Ape BS3 engines',
        'Formed under precision hydraulic bending systems',
        'Includes pre-treated leak-resistant joint flanging',
        'High chemical resistance barrier spray coating'
      ],
      badge: 'BS3 Core'
    },
    {
      id: 18,
      category: 'silencer',
      title: '18. Silencer Maxima BS4 Diesel',
      desc: 'Heavy-gauge reinforced diesel exhaust silencer configured to suppress sharp noise levels of Bajaj Maxima BS4 utility diesel variants.',
      sku: 'HRC-SIL-18',
      specs: [
        'Vehicle compatibility: Bajaj Maxima Diesel fleets',
        'Compliance: Bharat Stage IV (BS4 standards)',
        'Multi-stage baffle design suppresses high-pitch engine note',
        'Strong exterior support brackets'
      ],
      badge: 'Diesel Spec'
    },
    {
      id: 19,
      category: 'silencer',
      title: '19. Silencer With Bend Pipe BS7',
      desc: 'Flagship ultra-clean emission-compliant exhaust system featuring specialized premium internal coatings and integrated high-flow bend. BS7 standard.',
      sku: 'HRC-SIL-19',
      specs: [
        'Compliance: Latest Bharat Stage VII / OBDI standards',
        'Zero-restriction fluid dynamics maintain engine torque',
        'Stainless steel internal lining resists corrosion',
        'Includes sensor port preparation threads'
      ],
      badge: 'Khaas BS7 Premium'
    },
    {
      id: 20,
      category: 'silencer',
      title: '20. Silencer TVS King 2 Stroke',
      desc: 'Aftermarket engine backpressure tuned exhaust silencer canister designed specifically for TVS King 2-Stroke vehicle fleets.',
      sku: 'HRC-SIL-20',
      specs: [
        'Vehicle: TVS King 2-Stroke autorickshaws',
        'Calibrated expansion profile preserves 2T power curves',
        'Tough steel wrap structure handles excessive high rev logs',
        'Smooth exhaust tail vent'
      ],
      badge: '2T Special'
    },
    {
      id: 21,
      category: 'silencer',
      title: '21. Silencer 5 Port',
      desc: 'Universal profile replacement silencer core calibrated to harmonize backpressures on standard 5-Port 3-Wheeler petrol engines.',
      sku: 'HRC-SIL-21',
      specs: [
        'Engine: 5-Port 3W Petrol/CNG configurations',
        'Balances high rev sound-waves with low engine-strain',
        'Manufactured on automated roll-seam welding rigs',
        'Durable bracket weld junctions'
      ],
      badge: '5-Port Core'
    },
    {
      id: 22,
      category: 'bend_pipe',
      title: '22. Bend Pipe Compact 2 Stroke',
      desc: 'High expansion wave speed bend pipe specifically calibrated to improve scavenge loops on compact 2-Stroke autorickshaw engines.',
      sku: 'HRC-BDP-22',
      specs: [
        'Engine compatibility: 2-Stroke Compact powerheads',
        'Accurately determined wave length routing',
        'High torque connection flange blocks',
        'Internal surfaces resist soot deposit build-ups'
      ],
      badge: 'Performance 2T'
    },
    {
      id: 23,
      category: 'silencer',
      title: '23. Silencer With Bend Compact BS6',
      desc: 'Flagship standard eco-friendly emission exhaust system. Seamless integrated bend pipe and quiet canister design, BS6 certified.',
      sku: 'HRC-SIL-23',
      specs: [
        'Compliance: Bharat Stage VI (BS6 / OBD II compliant)',
        'Series: Compact 3-Wheelers',
        'Pre-welded high-insulation heat protection plates',
        'Integrated diagnostic gas sensor hook points'
      ],
      badge: 'Khaas BS6 Gold'
    },
    {
      id: 24,
      category: 'silencer',
      title: '24. Silencer With Bend Compact BS4',
      desc: 'Integrated layout replacement exhaust system combining silencer and pre-fitted bend pipe for legacy BS4 compact autorickshaws.',
      sku: 'HRC-SIL-24',
      specs: [
        'Compliance: Bharat Stage IV (BS4)',
        'Model range: Compact 3W Passenger units',
        'Subject to rigorous 8-bar smoke-leak test checks',
        'Includes pre-ground mounting point rings'
      ],
      badge: 'Fleet Standard'
    },
    {
      id: 25,
      category: 'silencer',
      title: '25. Silencer With Bend RE Diesel',
      desc: 'Extremely durable pre-assembled silencer system and high-strength bend pipe prepared specifically for Bajaj RE Diesel transporters.',
      sku: 'HRC-SIL-25',
      specs: [
        'Vehicle: Bajaj RE Diesel platforms',
        'Heavy-duty expansion joints dissipate engine vibrations',
        'Soot-expelling baffle structure avoids blockage risk',
        'High material thickness gauge prevents shell cracks'
      ],
      badge: 'Severe Diesel'
    },
    {
      id: 26,
      category: 'silencer',
      title: '26. Silencer With Bend Compact BS7',
      desc: 'Next-gen exhaust formulation leveraging high sound-reduction parameters and direct-flow bend pipe matching BS7 standards.',
      sku: 'HRC-SIL-26',
      specs: [
        'Compliance: Bharat Stage VII (BS7)',
        'Chassis Type: Compact Passenger ranges',
        'Equipped with advanced multi-layer exhaust insulation',
        'Continuous robot MIG-welded joints'
      ],
      badge: 'Eco Smart'
    },
    {
      id: 27,
      category: 'silencer',
      title: '27. Silencer With Bend Compact BS4 (Variant B)',
      desc: 'Alternative mount alignment layout of our famous integrated BS4 compact silencer bundle. Outstanding aftermarket durability.',
      sku: 'HRC-SIL-27',
      specs: [
        'Compliance: Bharat Stage IV (BS4)',
        'Optimized for rapid fitment in generic workshops',
        'Includes all weather fitting gaskets and hardware',
        'Durable matte protective heat painting'
      ],
      badge: 'Standard Fit'
    },
    {
      id: 28,
      category: 'trailing_arm',
      title: '28. Trailing Arm TVS King 4 Stroke',
      desc: 'High-strength load-bearing suspension trailing arm component fabricated to exact original specifications for TVS King 4-Stroke chassis models.',
      sku: 'HRC-TA-28',
      specs: [
        'Vehicle fit: TVS King 4-Stroke series',
        'Material: Micro-alloy structural steel profiles',
        'Equipped with precision fitted vulcanized rubber silent bushes',
        'Tough weld integrity withstands extreme bad-road crashes'
      ],
      badge: 'Premium Chassis'
    },
    {
      id: 29,
      category: 'silencer',
      title: '29. Silencer With Bend Compact BS6 (Variant B)',
      desc: 'Variant installation configuration of the BS6 compact 3W integrated silencer and bend pipe package.',
      sku: 'HRC-SIL-29',
      specs: [
        'Compliance: Bharat Stage VI (BS6)',
        'Special chassis mounting offset for customized models',
        'Premium internal sound suppression wool insulation',
        'Fumes chemical-scrubbing mock lining'
      ],
      badge: 'Eco Classic'
    },
    {
      id: 30,
      category: 'trailing_arm',
      title: '30. Trailing Arm Compact 4 Stroke (Left Side)',
      desc: 'Critical rear suspension control arm for LHS assembly on compact 4-Stroke passenger vehicle configurations.',
      sku: 'HRC-TA-30',
      specs: [
        'Chassis placement: Left Hand Side (LHS) rear axle',
        'Class Compatibility: Compact 4-Stroke autorickshaws',
        'Coated in impact-resistant structural epoxy undercoat',
        'Engineered to resist lateral load displacement factors'
      ],
      badge: 'Axle Safe Left'
    },
    {
      id: 31,
      category: 'silencer',
      title: '31. Silencer With Bend TVS King 4 Stroke New Model',
      desc: 'Direct replacement exhaust silencer canister with pre-welded bend pipe engineered to exact parameters of current TVS King 4-Stroke lines.',
      sku: 'HRC-SIL-31',
      specs: [
        'Vehicle: TVS King 4-Stroke (New Model)',
        'Calibrated interior partitions maximize CNG combustion mileage',
        'Continuous seam welding avoids fatigue failure cracks',
        'Low ambient sound emission compliance'
      ],
      badge: 'TVS Flagship'
    },
    {
      id: 32,
      category: 'trailing_arm',
      title: '32. Trailing Arm Compact 4 Stroke (Right Side)',
      desc: 'Premium structural suspension swing arm for RHS assembly on compact 4-Stroke utility 3-Wheelers.',
      sku: 'HRC-TA-32',
      specs: [
        'Chassis placement: Right Hand Side (RHS) rear axle',
        'Fits: Compact 4-Stroke variants perfectly',
        'Tested for load cycles exceeding 500,000 deflection logs',
        'Original alignment guarantee reduces tire wear factors'
      ],
      badge: 'Axle Safe Right'
    },
    {
      id: 33,
      category: 'silencer',
      title: '33. Silencer With Bend TVS King 4 Stroke New Model (Variant B)',
      desc: 'Alternate design hanger plate mounting variant of the primary TVS King New Model silencer with bend pipe.',
      sku: 'HRC-SIL-33',
      specs: [
        'Vehicle model range: TVS King 4-Stroke New Model',
        'Alternate hanger bracket footprint for special body assemblies',
        'Extreme vibration-absorbing steel core',
        'Packaged in custom moisture-barrier heavy export sacks'
      ],
      badge: 'TVS Custom'
    },
    {
      id: 34,
      category: 'silencer',
      title: '34. Silencer Ape City CNG/Petrol BS6',
      desc: 'Ultra-quiet exhaust silencer canister designed specifically to align with current generation Ape City BS6 CNG/Petrol vehicles.',
      sku: 'HRC-SIL-34',
      specs: [
        'Vehicle: Piaggio Ape City Multi-Fuel CNG/Petrol',
        'Compliance: Bharat Stage VI (BS6 standards)',
        'Anti-acid rust-resistant double shell layers',
        'Restores original vehicle throttle response bounds'
      ],
      badge: 'BS6 Standard'
    },
    {
      id: 35,
      category: 'bend_pipe',
      title: "35. Ape BS3 and BS4 'J' Pipe",
      desc: "Heavy-industry classic 'J' shape curled exhaust exit bend pipe for Piaggio Ape BS3 and BS4 engines.",
      sku: 'HRC-BDP-35',
      specs: [
        'Vehicle fit: Piaggio Ape Diesel Cargo BS3 / BS4',
        "Precision matching 'J' hook radius retains steady gas wave speed",
        'Manufactured using CNC heavy cold mandrel forming benders',
        'Pre-treated thick flange mounts'
      ],
      badge: 'Classic J-Pipe'
    },
    {
      id: 36,
      category: 'silencer',
      title: '36. Silencer Ape BS3 and BS4',
      desc: 'Standard center replacement silencer canister built to restore original performance levels of Piaggio Ape BS3 & BS4 vehicles.',
      sku: 'HRC-SIL-36',
      specs: [
        'Vehicle compatibility: Piaggio Ape BS3 & BS4 commercial',
        'Provides perfect volumetric exhaust expansion',
        'Equipped with quick alignment mounting taps',
        'Durable under high vibration load stresses'
      ],
      badge: 'Reliable Swap'
    }
  ];


  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const searchedProducts = productsData.filter((p) => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch = 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.specs.some(spec => spec.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const totalItems = searchedProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
  
  // Ensure we don't end up on a page that doesn't exist anymore due to filtering
  const activePage = currentPage > totalPages ? totalPages : currentPage;
  
  const paginatedProducts = searchedProducts.slice((activePage - 1) * itemsPerPage, activePage * itemsPerPage);

  const handleInquireNow = (productTitle: string) => {
    if (onInquire) {
      onInquire(productTitle);
    } else {
      const el = document.getElementById('inquiry-form-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="products" className="py-20 bg-slate-50 border-t border-indigo-50 relative overflow-hidden scroll-mt-20">
      {/* Background visual cues */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full filter blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-indigo-500/5 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-1.5 rounded-full text-xs font-bold text-indigo-700 uppercase tracking-widest mb-4 font-mono">
            <Layers className="h-3.5 w-3.5 text-indigo-600" /> Exhaust Catalog
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-indigo-950 tracking-tighter">
            Our Prime Products
          </h2>
          <p className="text-sm md:text-base text-slate-500 mt-4 leading-relaxed font-sans">
            Meticulously mapped metallurgy, high pressure tolerance scales, and durable robotic welds represent our catalog values. Browse our five major industrial categories below.
          </p>
        </div>

        {/* Search and Tabs Layout Grid */}
        <div className="space-y-6 mb-12 border-b border-indigo-50/50 pb-8">
          {/* Search Bar Input */}
          <div className="max-w-xl mx-auto relative">
            <label htmlFor="catalog-search" className="sr-only">Search parts catalog</label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                id="catalog-search"
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search by vehicle, model, SKU, specification (e.g. BS3, BS6, Ape, Maxima)..."
                className="w-full pl-12 pr-12 py-3.5 bg-white border border-slate-250 rounded-2xl text-sm placeholder:text-slate-400 text-indigo-950 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent font-sans shadow-inner transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setCurrentPage(1);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                  title="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            {searchQuery && (
              <div className="text-center mt-2.5 text-xs text-slate-500 font-sans">
                Found <strong className="text-orange-600">{totalItems}</strong> matching parts matching your query.
              </div>
            )}
          </div>

          {/* Categories Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2">
            {productTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveCategory(tab.id as ProductCategory);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20 scale-[1.03]'
                    : 'bg-white text-slate-650 hover:bg-slate-100 hover:text-indigo-950 border border-slate-200/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* No Results Handling */}
        {paginatedProducts.length === 0 ? (
          <div className="bg-white rounded-3xl border border-indigo-50 p-12 text-center max-w-lg mx-auto shadow-sm">
            <Package className="h-12 w-12 text-slate-300 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-indigo-950">No Components Found</h4>
            <p className="text-xs text-slate-500 mt-2 max-w-xs mx-auto leading-relaxed">
              We couldn't locate any products matching "{searchQuery}" under the current category. Try widening your search words or clearing the filter entirely!
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
                setCurrentPage(1);
              }}
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700 hover:underline transition-all cursor-pointer font-sans"
            >
              Reset Filters
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        ) : (
          <>
            {/* Products Visual grid with animate presence */}
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {paginatedProducts.map((p) => (
                  <motion.div
                    layout
                    key={p.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-3xl border border-indigo-50 hover:border-orange-200/60 p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all group"
                  >
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-mono font-bold text-indigo-950 bg-indigo-50/80 px-2.5 py-1 rounded-full uppercase tracking-wider">
                          SKU: {p.sku}
                        </span>
                        <span className="text-[10px] font-bold text-orange-600 bg-orange-50/80 border border-orange-100 px-2.5 py-1 rounded-full uppercase tracking-wide">
                          {p.badge}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-xl font-bold font-sans text-indigo-950 group-hover:text-orange-600 transition-colors">
                          {p.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-550 leading-relaxed font-sans text-slate-500">
                          {p.desc}
                        </p>
                      </div>

                      {/* Detail Technical Specifications lists */}
                      <div className="pt-4 border-t border-indigo-50/50 space-y-2">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-mono">
                          Technical Spec Checklist
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {p.specs.map((spec, idx) => (
                            <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-650">
                              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span className="font-sans font-medium text-slate-600 text-[11px]">{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card CTA Trigger */}
                    <div className="pt-6 mt-6 border-t border-indigo-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <span className="text-[10px] font-bold text-indigo-950 uppercase tracking-wider block font-sans">
                        Available for Export &amp; Bulk Wholesaling
                      </span>
                      <button
                        onClick={() => handleInquireNow(p.title)}
                        className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700 hover:underline transition-all cursor-pointer font-sans"
                      >
                        Get volume pricing parameters
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Pagination Controls bar */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center items-center gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={activePage === 1}
                  className="p-2.5 rounded-xl border border-slate-200/60 bg-white text-indigo-950 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
                  title="Previous Page"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pgNum) => {
                    // Show dots or limit pagination on mobile if there are many pages
                    const isWithinRange = Math.abs(pgNum - activePage) <= 1 || pgNum === 1 || pgNum === totalPages;
                    if (!isWithinRange) {
                      if (pgNum === 2 || pgNum === totalPages - 1) {
                        return <span key={pgNum} className="px-1 text-slate-400">...</span>;
                      }
                      return null;
                    }
                    return (
                      <button
                        key={pgNum}
                        onClick={() => setCurrentPage(pgNum)}
                        className={`min-w-[40px] h-10 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          activePage === pgNum
                            ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                            : 'bg-white text-indigo-950 border border-slate-200/65 hover:bg-slate-50'
                        }`}
                      >
                        {pgNum}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={activePage === totalPages}
                  className="p-2.5 rounded-xl border border-slate-200/60 bg-white text-indigo-950 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
                  title="Next Page"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </>
        )}

        {/* Dynamic customized manufacturing card highlight */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-tr from-indigo-950 to-indigo-900 rounded-[2.5rem] p-8 md:p-10 text-white relative overflow-hidden border border-indigo-850 shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-orange-500/10 rounded-full filter blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1 bg-orange-500/10 border border-orange-500/25 px-3 py-1 rounded-full text-xs font-bold text-orange-400 uppercase tracking-wider font-mono">
                <Cpu className="h-3.5 w-3.5" /> Direct Fabrication Capability
              </span>
              <h3 className="text-3xl font-black tracking-tight leading-tight">
                Require Custom Dimensions or Specialized Bend Radii?
              </h3>
              <p className="text-sm font-sans text-indigo-200 leading-relaxed max-w-2xl">
                We sustain fully programmable automatic mandrel bending rigs allowing us to execute intricate curvature patterns with precise circular dimension retention. Supply your technical auto diagrams, and let us calibrate our assembly setups for your needs.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-end">
              <button
                onClick={() => handleInquireNow('Custom Specialized Design')}
                className="w-full lg:w-auto bg-orange-500 hover:bg-orange-650 text-white font-black text-xs uppercase tracking-widest py-4 px-8 rounded-2xl shadow-lg shadow-orange-500/25 cursor-pointer transform hover:scale-[1.02] transition-all flex items-center justify-center gap-2 font-mono"
              >
                Inquire For Custom Build
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
