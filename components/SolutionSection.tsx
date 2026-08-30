"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Lock, 
  Wallet, 
  UserCheck, 
  Wand2, 
  Coins,
  Cpu
} from "lucide-react";
import { easeVague, durSlow, WaveLineDivider } from "@/lib/motion";
import { InteractiveGlowCard } from "./InteractiveGlowCard";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";

export default function SolutionSection() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === "dark";

  const stepIcons = [Lock, UserCheck, Wallet, Wand2];

  return (
    <section id="how-it-works" className="py-20 md:py-28 relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-ast-teal-900/15 rounded-pill blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
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

        {/* Fee Transparency Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: durSlow, ease: easeVague }}
          className={`mt-12 rounded-26 ast-art-glass border p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-premium shimmer-active ${
            isDark ? "border-ast-teal-400/30" : "bg-white/95 border-slate-200 shadow-md"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-16 bg-ast-teal-900/20 border border-ast-teal-400/40 flex items-center justify-center text-ast-teal-400 flex-shrink-0 shadow-glow-soft">
              <Coins className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="ast-kicker text-emerald-500 font-bold">{t.solution.ledgerBadge}</span>
                <span className="text-[10px] font-mono text-slate-400">{t.solution.ledgerSubtitle}</span>
              </div>
              <h4 className={`font-heading font-extrabold text-xl ${isDark ? "text-white" : "text-slate-900"}`}>
                {t.solution.ledgerTitle}
              </h4>
              <p className={`text-sm max-w-xl ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                {t.solution.ledgerDesc}
              </p>
            </div>
          </div>

          <div className={`flex-shrink-0 text-center sm:text-right p-4 rounded-14 border ${
            isDark ? "bg-ast-night/80 border-ast-teal-400/20" : "bg-slate-50 border-slate-200"
          }`}>
            <span className="ast-kicker text-emerald-500 block mb-1">
              {t.solution.cohortSpecial}
            </span>
            <span className="px-3.5 py-1.5 rounded-8 bg-emerald-500/15 border border-emerald-500/35 text-emerald-500 font-mono text-sm font-bold inline-block shadow-glow-soft">
              {t.solution.launchRateBadge}
            </span>
          </div>
        </motion.div>

        {/* Decorative Wave Line Motif */}
        <WaveLineDivider className="mt-16" />

      </div>
    </section>
  );
}
