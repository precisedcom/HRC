/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface HRCLogoProps {
  className?: string;
  showText?: boolean;
}

export default function HRCLogo({ className = 'h-12', showText = true }: HRCLogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Vector representation of the HRC Signature Logo */}
      <svg
        viewBox="0 0 450 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto filter drop-shadow-sm transition-transform duration-300 hover:scale-[1.02]"
        aria-label="HRC Logo"
      >
        <defs>
          {/* Brand Rich Orange Gradient */}
          <linearGradient id="hrc-orange" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FB923C" />
            <stop offset="50%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EA580C" />
          </linearGradient>

          {/* Deep Corporate Indigo */}
          <linearGradient id="hrc-navy" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#1E1B4B" />
          </linearGradient>
          
          <filter id="subtle-shadow" x="-5%" y="-5%" width="110%" height="110%">
            <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodAlpha="0.12" />
          </filter>
        </defs>

        {/* 1. Letter H (Deep Indigo) */}
        <path
          d="M 60 40 L 78 40 L 78 72 L 108 72 L 108 40 L 126 40 L 126 120 L 108 120 L 108 88 L 78 88 L 78 120 L 60 120 Z"
          fill="url(#hrc-navy)"
          filter="url(#subtle-shadow)"
        />

        {/* 2. Stylized Intertwinkled Letter R (Vibrant Orange with over-arching swoosh) */}
        {/* We recreate the vertical stem of R, the top loop, and the diagonal stroke */}
        <g filter="url(#subtle-shadow)">
          {/* Vertical Stem of R */}
          <rect x="156" y="44" width="18" height="76" rx="3" fill="url(#hrc-orange)" />
          
          {/* Over-arching modern circle/loop of R that swoops back to center */}
          <path
            d="M 143 65 C 143 25, 225 15, 225 60 C 225 85, 185 92, 172 92"
            stroke="url(#hrc-orange)"
            strokeWidth="18"
            strokeLinecap="round"
            fill="none"
          />

          {/* Diagonal Leg of R */}
          <path
            d="M 190 85 L 225 120 H 202 L 172 90"
            stroke="url(#hrc-orange)"
            strokeWidth="15"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* 3. Letter C (Deep Indigo) */}
        <path
          d="M 310 50 C 290 35, 245 42, 242 80 C 239 118, 286 125, 311 110 C 316 107, 318 109, 315 114 C 295 137, 222 135, 220 80 C 218 25, 298 20, 317 44 C 320 48, 314 52, 310 50 Z"
          fill="url(#hrc-navy)"
          filter="url(#subtle-shadow)"
        />

        {/* 4. Three Ellipsis Dots (...) in Deep Indigo */}
        <circle cx="360" cy="118" r="7" fill="#4F46E5" />
        <circle cx="380" cy="118" r="7" fill="#4F46E5" />
        <circle cx="400" cy="118" r="7" fill="#4F46E5" />

        {/* 5. Tapered Sweeping Lower Swoosh (Orange) */}
        {/* It curves below the H-R-C and finishes clean under the ellipsis */}
        <path
          d="M 115 145 C 150 148, 220 135, 385 119 C 275 142, 155 156, 115 145 Z"
          fill="url(#hrc-orange)"
        />
        
        {/* Sleek highlights on the swoosh */}
        <path
          d="M 140 143 C 170 144, 230 136, 320 125 C 240 138, 170 146, 140 143 Z"
          fill="#FFF"
          opacity="0.3"
        />
      </svg>
      {showText && (
        <div className="flex flex-col select-none">
          <span className="text-xl font-extrabold tracking-tight text-[#4F46E5] leading-none">
            Hitesh Ritesh &amp; Co.
          </span>
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#F97316] uppercase leading-none mt-1">
            AUTO PARTS &amp; SILENCERS
          </span>
        </div>
      )}
    </div>
  );
}
