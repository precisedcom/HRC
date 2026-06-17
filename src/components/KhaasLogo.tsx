/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface KhaasLogoProps {
  className?: string;
  lightBackground?: boolean;
}

export default function KhaasLogo({ className = "h-14", lightBackground = false }: KhaasLogoProps) {
  return (
    <div className={`inline-flex items-center ${className}`}>
      <svg 
        viewBox="0 0 450 150" 
        className="w-full h-full" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Dynamic Background Shadow/Vibe if needed, keeping space clean */}
        
        {/* Left 'K' Symbol Stylization */}
        {/* White stem / bar of the K */}
        <path 
          d="M 60 40 L 90 40 L 68 115 L 38 115 Z" 
          fill={lightBackground ? "#0f172a" : "#ffffff"} 
        />
        
        {/* Orange right wing leg of the K */}
        <path 
          d="M 80 83 L 130 115 L 105 115 L 68 88 Z" 
          fill="#f97316" 
        />

        {/* Dynamic sharp white slashing wing elements crossing through the K */}
        <path 
          d="M 32 110 L 155 35 L 148 45 L 42 116 Z" 
          fill={lightBackground ? "#0f172a" : "#ffffff"} 
        />
        <path 
          d="M 22 120 L 165 25 L 158 35 L 32 126 Z" 
          fill={lightBackground ? "#0f172a" : "#ffffff"} 
        />

        {/* Orange auxiliary dynamic accent slice */}
        <path 
          d="M 68 106 L 150 48 L 146 52 L 72 110 Z" 
          fill="#f97316" 
        />

        {/* Bold capital letter text for 'HAAS' */}
        <text 
          x="145" 
          y="114" 
          fill={lightBackground ? "#0f172a" : "#ffffff"} 
          fontSize="82" 
          fontWeight="900" 
          fontFamily="'Impact', 'Arial Black', sans-serif"
          letterSpacing="2"
        >
          HAAS
        </text>

        {/* GOLD rounded golden badge */}
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="50%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>
        </defs>
        
        <g transform="translate(310, 18)">
          <rect 
            x="0" 
            y="0" 
            width="105" 
            height="42" 
            rx="12" 
            fill="url(#goldGradient)" 
            stroke="#fef08a" 
            strokeWidth="2.5"
          />
          <text 
            x="52.5" 
            y="29" 
            fill="#ffffff" 
            fontSize="25" 
            fontWeight="bold" 
            fontFamily="'Arial Black', sans-serif"
            textAnchor="middle"
            letterSpacing="1"
          >
            GOLD
          </text>
        </g>
      </svg>
    </div>
  );
}
