
import React from 'react';

interface LogoProps {
  className?: string;
  color?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-auto", color = "#000000", showText = true }) => {
  return (
    <div className={`flex flex-col items-center justify-center select-none ${className}`} style={{ color }}>
      <div className="flex flex-col items-center leading-none">
        {/* Main Brand Name */}
        <span className="text-2xl md:text-3xl font-medium tracking-tight">
          ApexForge
        </span>
        
        {/* Sub-brand / Descriptor */}
        <span 
          className="text-[9px] md:text-[10px] font-light uppercase tracking-[0.6em] mt-1.5 opacity-80"
          style={{ marginRight: '-0.6em' }} // Correct centering for tracking
        >
          Designs
        </span>
      </div>
    </div>
  );
};

export default Logo;
