"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserX, Scale, CreditCard, AlertTriangle, ArrowDownRight } from "lucide-react";
import { easeVague, durSlow, WaveLineDivider } from "@/lib/motion";
import { InteractiveGlowCard } from "./InteractiveGlowCard";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";

export default function ProblemSection() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === "dark";

  const problemIcons = [UserX, Scale, CreditCard];

  return (
    <section id="the-problem" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-pill bg-rose-500/10 border border-rose-500/25 text-rose-400">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
            <span className="ast-kicker">{t.problem.badge}</span>
          </div>

          <h2 className={`font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            {t.problem.titlePre}
            <span className="text-rose-500 inline-block underline decoration-rose-500/30 decoration-2 underline-offset-8">
              {t.problem.titleHighlight}
            </span>.
          </h2>

          <p className={`text-base sm:text-lg ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            {t.problem.subtitle}
          </p>
        </div>

        {/* 3 Interactive Forensic Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {t.problem.cards.map((problem, idx) => {
            const Icon = problemIcons[idx] || UserX;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: durSlow, delay: idx * 0.08, ease: easeVague }}
              >
                <InteractiveGlowCard
                  glowColor={isDark ? "rgba(244, 63, 94, 0.12)" : "rgba(244, 63, 94, 0.08)"}
                  className={`h-full border hover:border-rose-400/40 p-6 flex flex-col justify-between group shadow-ast-card ${
                    isDark ? "bg-ast-night-2/80 border-ast-teal-400/15" : "bg-white border-slate-200 shadow-sm"
                  }`}
                >
                  <div className="space-y-4">
                    {/* Top Forensic Header */}
                    <div className="flex items-center justify-between border-b border-rose-500/15 pb-3">
                      <span className="font-mono text-[10px] text-rose-500 tracking-widest uppercase font-semibold">
                        {problem.code}
                      </span>
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-rose-500/10 text-rose-500 font-bold">
                        {problem.meta}
                      </span>
                    </div>

                    {/* Icon & Title */}
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-12 bg-rose-500/10 border border-rose-500/25 flex items-center justify-center text-rose-500 group-hover:scale-105 transition-transform duration-fast ease-courant shadow-glow-soft">
                        <Icon className="w-6 h-6" />
                      </div>

                      <h3 className={`font-heading font-bold text-xl transition-colors duration-fast ${
                        isDark ? "text-white group-hover:text-rose-100" : "text-slate-900 group-hover:text-rose-600"
                      }`}>
                        {problem.title}
                      </h3>
                      <p className={`text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                        {problem.description}
                      </p>
                    </div>
                  </div>

                  {/* Common Frustration Quote Box */}
                  <div className={`mt-6 pt-4 border-t -mx-6 -mb-6 p-4 rounded-b-18 ${
                    isDark ? "bg-ast-night/60 border-ast-teal-400/10" : "bg-slate-50 border-slate-100"
                  }`}>
                    <p className={`text-xs italic font-mono flex items-start gap-1.5 ${
                      isDark ? "text-slate-400" : "text-slate-600"
                    }`}>
                      <ArrowDownRight className="w-3.5 h-3.5 text-rose-500 flex-shrink-0 mt-0.5" />
                      <span>{problem.badQuote}</span>
                    </p>
                  </div>
                </InteractiveGlowCard>
              </motion.div>
            );
          })}
        </div>

        {/* Decorative Wave Line Motif */}
        <WaveLineDivider className="mt-16" />

      </div>
    </section>
  );
}
