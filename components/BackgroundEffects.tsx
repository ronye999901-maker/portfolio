"use client";

import React, { useEffect, useState } from "react";

export function BackgroundEffects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Ambient Glows */}
      <div 
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[120px] animate-pulse-glow" 
      />
      <div 
        className="absolute top-1/3 -right-40 w-[550px] h-[550px] rounded-full bg-blue-600/10 blur-[130px] animate-pulse-glow" 
        style={{ animationDelay: "2s" }}
      />
      <div 
        className="absolute -bottom-40 left-1/4 w-[650px] h-[650px] rounded-full bg-purple-600/10 blur-[140px] animate-pulse-glow" 
        style={{ animationDelay: "4s" }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 tech-grid-pattern opacity-60" />
      
      {/* Noise Texture Accent */}
      <div 
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 0)",
          backgroundSize: "24px 24px"
        }}
      />
    </div>
  );
}
