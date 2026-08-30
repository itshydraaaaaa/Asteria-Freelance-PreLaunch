"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  ArrowRight, 
  Lock, 
  Wallet, 
  Sparkles, 
  ChevronDown,
  Fingerprint,
  Check,
  CheckCircle2,
  RotateCcw
} from "lucide-react";
import { easeVague, durSlow } from "@/lib/motion";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";

export default function Hero() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === "dark";

  const [milestone2Approved, setMilestone2Approved] = useState(false);

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
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
      {/* Bathymetric Ambient Lines & Deep Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Ambient Plasma Blobs */}
        <div 
          className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[980px] h-[550px] rounded-pill blur-[140px] opacity-45 animate-wave-drift"
          style={{
            background: isDark
              ? "radial-gradient(ellipse at center, rgba(96, 200, 212, 0.25), rgba(17, 96, 110, 0.1) 60%, transparent 80%)"
              : "radial-gradient(ellipse at center, rgba(96, 200, 212, 0.2), rgba(17, 96, 110, 0.05) 60%, transparent 80%)",
          }}
        />
        <div 
          className="absolute top-[40%] -left-[15%] w-[800px] h-[500px] rounded-pill blur-[160px] opacity-35 animate-wave-drift"
          style={{
            background: isDark
              ? "radial-gradient(ellipse at center, rgba(11, 74, 85, 0.4), transparent 70%)"
              : "radial-gradient(ellipse at center, rgba(17, 96, 110, 0.12), transparent 70%)",
            animationDelay: "5s",
          }}
        />
        <div 
          className="absolute bottom-[2%] -right-[10%] w-[600px] h-[400px] rounded-pill blur-[130px] opacity-30 animate-wave-drift"
          style={{
            background: isDark
              ? "radial-gradient(ellipse at center, rgba(96, 200, 212, 0.18), transparent 70%)"
              : "radial-gradient(ellipse at center, rgba(96, 200, 212, 0.15), transparent 70%)",
            animationDelay: "9s",
          }}
        />

        {/* Ambient Bathymetric Grid */}
        <div className="absolute inset-0 ast-bathymetry-pattern opacity-25" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Staged Reveal Copy & CTAs */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Tech Kicker Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: durSlow, ease: easeVague }}
              className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-pill border shadow-glow-soft ${
                isDark 
                  ? "bg-ast-night-2/90 border-ast-teal-400/30 text-ast-teal-400" 
                  : "bg-white border-ast-teal-900/20 text-ast-teal-900 shadow-sm"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-pill bg-ast-teal-400 opacity-80"></span>
                <span className="relative inline-flex rounded-pill h-2 w-2 bg-ast-teal-400"></span>
              </span>
              <span className="ast-kicker">{t.hero.badge}</span>
            </motion.div>

            {/* Main Headline with Liquid Metal Gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: durSlow, delay: 0.1, ease: easeVague }}
              className={`font-heading font-extrabold text-[clamp(2.35rem,5.5vw,3.9rem)] tracking-tight leading-[1.1] ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              {t.hero.h1Line1}{" "}
              <span className="ast-gradient-liquid block mt-1">
                {t.hero.h1Line2}
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: durSlow, delay: 0.2, ease: easeVague }}
              className={`text-base sm:text-lg leading-relaxed font-normal max-w-2xl ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {t.hero.subheadline}
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
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                <span className="relative z-10 flex items-center gap-2">
                  {t.hero.ctaPrimary}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-fast ease-courant" />
                </span>
              </button>

              <button
                onClick={() => scrollToSection("how-it-works")}
                className={`px-6 py-4 rounded-14 font-heading font-medium text-base border transition-all duration-fast ease-courant flex items-center justify-center gap-2 ${
                  isDark 
                    ? "bg-ast-night-2/60 hover:bg-ast-night-2 border-ast-teal-400/20 hover:border-ast-teal-400/45 text-slate-200" 
                    : "bg-white hover:bg-slate-50 border-slate-200 text-slate-800 shadow-sm"
                }`}
              >
                <span>{t.hero.ctaSecondary}</span>
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
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>{t.hero.foundingIncentive}</span>
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
              {/* Outer Glow Aura */}
              <div className={`absolute -inset-2 rounded-26 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-base ${
                isDark 
                  ? "bg-gradient-to-r from-ast-teal-900/50 via-ast-teal-400/20 to-ast-night" 
                  : "bg-gradient-to-r from-ast-teal-900/10 via-ast-teal-400/15 to-transparent"
              }`} />

              {/* Main Terminal Shell */}
              <div className={`relative rounded-26 ast-art-glass p-6 sm:p-7 shadow-premium space-y-5 ${
                isDark ? "" : "bg-white/90 border-slate-200"
              }`}>
                
                {/* Terminal Header Bar */}
                <div className="flex items-center justify-between border-b border-ast-teal-400/20 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-10 bg-emerald-500/15 border border-emerald-500/35 flex items-center justify-center shadow-glow-soft">
                      <Lock className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="ast-kicker text-emerald-400">{t.hero.terminalVaultActive}</span>
                        <span className="h-1.5 w-1.5 rounded-pill bg-emerald-400 animate-pulse-wave" />
                      </div>
                      <div className={`text-xs font-mono tracking-wider ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                        CONTRACT #AST-4820 // SHA-256
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className={`ast-kicker px-2 py-0.5 rounded-6 border text-ast-teal-400 ${
                      isDark ? "bg-ast-night border-ast-teal-400/20" : "bg-slate-100 border-slate-200"
                    }`}>
                      {t.hero.tndNative}
                    </span>
                  </div>
                </div>

                {/* Milestone 1: Approved & Released with Live Shimmer */}
                <div className={`p-4 rounded-14 border space-y-2 relative overflow-hidden shimmer-active shadow-ast-card ${
                  isDark ? "bg-ast-night/85 border-emerald-500/30" : "bg-emerald-50/50 border-emerald-300/40"
                }`}>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-semibold flex items-center gap-2 ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-emerald-500" />
                      </div>
                      {t.hero.milestone1Title}
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-500 tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                      +650 TND
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pt-1">
                    <span>{t.hero.milestone1Approved}</span>
                    <span className="text-emerald-500 font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {t.hero.milestone1Released}
                    </span>
                  </div>
                </div>

                {/* Milestone 2: Escrow Locked / Interactive Simulation */}
                <AnimatePresence mode="wait">
                  {milestone2Approved ? (
                    <motion.div
                      key="approved"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      className={`p-4 rounded-14 border space-y-2 relative overflow-hidden shimmer-active shadow-ast-card ${
                        isDark ? "bg-ast-night/85 border-emerald-500/40" : "bg-emerald-50/70 border-emerald-400"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-semibold flex items-center gap-2 ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                          <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                          </div>
                          {t.hero.milestone2Title}
                        </span>
                        <span className="text-xs font-mono font-bold text-emerald-500 tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                          +1,400 TND
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-emerald-500 font-mono pt-1">
                        <span className="font-semibold">{t.hero.milestone1Approved}</span>
                        <span className="font-medium">{t.hero.fundsReleasedSuccess}</span>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="locked"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      className={`p-4 rounded-14 border space-y-2 relative overflow-hidden shadow-ast-card ${
                        isDark ? "bg-ast-surface-dark-2/40 border-ast-teal-400/35" : "bg-sky-50/60 border-ast-teal-900/20"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-semibold flex items-center gap-2 ${isDark ? "text-white" : "text-slate-900"}`}>
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-pill bg-ast-teal-400 opacity-75" />
                            <span className="relative inline-flex rounded-pill h-2 w-2 bg-ast-teal-400" />
                          </span>
                          {t.hero.milestone2Title}
                        </span>
                        <span className="text-xs font-mono font-bold text-ast-teal-400 tracking-wider bg-ast-teal-900/20 px-2 py-0.5 rounded border border-ast-teal-400/30">
                          1,400 TND
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-mono pt-1">
                        <span className="text-amber-500 flex items-center gap-1.5 font-medium">
                          <Lock className="w-3 h-3 text-amber-500" />
                          {t.hero.milestone2Locked}
                        </span>
                        <span className={isDark ? "text-slate-300" : "text-slate-600"}>{t.hero.milestone2Until}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Interactive Simulator Trigger */}
                <div className="flex items-center justify-end">
                  <button
                    onClick={() => setMilestone2Approved(!milestone2Approved)}
                    className={`text-[11px] font-mono font-medium px-3 py-1.5 rounded-8 border transition-all duration-fast ease-courant flex items-center gap-1.5 ${
                      milestone2Approved
                        ? "bg-slate-100 dark:bg-ast-night-2 border-slate-300 dark:border-ast-teal-400/20 text-slate-600 dark:text-slate-400 hover:text-ast-teal-400"
                        : "bg-ast-teal-400/15 border-ast-teal-400/30 text-ast-teal-400 hover:bg-ast-teal-400/25 shadow-xs"
                    }`}
                  >
                    {milestone2Approved ? (
                      <>
                        <RotateCcw className="w-3 h-3" />
                        <span>Reset Simulation</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3 h-3" />
                        <span>{t.hero.simulateReleaseBtn}</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Dual-Sided KYC Authentication Seal */}
                <div className={`flex items-center justify-between px-4 py-3 rounded-12 border text-xs ${
                  isDark ? "bg-ast-night/70 border-ast-teal-400/20" : "bg-slate-50 border-slate-200"
                }`}>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-10 bg-ast-teal-900/20 border border-ast-teal-400/30 flex items-center justify-center text-ast-teal-400 shadow-glow-soft">
                      <Fingerprint className="w-4 h-4" />
                    </div>
                    <div>
                      <div className={`font-semibold flex items-center gap-1.5 ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                        <span>{t.hero.verifiedClient}</span>
                        <span className="px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-500 text-[9px] font-mono font-bold">{t.hero.kycPass}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono">{t.hero.taxId}</span>
                    </div>
                  </div>
                  <ShieldCheck className="w-5 h-5 text-ast-teal-400" />
                </div>

                {/* Direct Local Payout Rails */}
                <div className="pt-2 border-t border-ast-teal-400/15 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Wallet className="w-3.5 h-3.5 text-ast-teal-400" />
                    {t.hero.localSettlement}
                  </span>
                  <div className={`flex items-center gap-1.5 font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                    <span className={`px-2 py-0.5 rounded-6 border text-[10px] ${isDark ? "bg-ast-night border-ast-teal-400/25" : "bg-white border-slate-200"}`}>Flouci</span>
                    <span className={`px-2 py-0.5 rounded-6 border text-[10px] ${isDark ? "bg-ast-night border-ast-teal-400/25" : "bg-white border-slate-200"}`}>Konnect</span>
                    <span className={`px-2 py-0.5 rounded-6 border text-[10px] ${isDark ? "bg-ast-night border-ast-teal-400/25" : "bg-white border-slate-200"}`}>GIM-TEL</span>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>

        {/* Platform Stat Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: durSlow, delay: 0.2, ease: easeVague }}
          className="mt-16 md:mt-20 pt-10 border-t border-ast-teal-400/15 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {t.stats.map((stat, idx) => (
            <div key={idx} className={`space-y-1.5 p-4 rounded-14 border transition-all duration-fast ${
              isDark 
                ? "bg-ast-night-2/40 border-ast-teal-400/10 hover:border-ast-teal-400/25" 
                : "bg-white/80 border-slate-200 hover:border-ast-teal-900/20 shadow-sm"
            }`}>
              <div className="ast-kicker text-ast-teal-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-ast-teal-400/60" />
                {stat.label}
              </div>
              <div className={`text-2xl sm:text-3xl font-heading font-extrabold tracking-tight ${
                isDark ? "text-white" : "text-slate-900"
              }`}>
                {stat.value}
              </div>
              <p className={`text-xs leading-snug ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                {stat.description}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
