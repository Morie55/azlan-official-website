import React from "react";

interface AZLANLogoProps {
  className?: string;
  style?: React.CSSProperties;
}

export const AZLANLogo: React.FC<AZLANLogoProps> = ({ className = "h-8 w-auto", style }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Clip path to match the rounded card background */}
        <clipPath id="logo-round-clip">
          <rect width="100" height="100" rx="24" />
        </clipPath>
        
        {/* Drop shadow for the A leg overlapping the gold wave */}
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="-1" dy="2" stdDeviation="1.5" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Main card group clipped to rounded corners */}
      <g clipPath="url(#logo-round-clip)">
        {/* Blue background */}
        <rect width="100" height="100" fill="#0b61a1" />
        
        {/* Gold wave in bottom-right corner */}
        <path
          d="M 45 100 C 60 70, 78 60, 100 62 L 100 100 Z"
          fill="#F5C842"
        />

        {/* White letter A */}
        <path
          d="M 30 80 L 47 22 L 53 22 L 70 80 L 59 80 L 54.5 64 L 45.5 64 L 41 80 Z"
          fill="#ffffff"
          filter="url(#shadow)"
        />
        
        {/* Inner cutout of the letter A */}
        <path
          d="M 50 36 L 53.5 50 L 46.5 50 Z"
          fill="#0b61a1"
        />
      </g>
    </svg>
  );
};
export default AZLANLogo;
