"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, Filter } from "lucide-react";
import { easeCourant, durBase } from "@/lib/motion";
import { InteractiveGlowCard } from "./InteractiveGlowCard";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const { theme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === "dark";

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const categories = [
    { id: "all", label: t.faq.categories.all },
    { id: "escrow", label: t.faq.categories.escrow },
    { id: "payouts", label: t.faq.categories.payouts },
    { id: "cohort", label: t.faq.categories.cohort },
  ];

  const filteredItems = t.faq.items.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  return (
    <section id="faq" className="py-20 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-pill border shadow-glow-soft ${
            isDark ? "bg-ast-night-2/90 border-ast-teal-400/30 text-ast-teal-400" : "bg-white border-ast-teal-900/20 text-ast-teal-900 shadow-sm"
          }`}>
            <HelpCircle className="w-3.5 h-3.5 text-ast-teal-400" />
            <span className="ast-kicker">{t.faq.badge}</span>
          </div>

          <h2 className={`font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            {t.faq.title}
          </h2>

          <p className={`text-base ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            {t.faq.subtitle}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setOpenIndex(0);
                }}
                className={`px-4 py-2 rounded-10 text-xs font-mono font-medium transition-all duration-fast ease-courant ${
                  isActive
                    ? "bg-ast-teal-400 text-ast-night font-bold shadow-glow-soft"
                    : isDark
                      ? "bg-ast-night-2/70 border border-ast-teal-400/15 text-slate-300 hover:border-ast-teal-400/30 hover:text-white"
                      : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300 shadow-sm"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Accordion List with Interactive Glow */}
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              {filteredItems.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <InteractiveGlowCard
                    key={idx}
                    glowColor={isDark ? "rgba(96, 200, 212, 0.12)" : "rgba(17, 96, 110, 0.06)"}
                    className={`transition-all duration-fast ease-courant overflow-hidden border ${
                      isOpen
                        ? isDark 
                          ? "bg-ast-night-2/95 border-ast-teal-400/40 shadow-glow-soft" 
                          : "bg-white border-ast-teal-900/40 shadow-md"
                        : isDark 
                          ? "bg-ast-night-2/60 border-ast-teal-400/15 hover:border-ast-teal-400/30 hover:bg-ast-night-2/80" 
                          : "bg-white/80 border-slate-200 hover:border-slate-300 shadow-sm"
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-ast-teal-400"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-ast-teal-400 font-semibold">
                          0{idx + 1}.
                        </span>
                        <span className={`font-heading font-bold text-base sm:text-lg ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}>
                          {item.question}
                        </span>
                      </div>

                      <div
                        className={`w-8 h-8 rounded-10 flex items-center justify-center flex-shrink-0 transition-transform duration-fast ease-courant ${
                          isOpen
                            ? "bg-ast-teal-400 text-ast-night rotate-180 shadow-glow-soft"
                            : isDark ? "bg-ast-night text-slate-400 border border-ast-teal-400/20" : "bg-slate-100 text-slate-600 border border-slate-200"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: durBase, ease: easeCourant }}
                        >
                          <div className={`px-6 pb-6 pt-0 text-sm sm:text-base leading-relaxed border-t mt-1 ${
                            isDark ? "text-slate-300 border-ast-teal-400/15" : "text-slate-600 border-slate-100"
                          }`}>
                            <p className="pt-4">{item.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </InteractiveGlowCard>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
