"use client";

import React from "react";

export default function BackgroundMesh() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Brand Ambient Radial Glow Blobs (Charte Graphique v2.1) */}
      <div 
        className="absolute -top-[12%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-pill blur-[140px] opacity-40 animate-wave-drift"
        style={{
          background: "radial-gradient(ellipse at center, rgba(96, 200, 212, 0.20), transparent 70%)",
        }}
      />
      <div 
        className="absolute top-[35%] -left-[10%] w-[720px] h-[480px] rounded-pill blur-[160px] opacity-30 animate-wave-drift"
        style={{
          background: "radial-gradient(ellipse at center, rgba(17, 96, 110, 0.30), transparent 70%)",
          animationDelay: "5s",
        }}
      />
      <div 
        className="absolute top-[70%] -right-[10%] w-[520px] h-[360px] rounded-pill blur-[140px] opacity-25 animate-wave-drift"
        style={{
          background: "radial-gradient(ellipse at center, rgba(96, 200, 212, 0.12), transparent 70%)",
          animationDelay: "9s",
        }}
      />

      {/* Subtle geometric dot/grid overlay */}
      <div className="absolute inset-0 ast-grid-pattern opacity-30" />

      {/* Top subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ast-night" />
    </div>
  );
}
