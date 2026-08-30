"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  Award, 
  Percent, 
  Compass, 
  Users2, 
  ArrowRight
} from "lucide-react";
import { easeVague, durSlow, WaveLineDivider } from "@/lib/motion";
import { InteractiveGlowCard } from "./InteractiveGlowCard";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";

export default function FoundingCohortSection() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === "dark";

  const perkIcons = [Percent, Award, Compass, Users2];

  const scrollToWaitlist = () => {
    const el = document.getElementById("waitlist");
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="founding-cohort" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main Cohort Showcase Shell */}
        <div className={`rounded-26 ast-art-glass p-8 sm:p-12 shadow-premium relative overflow-hidden hud-corner ${
          isDark ? "" : "bg-white/95 border-slate-200 shadow-md"
        }`}>
          
          {/* Ambient Lighting inside card */}
          <div className="absolute -top-28 -right-28 w-96 h-96 bg-ast-teal-400/12 rounded-pill blur-3xl pointer-events-none" />
          <div className="absolute -bottom-28 -left-28 w-96 h-96 bg-emerald-500/12 rounded-pill blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Description */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-pill bg-emerald-500/15 border border-emerald-500/35 text-emerald-500 shadow-glow-soft">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="ast-kicker">{t.foundingCohort.badge}</span>
              </div>

              <h2 className={`font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight ${
                isDark ? "text-white" : "text-slate-900"
              }`}>
                {t.foundingCohort.titlePre}
                <span className="text-emerald-500 block mt-1">
                  {t.foundingCohort.titleHighlight}
                </span>
              </h2>

              <p className={`text-base leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                {t.foundingCohort.description}
              </p>

              {/* Scarcity Box */}
              <div className={`p-4 rounded-14 border flex items-start gap-3.5 shadow-glow-soft ${
                isDark ? "bg-ast-night/90 border-emerald-500/30" : "bg-emerald-50/60 border-emerald-200"
              }`}>
                <div className="w-2.5 h-2.5 rounded-pill bg-emerald-500 mt-1.5 animate-pulse-wave flex-shrink-0" />
                <div>
                  <div className="ast-kicker text-emerald-500 mb-0.5">{t.foundingCohort.scarcityTitle}</div>
                  <p className={`text-xs font-mono leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                    {t.foundingCohort.scarcityText}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={scrollToWaitlist}
                  className="px-7 py-4 rounded-14 font-heading font-bold text-sm text-ast-night bg-emerald-400 hover:bg-emerald-300 active:scale-95 transition-all duration-fast ease-courant shadow-glow-soft flex items-center gap-2.5 group"
                >
                  <span>{t.foundingCohort.ctaButton}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Perks Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.foundingCohort.perks.map((perk, idx) => {
                const Icon = perkIcons[idx] || Percent;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: durSlow, delay: idx * 0.08, ease: easeVague }}
                  >
                    <InteractiveGlowCard
                      glowColor={isDark ? "rgba(52, 211, 153, 0.14)" : "rgba(16, 185, 129, 0.08)"}
                      className={`p-5 border space-y-3 shadow-ast-card ${
                        isDark ? "bg-ast-night/85 border-ast-teal-400/20 hover:border-emerald-400/40" : "bg-white border-slate-200 hover:border-emerald-500/40 shadow-sm"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-10 bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-500 shadow-glow-soft">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-mono text-[10px] text-slate-400 tracking-wider font-semibold">
                          {perk.code}
                        </span>
                      </div>

                      <h3 className={`font-heading font-bold text-base ${isDark ? "text-white" : "text-slate-900"}`}>
                        {perk.title}
                      </h3>
                      <p className={`text-xs leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                        {perk.description}
                      </p>
                    </InteractiveGlowCard>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>

        {/* Decorative Wave Line Motif */}
        <WaveLineDivider className="mt-16" />

      </div>
    </section>
  );
}
