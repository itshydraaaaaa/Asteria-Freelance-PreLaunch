"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  ArrowRight, 
  Lock, 
  Wallet, 
  CheckCircle2, 
  Sparkles,
  ChevronDown,
  Cpu,
  Fingerprint,
  Layers,
  Check
} from "lucide-react";
import { PLATFORM_STATS } from "@/lib/constants";
import { easeVague, easeCourant, durSlow, durBase } from "@/lib/motion";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"locked" | "released">("locked");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-ast-night">
      
      {/* Bathymetric Ambient Lines & Deep Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Slow drifting deep-water plasma */}
        <div 
          className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[980px] h-[550px] rounded-pill blur-[140px] opacity-45 animate-wave-drift"
          style={{
            background: "radial-gradient(ellipse at center, rgba(96, 200, 212, 0.25), rgba(17, 96, 110, 0.1) 60%, transparent 80%)",
          }}
        />
        <div 
          className="absolute top-[40%] -left-[15%] w-[800px] h-[500px] rounded-pill blur-[160px] opacity-35 animate-wave-drift"
          style={{
            background: "radial-gradient(ellipse at center, rgba(11, 74, 85, 0.4), transparent 70%)",
            animationDelay: "5s",
          }}
        />
        <div 
          className="absolute bottom-[2%] -right-[10%] w-[600px] h-[400px] rounded-pill blur-[130px] opacity-30 animate-wave-drift"
          style={{
            background: "radial-gradient(ellipse at center, rgba(96, 200, 212, 0.18), transparent 70%)",
            animationDelay: "9s",
          }}
        />

        {/* Ambient Bathymetric Grid & Contour Overlay */}
        <div className="absolute inset-0 ast-bathymetry-pattern opacity-20" />

        {/* Subtle Tech Coordinates Watermark */}
        <div className="absolute top-28 right-8 font-mono text-[10px] text-ast-teal-400/20 tracking-widest hidden lg:block select-none">
          SYS_CORE // LAT: 36.8065° N // LON: 10.1815° E (TUNIS)
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Staged Reveal Copy & CTAs */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Tech Kicker Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: durSlow, ease: easeVague }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-pill bg-ast-night-2/90 border border-ast-teal-400/30 shadow-glow-soft text-ast-teal-400"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-pill bg-ast-teal-400 opacity-80"></span>
                <span className="relative inline-flex rounded-pill h-2 w-2 bg-ast-teal-400"></span>
              </span>
              <span className="ast-kicker">Escrow Infrastructure v2.1 • Tunisia</span>
            </motion.div>

            {/* Main Headline with Liquid Metal Gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: durSlow, delay: 0.1, ease: easeVague }}
              className="font-heading font-extrabold text-[clamp(2.35rem,5.5vw,3.9rem)] text-white tracking-tight leading-[1.1]"
            >
              Get paid, guaranteed.{" "}
              <span className="ast-gradient-liquid block mt-1">
                Never chase an unpaid invoice again.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: durSlow, delay: 0.2, ease: easeVague }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl"
            >
              Asteria Freelance is built specifically for Tunisian talent.
              Every contract is secured by{" "}
              <strong className="text-white font-semibold underline decoration-ast-teal-400/40 decoration-2 underline-offset-4">
                milestone escrow
              </strong>,{" "}
              <strong className="text-white font-semibold underline decoration-ast-teal-400/40 decoration-2 underline-offset-4">
                KYC-verified identities
              </strong>, and{" "}
              <strong className="text-ast-teal-400 font-semibold">
                direct local payouts in TND
              </strong>{" "}
              via Flouci, Konnect, and local banks.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: durSlow, delay: 0.3, ease: easeVague }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={() => scrollToSection("waitlist")}
                className="group relative overflow-hidden px-8 py-4 rounded-14 font-heading font-semibold text-base text-ast-night bg-ast-teal-400 hover:bg-white active:scale-[0.98] transition-all duration-fast ease-courant shadow-glow-soft flex items-center justify-center gap-2.5"
              >
                {/* Subtle light streak reflection */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                <span className="relative z-10 flex items-center gap-2">
                  Claim Founding Freelancer Spot
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-fast ease-courant" />
                </span>
              </button>

              <button
                onClick={() => scrollToSection("how-it-works")}
                className="px-6 py-4 rounded-14 font-heading font-medium text-base text-slate-200 bg-ast-night-2/60 hover:bg-ast-night-2 border border-ast-teal-400/20 hover:border-ast-teal-400/45 transition-all duration-fast ease-courant flex items-center justify-center gap-2"
              >
                <span>See how it works</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>
            </motion.div>

            {/* Founding Incentive Note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: easeVague }}
              className="flex items-center gap-2.5 text-xs text-slate-400 font-mono"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>
                Cohort 01 members receive a <strong className="text-slate-200 font-medium">discounted platform fee</strong> & Founding Member badge.
              </span>
            </motion.div>
          </div>

          {/* Right Column: Futuristic Interactive Escrow Protocol Terminal */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: durSlow, delay: 0.25, ease: easeVague }}
              className="relative group hud-corner"
            >
              {/* Outer Ambient Glow Aura */}
              <div className="absolute -inset-2 bg-gradient-to-r from-ast-teal-900/50 via-ast-teal-400/20 to-ast-night rounded-26 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-base" />

              {/* Main Terminal Shell */}
              <div className="relative rounded-26 ast-art-glass p-6 sm:p-7 shadow-premium space-y-5">
                
                {/* Terminal Header Bar */}
                <div className="flex items-center justify-between border-b border-ast-teal-400/20 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-10 bg-emerald-500/15 border border-emerald-500/35 flex items-center justify-center shadow-glow-soft">
                      <Lock className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="ast-kicker text-emerald-400">ESCROW VAULT ACTIVE</span>
                        <span className="h-1.5 w-1.5 rounded-pill bg-emerald-400 animate-pulse-wave" />
                      </div>
                      <div className="text-xs font-mono text-slate-400 tracking-wider">
                        CONTRACT #AST-4820 // SHA-256
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="ast-kicker px-2 py-0.5 rounded-6 bg-ast-night border border-ast-teal-400/20 text-ast-teal-400">
                      TND NATIVE
                    </span>
                  </div>
                </div>

                {/* Milestone 1: Approved & Released with Live Shimmer */}
                <div className="p-4 rounded-14 bg-ast-night/85 border border-emerald-500/30 space-y-2 relative overflow-hidden shimmer-active shadow-ast-card">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-200 flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-emerald-400" />
                      </div>
                      Milestone 1: Brand & UI Prototype
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-400 tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                      +650 TND
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pt-1">
                    <span className="text-slate-400">Delivery Approved</span>
                    <span className="text-emerald-300 font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Released to Flouci Wallet
                    </span>
                  </div>
                </div>

                {/* Milestone 2: Escrow Locked (Interactive Simulation) */}
                <div className="p-4 rounded-14 bg-ast-surface-dark-2/40 border border-ast-teal-400/35 space-y-2 relative overflow-hidden shadow-ast-card">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-white flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-pill bg-ast-teal-400 opacity-75" />
                        <span className="relative inline-flex rounded-pill h-2 w-2 bg-ast-teal-400" />
                      </span>
                      Milestone 2: Frontend & API Delivery
                    </span>
                    <span className="text-xs font-mono font-bold text-ast-teal-400 tracking-wider bg-ast-teal-900/40 px-2 py-0.5 rounded border border-ast-teal-400/30">
                      1,400 TND
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono pt-1">
                    <span className="text-amber-300 flex items-center gap-1.5">
                      <Lock className="w-3 h-3 text-amber-300" />
                      Funds Secured in Vault
                    </span>
                    <span className="text-slate-300">Locked Until You Deliver</span>
                  </div>
                </div>

                {/* Dual-Sided KYC Authentication Seal */}
                <div className="flex items-center justify-between px-4 py-3 rounded-12 bg-ast-night/70 border border-ast-teal-400/20 text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-10 bg-ast-teal-900/60 border border-ast-teal-400/40 flex items-center justify-center text-ast-teal-400 shadow-glow-soft">
                      <Fingerprint className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-slate-200 font-semibold flex items-center gap-1.5">
                        <span>Verified Client: TechLab S.A.R.L</span>
                        <span className="px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-300 text-[9px] font-mono">KYC PASS</span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono">Tax ID: TN-1849204 // Biometrics Validated</span>
                    </div>
                  </div>
                  <ShieldCheck className="w-5 h-5 text-ast-teal-400" />
                </div>

                {/* Direct Local Payout Rails */}
                <div className="pt-2 border-t border-ast-teal-400/15 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Wallet className="w-3.5 h-3.5 text-ast-teal-400" />
                    Local Settlement
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-300 font-medium">
                    <span className="px-2 py-0.5 rounded-6 bg-ast-night border border-ast-teal-400/25 text-[10px]">Flouci</span>
                    <span className="px-2 py-0.5 rounded-6 bg-ast-night border border-ast-teal-400/25 text-[10px]">Konnect</span>
                    <span className="px-2 py-0.5 rounded-6 bg-ast-night border border-ast-teal-400/25 text-[10px]">GIM-TEL / Bank</span>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>

        {/* Platform Stat Bar with Tech HUD Accents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: durSlow, delay: 0.2, ease: easeVague }}
          className="mt-16 md:mt-20 pt-10 border-t border-ast-teal-400/15 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {PLATFORM_STATS.map((stat, idx) => (
            <div key={idx} className="space-y-1.5 p-4 rounded-14 bg-ast-night-2/40 border border-ast-teal-400/10 hover:border-ast-teal-400/25 transition-all duration-fast">
              <div className="ast-kicker text-ast-teal-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-ast-teal-400/60" />
                {stat.label}
              </div>
              <div className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
                {stat.value}
              </div>
              <p className="text-xs text-slate-400 leading-snug">
                {stat.description}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
