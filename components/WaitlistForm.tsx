"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  Sparkles,
  ArrowRight,
  QrCode,
  Lock
} from "lucide-react";
import { SKILL_CATEGORIES, REFERRAL_SOURCES } from "@/lib/constants";
import { WaitlistFormData } from "@/lib/types";
import { submitWaitlistSignup } from "@/lib/supabase";
import { trackEvent } from "@/lib/analytics";
import { easeVague, easeCourant, durSlow, FivePointWaveLoader, WaveLineDivider } from "@/lib/motion";
import { InteractiveGlowCard } from "./InteractiveGlowCard";

export default function WaitlistForm() {
  const [formData, setFormData] = useState<WaitlistFormData>({
    fullName: "",
    email: "",
    skillCategory: "",
    referralSource: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "duplicate" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedLink, setCopiedLink] = useState(false);

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 85,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#60c8d4", "#11606e", "#34d399", "#f59e0b", "#ffffff"],
      });
    } catch (e) {
      // Confetti fallback
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === "error" || status === "duplicate") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client validation
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      setStatus("error");
      setErrorMessage("Please enter your full name.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setStatus("error");
      setErrorMessage("Please provide a valid email address.");
      return;
    }

    if (!formData.skillCategory) {
      setStatus("error");
      setErrorMessage("Please select your primary skill category.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await submitWaitlistSignup({
        full_name: formData.fullName.trim(),
        email: formData.email.trim().toLowerCase(),
        role: "freelancer",
        skill_category: formData.skillCategory,
        referral_source: formData.referralSource || null,
      });

      if (res.success) {
        setStatus("success");
        triggerConfetti();
        trackEvent("waitlist_signup_success", {
          skill: formData.skillCategory,
          referral: formData.referralSource || "unspecified",
        });
      } else if (res.isDuplicate) {
        setStatus("duplicate");
        trackEvent("waitlist_signup_duplicate", { email: formData.email });
      } else {
        setStatus("error");
        setErrorMessage(res.message || "Failed to submit. Please try again.");
      }
    } catch (err: any) {
      setStatus("error");
      setErrorMessage("A network error occurred. Please check your connection.");
    }
  };

  const handleCopyShare = () => {
    const shareUrl = typeof window !== "undefined" ? window.location.href : "https://asteriafreelance.vercel.app";
    navigator.clipboard.writeText(shareUrl);
    setCopiedLink(true);
    trackEvent("waitlist_share_copied");
    setTimeout(() => setCopiedLink(false), 3000);
  };

  const handleSocialShare = (platform: "whatsapp" | "linkedin" | "twitter") => {
    const shareUrl = typeof window !== "undefined" ? window.location.href : "https://asteriafreelance.vercel.app";
    const text = encodeURIComponent(
      "Tunisia's first freelance marketplace with milestone escrow & Flouci/Konnect payouts is launching soon. Join the founding freelancer cohort with me:"
    );

    let url = "";
    if (platform === "whatsapp") {
      url = `https://api.whatsapp.com/send?text=${text}%20${encodeURIComponent(shareUrl)}`;
    } else if (platform === "linkedin") {
      url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    } else if (platform === "twitter") {
      url = `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(shareUrl)}`;
    }

    trackEvent("waitlist_share_click", { platform });
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="waitlist" className="py-20 md:py-28 relative bg-ast-night">
      {/* Ambient Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div className="w-[700px] h-[450px] bg-ast-teal-900/25 rounded-pill blur-[160px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Form Container Card */}
        <div className="rounded-26 ast-art-glass shadow-premium p-6 sm:p-10 md:p-12 relative overflow-hidden hud-corner">
          
          <AnimatePresence mode="wait">
            
            {/* SUCCESS STATE (Holographic Iridescent Pass Card) */}
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: durSlow, ease: easeVague }}
                className="space-y-8 text-center py-4"
              >
                <div className="w-16 h-16 rounded-18 bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto shadow-glow-soft">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-4 py-1 rounded-pill bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span className="ast-kicker text-emerald-300">Cohort 01 Verified Reservation</span>
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white">
                    Welcome aboard, {formData.fullName.split(" ")[0]}!
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                    You have secured your priority spot in the <strong className="text-emerald-300 font-semibold">Founding Freelancer Cohort</strong>. We will send an onboarding invitation code directly to <span className="font-mono text-white font-medium">{formData.email}</span> when launch access begins.
                  </p>
                </div>

                {/* Holographic Iridescent Pass Card */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: durSlow, delay: 0.2, ease: easeVague }}
                  className="max-w-md mx-auto p-6 sm:p-7 rounded-26 bg-gradient-to-br from-ast-night-2 via-ast-surface-dark-2/60 to-ast-night border border-ast-teal-400/40 text-left space-y-5 shadow-premium holographic-sheen relative overflow-hidden"
                >
                  {/* Top Specular Edge */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />

                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="relative flex items-center justify-center">
                        <div className="absolute -inset-1 bg-ast-teal-400/30 rounded-pill blur-xs animate-pulse-wave" />
                        <div className="relative w-9 h-9 rounded-10 bg-ast-night-2 border border-ast-teal-400/50 flex items-center justify-center p-1.5 overflow-hidden shadow-glow-soft">
                          <Image
                            src="/logo.png"
                            alt="Asteria Freelance"
                            width={32}
                            height={32}
                            className="w-full h-full object-contain filter drop-shadow-[0_0_4px_rgba(96,200,212,0.8)]"
                          />
                        </div>
                      </div>
                      <div>
                        <span className="font-heading font-extrabold text-sm text-white block">
                          Asteria Freelance Pass
                        </span>
                        <span className="font-mono text-[9px] text-ast-teal-400 tracking-wider">
                          GENESIS COHORT 01
                        </span>
                      </div>
                    </div>
                    
                    <span className="ast-kicker text-emerald-300 px-2.5 py-1 rounded-6 bg-emerald-500/20 border border-emerald-500/40">
                      FOUNDING TALENT
                    </span>
                  </div>

                  {/* Pass Metadata Grid */}
                  <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                    <div>
                      <span className="ast-kicker text-slate-400 block text-[9px]">MEMBER NAME</span>
                      <span className="font-semibold text-white truncate block text-sm pt-0.5">{formData.fullName}</span>
                    </div>
                    <div>
                      <span className="ast-kicker text-slate-400 block text-[9px]">DISCIPLINE</span>
                      <span className="font-semibold text-ast-teal-400 truncate block text-sm pt-0.5">{formData.skillCategory}</span>
                    </div>
                  </div>

                  {/* Pass Footer */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="ast-kicker flex items-center gap-1 text-slate-300">
                      <Lock className="w-3 h-3 text-emerald-400" />
                      STATUS: CONFIRMED
                    </span>
                    <span className="text-emerald-300 font-semibold">DISCOUNTED PLATFORM FEE</span>
                  </div>
                </motion.div>

                {/* Share Section */}
                <div className="space-y-4 pt-4 border-t border-ast-teal-400/15">
                  <p className="text-xs sm:text-sm font-medium text-slate-300">
                    Know another great Tunisian freelancer? Invite them to Cohort 01:
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={() => handleSocialShare("whatsapp")}
                      className="px-5 py-2.5 rounded-12 text-xs font-semibold bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/25 transition-all duration-fast ease-courant flex items-center gap-2 shadow-glow-soft"
                    >
                      <span>Share on WhatsApp</span>
                    </button>
                    <button
                      onClick={() => handleSocialShare("linkedin")}
                      className="px-5 py-2.5 rounded-12 text-xs font-semibold bg-[#0A66C2]/15 border border-[#0A66C2]/40 text-[#70b5f9] hover:bg-[#0A66C2]/25 transition-all duration-fast ease-courant flex items-center gap-2 shadow-glow-soft"
                    >
                      <span>Share on LinkedIn</span>
                    </button>
                    <button
                      onClick={handleCopyShare}
                      className="px-5 py-2.5 rounded-12 text-xs font-semibold bg-ast-night-2 border border-ast-teal-400/25 text-slate-200 hover:text-white hover:border-ast-teal-400/50 transition-all duration-fast ease-courant flex items-center gap-2 shadow-glow-soft"
                    >
                      {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedLink ? "Link Copied!" : "Copy Page Link"}</span>
                    </button>
                  </div>
                </div>

              </motion.div>
            ) : (

              /* FORM INPUT STATE */
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8"
              >
                {/* Header */}
                <div className="text-center max-w-xl mx-auto space-y-3">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-ast-night-2 border border-ast-teal-400/30 text-ast-teal-400 shadow-glow-soft">
                    <ShieldCheck className="w-3.5 h-3.5 text-ast-teal-400" />
                    <span className="ast-kicker">Cohort 01 Waitlist Form</span>
                  </div>

                  <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                    Join the Founding Freelancers
                  </h2>

                  <p className="text-sm sm:text-base text-slate-300">
                    Reserve your early onboarding access. No spam, no obligation—just guaranteed payment protection and founding fee benefits when we open.
                  </p>
                </div>

                {/* Duplicate Notification (Calm, Informational Tone) */}
                {status === "duplicate" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: durSlow, ease: easeVague }}
                    className="p-4 rounded-14 bg-ast-night border border-ast-teal-400/35 flex items-start gap-3 text-slate-200 text-xs sm:text-sm shadow-glow-soft"
                  >
                    <AlertCircle className="w-5 h-5 text-ast-teal-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">You are already on the list!</strong> We have your email recorded for Cohort 01. You will be notified as soon as initial invitations go out.
                    </div>
                  </motion.div>
                )}

                {/* Error Banner */}
                {status === "error" && errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: durSlow, ease: easeVague }}
                    className="p-4 rounded-14 bg-rose-500/10 border border-rose-500/35 flex items-start gap-3 text-rose-200 text-xs sm:text-sm font-medium"
                  >
                    <AlertCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">{errorMessage}</div>
                  </motion.div>
                )}

                {/* Form Fields */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Full Name */}
                    <div className="space-y-2 text-left">
                      <label 
                        htmlFor="fullName"
                        className="block ast-kicker text-slate-300"
                      >
                        Full Name <span className="text-ast-teal-400">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Yassine Ben Salem"
                        className="w-full px-4 py-3.5 rounded-12 ast-glass-input text-sm placeholder:text-slate-500 font-sans"
                        disabled={status === "loading"}
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2 text-left">
                      <label 
                        htmlFor="email"
                        className="block ast-kicker text-slate-300"
                      >
                        Email Address <span className="text-ast-teal-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="yassine@example.tn"
                        className="w-full px-4 py-3.5 rounded-12 ast-glass-input text-sm placeholder:text-slate-500 font-sans"
                        disabled={status === "loading"}
                      />
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Primary Skill */}
                    <div className="space-y-2 text-left">
                      <label 
                        htmlFor="skillCategory"
                        className="block ast-kicker text-slate-300"
                      >
                        Primary Skill / Discipline <span className="text-ast-teal-400">*</span>
                      </label>
                      <select
                        id="skillCategory"
                        name="skillCategory"
                        required
                        value={formData.skillCategory}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 rounded-12 ast-glass-input text-sm text-slate-100 bg-[#071b22] cursor-pointer font-sans"
                        disabled={status === "loading"}
                      >
                        <option value="" disabled className="text-slate-500">
                          Select your primary domain
                        </option>
                        {SKILL_CATEGORIES.map((category) => (
                          <option key={category} value={category} className="bg-ast-night-2 text-white">
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Referral Source */}
                    <div className="space-y-2 text-left">
                      <label 
                        htmlFor="referralSource"
                        className="block ast-kicker text-slate-300"
                      >
                        Where did you hear about us? <span className="text-slate-500 text-[10px] normal-case">(optional)</span>
                      </label>
                      <select
                        id="referralSource"
                        name="referralSource"
                        value={formData.referralSource}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 rounded-12 ast-glass-input text-sm text-slate-100 bg-[#071b22] cursor-pointer font-sans"
                        disabled={status === "loading"}
                      >
                        <option value="" className="text-slate-500">
                          Select a channel
                        </option>
                        {REFERRAL_SOURCES.map((source) => (
                          <option key={source} value={source} className="bg-ast-night-2 text-white">
                            {source}
                          </option>
                        ))}
                      </select>
                    </div>

                  </div>

                  {/* Submit Button with Five-Point Wave Loader */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-4 rounded-14 font-heading font-bold text-base text-ast-night bg-ast-teal-400 hover:bg-white active:scale-[0.99] disabled:opacity-70 transition-all duration-fast ease-courant shadow-glow-soft flex items-center justify-center gap-2.5"
                    >
                      {status === "loading" ? (
                        <div className="flex items-center gap-3">
                          <FivePointWaveLoader />
                          <span className="ast-kicker text-ast-night">Securing Your Spot...</span>
                        </div>
                      ) : (
                        <>
                          <span>Claim Founding Freelancer Spot</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Microcopy Reassurance */}
                  <p className="text-center text-xs text-slate-400 font-mono pt-2">
                    🔒 Zero spam. We only contact you with pre-launch updates and your personal onboarding invite.
                  </p>
                </form>
              </motion.div>
            )}

          </AnimatePresence>

        </div>

        {/* Decorative Wave Line Motif */}
        <WaveLineDivider className="mt-16" />

      </div>
    </section>
  );
}
