
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
        <span className="text-2xl md:text-4xl font-normal tracking-tight">
          ApexForge
        </span>
        
        {/* Sub-brand / Descriptor - Updated to Studio */}
        <span 
          className="text-[11px] md:text-[16px] font-normal tracking-[0.4em] mt-2 opacity-100"
          style={{ marginRight: '-0.4em' }} // Correct centering for tracking
        >
          Studio
        </span>
      </div>
    </div>
  );
};

export default Logo;
