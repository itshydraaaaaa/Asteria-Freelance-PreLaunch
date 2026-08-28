"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserX, Scale, CreditCard, AlertTriangle, FileX, Ban, ArrowDownRight } from "lucide-react";
import { easeVague, durSlow, WaveLineDivider } from "@/lib/motion";
import { InteractiveGlowCard } from "./InteractiveGlowCard";

export default function ProblemSection() {
  const problems = [
    {
      code: "INCIDENT_01 // CHAT_DEAL",
      icon: UserX,
      tag: "Ghosting & Non-Payment",
      title: "Deliver the files, get left on 'Seen'",
      description:
        "Informal WhatsApp and Facebook deals leave you completely exposed. You deliver weeks of hard work, only for clients to renegotiate, delay indefinitely, or ghost entirely with zero accountability.",
      badQuote: "\"I sent the source code, but they blocked me on WhatsApp.\"",
      meta: "RISK: 100% UNPROTECTED",
    },
    {
      code: "INCIDENT_02 // NO_CONTRACT",
      icon: Scale,
      tag: "Zero Legal Recourse",
      title: "Gentlemen's agreements without protection",
      description:
        "Without milestone escrow or verified identities, you are forced to gamble your time. If a dispute happens, there is no formal intermediary, no arbitration, and no way to recover your earnings.",
      badQuote: "\"No contract, no deposit, no way to enforce payment.\"",
      meta: "RECOVERY RATE: 0%",
    },
    {
      code: "INCIDENT_03 // FX_LOCKDOWN",
      icon: CreditCard,
      tag: "Payment Friction & FX",
      title: "Foreign platforms, blocked Tunisian cards",
      description:
        "International platforms take 20%+ in fees, restrict Tunisian bank accounts, or require black-market currency gymnastics. Getting paid in your own country shouldn't require complex workarounds.",
      badQuote: "\"Struggling to withdraw USD earnings into local Tunisian Dinars.\"",
      meta: "FEE LEAKAGE: 20% - 35%",
    },
  ];

  return (
    <section id="the-problem" className="py-20 md:py-28 relative bg-ast-night">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-pill bg-rose-500/10 border border-rose-500/25 text-rose-300">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
            <span className="ast-kicker text-rose-300">The Reality of Freelancing in Tunisia</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Freelancing shouldn't feel like an{" "}
            <span className="text-rose-400 inline-block underline decoration-rose-500/30 decoration-2 underline-offset-8">
              unprotected gamble
            </span>.
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Thousands of talented Tunisian designers, developers, writers, and marketers
            lose time and income every month to broken informal arrangements.
          </p>
        </div>

        {/* 3 Interactive Forensic Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, idx) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: durSlow, delay: idx * 0.08, ease: easeVague }}
              >
                <InteractiveGlowCard
                  glowColor="rgba(244, 63, 94, 0.12)"
                  className="h-full bg-ast-night-2/80 border-ast-teal-400/15 hover:border-rose-400/40 p-6 flex flex-col justify-between group shadow-ast-card"
                >
                  <div className="space-y-4">
                    {/* Top Forensic Header */}
                    <div className="flex items-center justify-between border-b border-rose-500/15 pb-3">
                      <span className="font-mono text-[10px] text-rose-400/80 tracking-widest uppercase">
                        {problem.code}
                      </span>
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 font-medium">
                        {problem.meta}
                      </span>
                    </div>

                    {/* Icon & Title */}
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-12 bg-rose-500/10 border border-rose-500/25 flex items-center justify-center text-rose-400 group-hover:scale-105 transition-transform duration-fast ease-courant shadow-glow-soft">
                        <Icon className="w-6 h-6" />
                      </div>

                      <h3 className="font-heading font-bold text-xl text-white group-hover:text-rose-100 transition-colors duration-fast">
                        {problem.title}
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {problem.description}
                      </p>
                    </div>
                  </div>

                  {/* Common Frustration Quote Box */}
                  <div className="mt-6 pt-4 border-t border-ast-teal-400/10 bg-ast-night/60 -mx-6 -mb-6 p-4 rounded-b-18">
                    <p className="text-xs italic text-slate-400 font-mono flex items-start gap-1.5">
                      <ArrowDownRight className="w-3.5 h-3.5 text-rose-400 flex-shrink-0 mt-0.5" />
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
