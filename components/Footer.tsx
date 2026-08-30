"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp, Mail, ShieldCheck } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === "dark";

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={`relative border-t pt-16 pb-12 overflow-hidden transition-colors ${
      isDark ? "border-ast-teal-400/15 bg-ast-night" : "border-slate-200 bg-white"
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className={`grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b ${
          isDark ? "border-ast-teal-400/15" : "border-slate-200"
        }`}>
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center">
                <div className="absolute -inset-1 bg-ast-teal-400/20 rounded-pill blur-md animate-pulse-wave" />
                <div className={`relative w-10 h-10 rounded-12 border flex items-center justify-center p-1.5 shadow-glow-soft overflow-hidden ${
                  isDark ? "bg-ast-night-2/90 border-ast-teal-400/30" : "bg-slate-50 border-slate-200 shadow-sm"
                }`}>
                  <Image
                    src="/logo.png"
                    alt="Asteria Freelance Logo"
                    width={36}
                    height={36}
                    className="w-full h-full object-contain filter drop-shadow-[0_0_6px_rgba(96,200,212,0.6)]"
                  />
                </div>
              </div>
              <span className={`font-heading font-bold text-xl ${isDark ? "text-white" : "text-slate-900"}`}>
                Asteria <span className="text-ast-teal-400">{t.navbar.brandTag}</span>
              </span>
            </div>

            <p className={`text-sm max-w-md leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              {t.footer.tagline}
            </p>

            <div className="flex items-center gap-2 text-xs font-mono pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span className={`ast-kicker ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                {t.footer.tunisiaFirst}
              </span>
            </div>
          </div>

          {/* Col 2: Navigation shortcuts */}
          <div className="md:col-span-3 space-y-3">
            <h4 className={`ast-kicker ${isDark ? "text-white" : "text-slate-900"}`}>
              {t.footer.navHeader}
            </h4>
            <ul className={`space-y-2 text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              <li>
                <a href="#the-problem" className="hover:text-ast-teal-400 transition-colors duration-fast ease-courant">
                  {t.navbar.navReality}
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-ast-teal-400 transition-colors duration-fast ease-courant">
                  {t.navbar.navHowItWorks}
                </a>
              </li>
              <li>
                <a href="#founding-cohort" className="hover:text-ast-teal-400 transition-colors duration-fast ease-courant">
                  {t.navbar.navPerks}
                </a>
              </li>
              <li>
                <a href="#waitlist" className="hover:text-ast-teal-400 transition-colors duration-fast ease-courant">
                  {t.navbar.ctaJoin}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-ast-teal-400 transition-colors duration-fast ease-courant">
                  {t.navbar.navFaq}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="md:col-span-3 space-y-3">
            <h4 className={`ast-kicker ${isDark ? "text-white" : "text-slate-900"}`}>
              {t.footer.contactHeader}
            </h4>
            <p className={`text-xs ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              {t.footer.contactDesc}
            </p>
            <a
              href="mailto:contact@asteriafreelance.com"
              className={`inline-flex items-center gap-2 px-3 py-2 rounded-10 border text-xs font-mono text-ast-teal-400 transition-all duration-fast ease-courant ${
                isDark 
                  ? "bg-ast-night-2/70 border-ast-teal-400/20 hover:border-ast-teal-400/40 hover:bg-ast-night-2" 
                  : "bg-slate-50 border-slate-200 hover:border-ast-teal-900/30 hover:bg-white text-ast-teal-900"
              }`}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>contact@asteriafreelance.com</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>
            &copy; {new Date().getFullYear()} Asteria Freelance. {t.footer.rights}
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-ast-teal-400 transition-all duration-fast ease-courant group"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-fast ease-courant" />
          </button>
        </div>

      </div>
    </footer>
  );
}
