import React from "react";

const GlowBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[-15%] left-[-15%] w-[60%] h-[60%] bg-brand-blue-light/40 rounded-full blur-[140px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-green/20 rounded-full blur-[120px] animate-pulse delay-700" />
      <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-brand-cyan/20 rounded-full blur-[100px] animate-pulse delay-1000" />
    </div>
  );
};

export default GlowBackground;
