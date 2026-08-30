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
  Lock,
  User,
  Mail,
  Briefcase,
  Compass
} from "lucide-react";
import { WaitlistFormData } from "@/lib/types";
import { submitWaitlistSignup } from "@/lib/supabase";
import { trackEvent } from "@/lib/analytics";
import { easeVague, durSlow, FivePointWaveLoader, WaveLineDivider } from "@/lib/motion";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";

export default function WaitlistForm() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === "dark";

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

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim());
  const isNameValid = formData.fullName.trim().length >= 2;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client validation
    if (!isNameValid) {
      setStatus("error");
      setErrorMessage(t.waitlist.validationName);
      return;
    }

    if (!isEmailValid) {
      setStatus("error");
      setErrorMessage(t.waitlist.validationEmail);
      return;
    }

    if (!formData.skillCategory) {
      setStatus("error");
      setErrorMessage(t.waitlist.validationSkill);
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
        setErrorMessage(res.message || t.waitlist.errorGeneric);
      }
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(t.waitlist.errorNetwork);
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
    const text = encodeURIComponent(t.waitlist.shareSocialText);

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
    <section id="waitlist" className="py-20 md:py-28 relative">
      {/* Ambient Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div className="w-[700px] h-[450px] bg-ast-teal-900/15 rounded-pill blur-[160px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Form Container Card */}
        <div className={`rounded-26 ast-art-glass shadow-premium p-6 sm:p-10 md:p-12 relative overflow-hidden hud-corner ${
          isDark ? "" : "bg-white/95 border-slate-200 shadow-md"
        }`}>
          
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
                <div className="w-16 h-16 rounded-18 bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-emerald-500 mx-auto shadow-glow-soft">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-4 py-1 rounded-pill bg-emerald-500/10 border border-emerald-500/30 text-emerald-500">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span className="ast-kicker">{t.waitlist.successBadge}</span>
                  </div>
                  <h3 className={`font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}>
                    {t.waitlist.successTitle}, {formData.fullName.split(" ")[0]}!
                  </h3>
                  <p className={`text-sm sm:text-base max-w-lg mx-auto leading-relaxed ${
                    isDark ? "text-slate-300" : "text-slate-600"
                  }`}>
                    {t.waitlist.successMsgPre}
                    <strong className="text-emerald-500 font-semibold">{t.waitlist.successMsgCohort}</strong>
                    {t.waitlist.successMsgPost}
                    <span className={`font-mono font-medium ${isDark ? "text-white" : "text-slate-900"}`}>{formData.email}</span>
                    {t.waitlist.successMsgEnd}
                  </p>
                </div>

                {/* Holographic Iridescent Pass Card */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: durSlow, delay: 0.2, ease: easeVague }}
                  className={`max-w-md mx-auto p-6 sm:p-7 rounded-26 border text-left space-y-5 shadow-premium holographic-sheen relative overflow-hidden ${
                    isDark 
                      ? "bg-gradient-to-br from-ast-night-2 via-ast-surface-dark-2/60 to-ast-night border-ast-teal-400/40" 
                      : "bg-gradient-to-br from-white via-slate-50 to-white border-ast-teal-900/20 shadow-md"
                  }`}
                >
                  {/* Top Specular Edge */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />

                  <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="relative flex items-center justify-center">
                        <div className="absolute -inset-1 bg-ast-teal-400/30 rounded-pill blur-xs animate-pulse-wave" />
                        <div className={`relative w-9 h-9 rounded-10 border flex items-center justify-center p-1.5 overflow-hidden shadow-glow-soft ${
                          isDark ? "bg-ast-night-2 border-ast-teal-400/50" : "bg-white border-slate-200 shadow-sm"
                        }`}>
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
                        <span className={`font-heading font-extrabold text-sm block ${isDark ? "text-white" : "text-slate-900"}`}>
                          {t.waitlist.passTitle}
                        </span>
                        <span className="font-mono text-[9px] text-ast-teal-400 tracking-wider">
                          {t.waitlist.passGenesis}
                        </span>
                      </div>
                    </div>
                    
                    <span className="ast-kicker text-emerald-500 px-2.5 py-1 rounded-6 bg-emerald-500/15 border border-emerald-500/40">
                      {t.waitlist.passFoundingTalent}
                    </span>
                  </div>

                  {/* Pass Metadata Grid */}
                  <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                    <div>
                      <span className="ast-kicker text-slate-400 block text-[9px]">{t.waitlist.passMemberName}</span>
                      <span className={`font-semibold truncate block text-sm pt-0.5 ${isDark ? "text-white" : "text-slate-900"}`}>{formData.fullName}</span>
                    </div>
                    <div>
                      <span className="ast-kicker text-slate-400 block text-[9px]">{t.waitlist.passDiscipline}</span>
                      <span className="font-semibold text-ast-teal-400 truncate block text-sm pt-0.5">{formData.skillCategory}</span>
                    </div>
                  </div>

                  {/* Pass Footer */}
                  <div className="pt-3 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className={`ast-kicker flex items-center gap-1 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                      <Lock className="w-3 h-3 text-emerald-500" />
                      {t.waitlist.passStatus}
                    </span>
                    <span className="text-emerald-500 font-semibold">{t.waitlist.passFeeBenefit}</span>
                  </div>
                </motion.div>

                {/* Share Section */}
                <div className="space-y-4 pt-4 border-t border-ast-teal-400/15">
                  <p className={`text-xs sm:text-sm font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                    {t.waitlist.shareHeading}
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={() => handleSocialShare("whatsapp")}
                      className="px-5 py-2.5 rounded-12 text-xs font-semibold bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/25 transition-all duration-fast ease-courant flex items-center gap-2 shadow-glow-soft"
                    >
                      <span>{t.waitlist.shareWhatsApp}</span>
                    </button>
                    <button
                      onClick={() => handleSocialShare("linkedin")}
                      className="px-5 py-2.5 rounded-12 text-xs font-semibold bg-[#0A66C2]/15 border border-[#0A66C2]/40 text-[#0A66C2] dark:text-[#70b5f9] hover:bg-[#0A66C2]/25 transition-all duration-fast ease-courant flex items-center gap-2 shadow-glow-soft"
                    >
                      <span>{t.waitlist.shareLinkedIn}</span>
                    </button>
                    <button
                      onClick={handleCopyShare}
                      className={`px-5 py-2.5 rounded-12 text-xs font-semibold border transition-all duration-fast ease-courant flex items-center gap-2 shadow-glow-soft ${
                        isDark 
                          ? "bg-ast-night-2 border-ast-teal-400/25 text-slate-200 hover:text-white hover:border-ast-teal-400/50" 
                          : "bg-white border-slate-200 text-slate-800 hover:border-ast-teal-900/30"
                      }`}
                    >
                      {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedLink ? t.waitlist.shareCopied : t.waitlist.shareCopy}</span>
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
                  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-pill border shadow-glow-soft ${
                    isDark ? "bg-ast-night-2 border-ast-teal-400/30 text-ast-teal-400" : "bg-white border-ast-teal-900/20 text-ast-teal-900 shadow-sm"
                  }`}>
                    <ShieldCheck className="w-3.5 h-3.5 text-ast-teal-400" />
                    <span className="ast-kicker">{t.waitlist.badge}</span>
                  </div>

                  <h2 className={`font-heading font-extrabold text-3xl sm:text-4xl tracking-tight ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}>
                    {t.waitlist.title}
                  </h2>

                  <p className={`text-sm sm:text-base ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                    {t.waitlist.subtitle}
                  </p>
                </div>

                {/* Duplicate Notification */}
                {status === "duplicate" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: durSlow, ease: easeVague }}
                    className={`p-4 rounded-14 border flex items-start gap-3 text-xs sm:text-sm shadow-glow-soft ${
                      isDark ? "bg-ast-night border-ast-teal-400/35 text-slate-200" : "bg-teal-50 border-teal-200 text-slate-800"
                    }`}
                  >
                    <AlertCircle className="w-5 h-5 text-ast-teal-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className={isDark ? "text-white" : "text-slate-900"}>{t.waitlist.duplicateTitle}</strong> {t.waitlist.duplicateMsg}
                    </div>
                  </motion.div>
                )}

                {/* Error Banner */}
                {status === "error" && errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: durSlow, ease: easeVague }}
                    className="p-4 rounded-14 bg-rose-500/10 border border-rose-500/35 flex items-start gap-3 text-rose-500 text-xs sm:text-sm font-medium"
                  >
                    <AlertCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">{errorMessage}</div>
                  </motion.div>
                )}

                {/* Form Fields */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Full Name */}
                    <div className="space-y-2 text-left">
                      <div className="flex items-center justify-between">
                        <label 
                          htmlFor="fullName"
                          className={`block ast-kicker ${isDark ? "text-slate-300" : "text-slate-700"}`}
                        >
                          {t.waitlist.fullNameLabel} <span className="text-ast-teal-400">*</span>
                        </label>
                        {isNameValid && (
                          <span className="flex items-center gap-1 text-[10px] text-emerald-500 font-mono">
                            <Check className="w-3 h-3" /> Valid
                          </span>
                        )}
                      </div>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder={t.waitlist.fullNamePlaceholder}
                          className="w-full pl-10 pr-4 py-3.5 rounded-12 ast-glass-input text-sm font-sans"
                          disabled={status === "loading"}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2 text-left">
                      <div className="flex items-center justify-between">
                        <label 
                          htmlFor="email"
                          className={`block ast-kicker ${isDark ? "text-slate-300" : "text-slate-700"}`}
                        >
                          {t.waitlist.emailLabel} <span className="text-ast-teal-400">*</span>
                        </label>
                        {isEmailValid && (
                          <span className="flex items-center gap-1 text-[10px] text-emerald-500 font-mono">
                            <Check className="w-3 h-3" /> Valid
                          </span>
                        )}
                      </div>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder={t.waitlist.emailPlaceholder}
                          className="w-full pl-10 pr-4 py-3.5 rounded-12 ast-glass-input text-sm font-sans"
                          disabled={status === "loading"}
                        />
                      </div>
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Primary Skill */}
                    <div className="space-y-2 text-left">
                      <label 
                        htmlFor="skillCategory"
                        className={`block ast-kicker ${isDark ? "text-slate-300" : "text-slate-700"}`}
                      >
                        {t.waitlist.skillLabel} <span className="text-ast-teal-400">*</span>
                      </label>
                      <div className="relative">
                        <Briefcase className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <select
                          id="skillCategory"
                          name="skillCategory"
                          required
                          value={formData.skillCategory}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3.5 rounded-12 ast-glass-input text-sm cursor-pointer font-sans"
                          disabled={status === "loading"}
                        >
                          <option value="" disabled className={isDark ? "text-slate-500" : "text-slate-400"}>
                            {t.waitlist.skillPlaceholder}
                          </option>
                          {t.categories.map((category) => (
                            <option key={category} value={category} className={isDark ? "bg-[#0a2b34] text-white" : "bg-white text-slate-900"}>
                              {category}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Referral Source */}
                    <div className="space-y-2 text-left">
                      <label 
                        htmlFor="referralSource"
                        className={`block ast-kicker ${isDark ? "text-slate-300" : "text-slate-700"}`}
                      >
                        {t.waitlist.referralLabel} <span className="text-slate-400 text-[10px] normal-case">{t.waitlist.referralOptional}</span>
                      </label>
                      <div className="relative">
                        <Compass className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <select
                          id="referralSource"
                          name="referralSource"
                          value={formData.referralSource}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3.5 rounded-12 ast-glass-input text-sm cursor-pointer font-sans"
                          disabled={status === "loading"}
                        >
                          <option value="" className={isDark ? "text-slate-500" : "text-slate-400"}>
                            {t.waitlist.referralPlaceholder}
                          </option>
                          {t.referrals.map((source) => (
                            <option key={source} value={source} className={isDark ? "bg-[#0a2b34] text-white" : "bg-white text-slate-900"}>
                              {source}
                            </option>
                          ))}
                        </select>
                      </div>
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
                          <span className="ast-kicker text-ast-night">{t.waitlist.submittingText}</span>
                        </div>
                      ) : (
                        <>
                          <span>{t.waitlist.submitButton}</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Microcopy Reassurance */}
                  <p className="text-center text-xs text-slate-400 font-mono pt-2">
                    {t.waitlist.reassurance}
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
