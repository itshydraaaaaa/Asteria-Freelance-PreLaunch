"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  Award, 
  Percent, 
  Compass, 
  Users2, 
  ArrowRight,
  ShieldAlert,
  Zap
} from "lucide-react";
import { easeVague, durSlow, WaveLineDivider } from "@/lib/motion";
import { InteractiveGlowCard } from "./InteractiveGlowCard";

export default function FoundingCohortSection() {
  const perks = [
    {
      code: "PERK_01",
      icon: Percent,
      title: "Discounted Platform Fee",
      description:
        "Founding Freelancers in Cohort 01 lock in a special reduced platform fee throughout our launch phase, keeping more of your hard-earned dinars.",
    },
    {
      code: "PERK_02",
      icon: Award,
      title: "Founding Member Profile Badge",
      description:
        "Stand out to top clients with a permanent 'Founding Freelancer' badge displayed on your public profile and proposal bids.",
    },
    {
      code: "PERK_03",
      icon: Compass,
      title: "Priority Project Visibility",
      description:
        "When verified clients post jobs, Founding Freelancer proposals receive elevated search placement and early notification pings.",
    },
    {
      code: "PERK_04",
      icon: Users2,
      title: "Direct Influence on Features",
      description:
        "Join a dedicated private feedback channel with our core engineering team to request tools, payout features, and workflow improvements.",
    },
  ];

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
    <section id="founding-cohort" className="py-20 md:py-28 relative bg-ast-night">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main Cohort Showcase Shell */}
        <div className="rounded-26 ast-art-glass p-8 sm:p-12 shadow-premium relative overflow-hidden hud-corner">
          
          {/* Ambient Lighting inside card */}
          <div className="absolute -top-28 -right-28 w-96 h-96 bg-ast-teal-400/12 rounded-pill blur-3xl pointer-events-none" />
          <div className="absolute -bottom-28 -left-28 w-96 h-96 bg-emerald-500/12 rounded-pill blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Description */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-pill bg-emerald-500/15 border border-emerald-500/35 text-emerald-300 shadow-glow-soft">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="ast-kicker text-emerald-300">Cohort 01 • Genesis Talent</span>
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                Don't just join at launch.{" "}
                <span className="text-emerald-300 block mt-1">
                  Help build Tunisia's freelance future.
                </span>
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                We are intentionally curating our first cohort of skilled Tunisian freelancers
                before releasing the platform to clients. Early sign-ups receive genuine platform incentives and early access.
              </p>

              {/* Scarcity Box with Ambient Pulse Border */}
              <div className="p-4 rounded-14 bg-ast-night/90 border border-emerald-500/30 flex items-start gap-3.5 shadow-glow-soft">
                <div className="w-2.5 h-2.5 rounded-pill bg-emerald-400 mt-1.5 animate-pulse-wave flex-shrink-0" />
                <div>
                  <div className="ast-kicker text-emerald-300 mb-0.5">Cohort 01 Allocation</div>
                  <p className="text-xs text-slate-300 font-mono leading-relaxed">
                    Founding slots are prioritized for verified Tunisian talent across Development, Design, Content, and Marketing.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={scrollToWaitlist}
                  className="px-7 py-4 rounded-14 font-heading font-bold text-sm text-ast-night bg-emerald-300 hover:bg-emerald-200 active:scale-95 transition-all duration-fast ease-courant shadow-glow-soft flex items-center gap-2.5 group"
                >
                  <span>Reserve Your Founding Slot</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Perks Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {perks.map((perk, idx) => {
                const Icon = perk.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: durSlow, delay: idx * 0.08, ease: easeVague }}
                  >
                    <InteractiveGlowCard
                      glowColor="rgba(52, 211, 153, 0.14)"
                      className="p-5 bg-ast-night/85 border-ast-teal-400/20 hover:border-emerald-400/40 space-y-3 shadow-ast-card"
                    >
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-10 bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-300 shadow-glow-soft">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-mono text-[10px] text-slate-400 tracking-wider">
                          {perk.code}
                        </span>
                      </div>

                      <h3 className="font-heading font-bold text-base text-white">
                        {perk.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed">
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
