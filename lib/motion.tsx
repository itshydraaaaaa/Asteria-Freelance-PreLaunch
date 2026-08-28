"use client";

import React from "react";

/**
 * Asteria Charte Graphique v2.1 Motion Tokens
 */
export const easeVague = [0.16, 1, 0.3, 1] as const;   // Wave: soft deceleration for entrances/reveals
export const easeCourant = [0.65, 0, 0.35, 1] as const; // Current: symmetric ease for standard transitions
export const easeMaree = [0.37, 0, 0.63, 1] as const;   // Tide: slow drifting ease for ambient loops

export const durFast = 0.15;
export const durBase = 0.3;
export const durSlow = 0.5;
export const durAmbient = 3.2;

/**
 * Standard Framer Motion Entrance Variants
 */
export const fadeUpVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durSlow,
      ease: easeVague,
    },
  },
};

export const staggerContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      ease: easeVague,
    },
  },
};

/**
 * Five-Point Wave Loader (Brand signature loading motif)
 * Alternating teal-900 / teal-400 dots pulsing in a wave rhythm
 */
export function FivePointWaveLoader({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-1.5 ${className}`} aria-label="Loading...">
      {[0, 1, 2, 3, 4].map((i) => {
        const isTeal400 = i % 2 === 1;
        return (
          <span
            key={i}
            className={`w-2 h-2 rounded-pill transition-transform ${
              isTeal400 ? "bg-ast-teal-400" : "bg-ast-teal-900"
            }`}
            style={{
              animation: `waveDotPulse 1.2s cubic-bezier(0.37, 0, 0.63, 1) infinite`,
              animationDelay: `${i * 0.16}s`,
            }}
          />
        );
      })}
    </div>
  );
}

/**
 * Subtle Wave Line Accent (Motif: smooth sine-like path, low opacity)
 */
export function WaveLineDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden flex items-center justify-center py-4 opacity-25 ${className}`} aria-hidden="true">
      <svg
        className="w-full max-w-3xl h-3 text-ast-teal-400"
        viewBox="0 0 1200 12"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0,6 C150,0 300,12 450,6 C600,0 750,12 900,6 C1050,0 1200,12 1200,6"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />
      </svg>
    </div>
  );
}
