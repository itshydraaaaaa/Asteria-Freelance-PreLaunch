"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Lock, 
  Wallet, 
  UserCheck, 
  Wand2, 
  Coins,
  Cpu,
  Calculator,
  ArrowRight,
  Sparkles,
  Check
} from "lucide-react";
import { easeVague, durSlow, WaveLineDivider } from "@/lib/motion";
import { InteractiveGlowCard } from "./InteractiveGlowCard";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";

export default function SolutionSection() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === "dark";

  const [projectBudget, setProjectBudget] = useState<number>(1000);

  const stepIcons = [Lock, UserCheck, Wallet, Wand2];

  // Fee calculation (12% platform fee, 88% net take-home)
  const platformFee = Math.round(projectBudget * 0.12);
  const netEarnings = projectBudget - platformFee;

  return (
    <section id="how-it-works" className="py-20 md:py-28 relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-ast-teal-900/15 rounded-pill blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-pill border shadow-glow-soft ${
            isDark ? "bg-ast-night-2/90 border-ast-teal-400/25 text-ast-teal-400" : "bg-white border-ast-teal-900/20 text-ast-teal-900 shadow-sm"
          }`}>
            <Cpu className="w-3.5 h-3.5 text-ast-teal-400" />
            <span className="ast-kicker">{t.solution.badge}</span>
          </div>

          <h2 className={`font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            {t.solution.titlePre}
            <span className="ast-gradient-cyan block mt-1">{t.solution.titleHighlight}</span>
          </h2>

          <p className={`text-base sm:text-lg ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            {t.solution.subtitle}
          </p>
        </div>

        {/* 4 Connected Protocol Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative">
          {t.solution.steps.map((step, idx) => {
            const Icon = stepIcons[idx] || Lock;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: durSlow, delay: idx * 0.08, ease: easeVague }}
              >
                <InteractiveGlowCard
                  glowColor={isDark ? "rgba(96, 200, 212, 0.16)" : "rgba(17, 96, 110, 0.08)"}
                  className={`h-full border hover:border-ast-teal-400/40 p-7 group shadow-ast-card flex flex-col justify-between ${
                    isDark ? "bg-ast-night-2/80 border-ast-teal-400/15" : "bg-white border-slate-200 shadow-sm"
                  }`}
                >
                  <div className="space-y-4">
                    {/* Card Protocol Header */}
                    <div className="flex items-center justify-between border-b border-ast-teal-400/15 pb-3">
                      <span className="font-mono text-[10px] text-ast-teal-400 tracking-widest uppercase font-semibold">
                        {step.stepTag}
                      </span>
                      <span className={`font-mono text-[10px] px-2 py-0.5 rounded border ${
                        isDark ? "text-slate-400 bg-ast-night border-ast-teal-400/15" : "text-slate-600 bg-slate-100 border-slate-200 font-medium"
                      }`}>
                        {step.telemetry}
                      </span>
                    </div>

                    {/* Icon and badge */}
                    <div className="flex items-center gap-3 pt-1">
                      <div className="w-12 h-12 rounded-14 bg-ast-teal-900/20 border border-ast-teal-400/35 flex items-center justify-center text-ast-teal-400 group-hover:scale-105 transition-transform duration-fast ease-courant shadow-glow-soft">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="ast-kicker text-ast-teal-400 px-3 py-1 rounded-6 bg-ast-teal-900/20 border border-ast-teal-400/25">
                        {step.badge}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className={`font-heading font-bold text-xl transition-colors ${
                      isDark ? "text-white group-hover:text-teal-200" : "text-slate-900 group-hover:text-ast-teal-900"
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                      {step.description}
                    </p>
                  </div>

                  {/* Watermark Number */}
                  <div className="pt-4 flex justify-end">
                    <span className="font-mono text-xs font-bold text-ast-teal-400/20 group-hover:text-ast-teal-400/40 transition-colors">
                      #PROTOCOL_NODE_0{idx + 1}
                    </span>
                  </div>
                </InteractiveGlowCard>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Net Earnings Calculator & Fee Transparency Ledger */}
        <motion.div
          id="calculator"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: durSlow, ease: easeVague }}
          className={`rounded-26 ast-art-glass border p-6 sm:p-10 shadow-premium relative overflow-hidden hud-corner ${
            isDark ? "border-ast-teal-400/30" : "bg-white/95 border-slate-200 shadow-md"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Calculator Left Details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-14 bg-ast-teal-900/20 border border-ast-teal-400/40 flex items-center justify-center text-ast-teal-400 shadow-glow-soft">
                  <Calculator className="w-6 h-6" />
                </div>
                <div>
                  <span className="ast-kicker text-emerald-500 font-bold block">{t.solution.ledgerBadge}</span>
                  <h3 className={`font-heading font-extrabold text-2xl ${isDark ? "text-white" : "text-slate-900"}`}>
                    {t.solution.calculator.title}
                  </h3>
                </div>
              </div>

              <p className={`text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                {t.solution.calculator.subtitle} {t.solution.ledgerDesc}
              </p>

              {/* Interactive Budget Slider */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <label htmlFor="budget-slider" className={isDark ? "text-slate-200" : "text-slate-800"}>
                    {t.solution.calculator.budgetLabel}
                  </label>
                  <span className="font-mono text-lg font-bold text-ast-teal-400 bg-ast-teal-900/20 px-3 py-1 rounded-8 border border-ast-teal-400/30">
                    {projectBudget.toLocaleString()} TND
                  </span>
                </div>

                <input
                  id="budget-slider"
                  type="range"
                  min="200"
                  max="10000"
                  step="100"
                  value={projectBudget}
                  onChange={(e) => setProjectBudget(Number(e.target.value))}
                  className="w-full h-2 rounded-pill bg-slate-200 dark:bg-ast-night-2 accent-ast-teal-400 cursor-pointer"
                />

                {/* Preset quick buttons */}
                <div className="flex items-center gap-2 pt-1">
                  {[500, 1000, 2500, 5000].map((preset) => (
                    <button
                      key={preset}
                      onClick={() => setProjectBudget(preset)}
                      className={`px-2.5 py-1 rounded-6 text-xs font-mono font-medium transition-all ${
                        projectBudget === preset
                          ? "bg-ast-teal-400 text-ast-night font-bold shadow-xs"
                          : isDark ? "bg-ast-night-2 text-slate-400 hover:text-white" : "bg-slate-100 text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {preset} TND
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Calculator Right Breakdown Card */}
            <div className="lg:col-span-6">
              <div className={`p-6 sm:p-7 rounded-20 border space-y-5 shadow-ast-card ${
                isDark ? "bg-ast-night/90 border-ast-teal-400/25" : "bg-slate-50 border-slate-200"
              }`}>
                <div className="space-y-3 border-b border-black/10 dark:border-white/10 pb-4 text-sm font-mono">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">{t.solution.calculator.budgetLabel}</span>
                    <span className={`font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                      {projectBudget.toLocaleString()} TND
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-rose-500">
                    <span>{t.solution.calculator.feeLabel}</span>
                    <span className="font-semibold">
                      - {platformFee.toLocaleString()} TND
                    </span>
                  </div>
                </div>

                {/* Net Take-Home Highlight */}
                <div className="flex justify-between items-center">
                  <div>
                    <span className="ast-kicker text-emerald-500 block text-[10px]">GUARANTEED NET</span>
                    <span className={`font-heading font-extrabold text-lg sm:text-xl ${isDark ? "text-white" : "text-slate-900"}`}>
                      {t.solution.calculator.takeHomeLabel}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-heading font-extrabold text-3xl text-emerald-500 tracking-tight">
                      {netEarnings.toLocaleString()} <span className="text-base font-normal">TND</span>
                    </span>
                  </div>
                </div>

                {/* Founding Perk Banner */}
                <div className="p-3 rounded-12 bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-500 leading-snug">
                  {t.solution.calculator.cohortDiscountNotice}
                </div>

                {/* Payout Rail Notice */}
                <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono pt-1">
                  <Wallet className="w-3.5 h-3.5 text-ast-teal-400 flex-shrink-0" />
                  <span>{t.solution.calculator.payoutChannel}</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Decorative Wave Line Motif */}
        <WaveLineDivider className="mt-16" />

      </div>
    </section>
  );
}
