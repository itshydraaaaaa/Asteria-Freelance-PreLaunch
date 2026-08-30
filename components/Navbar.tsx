"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, Menu, X, ShieldCheck, ArrowRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const isDark = theme === "dark";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? "bg-ast-night/85 backdrop-blur-[12px] border-b border-ast-teal-400/15 shadow-premium py-3"
            : "bg-white/90 backdrop-blur-[12px] border-b border-ast-teal-900/10 shadow-sm py-3"
          : "bg-transparent py-5 sm:py-6"
      }`}
      style={{
        transitionTimingFunction: "cubic-bezier(.65,0,.35,1)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand Logo (Unboxed, Organic Wave Mark) */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-ast-teal-400 rounded-8"
          aria-label="Asteria Freelance Home"
        >
          {/* Asteria Logo with Natural Wave Breathing & Glow Halo */}
          <div className="relative flex items-center justify-center">
            {/* Diffuse glow halo */}
            <div 
              className="absolute -inset-2 bg-ast-teal-400/30 rounded-full blur-md group-hover:bg-ast-teal-400/50 transition-colors duration-fast" 
            />
            
            {/* Direct Wave Mark without any square frame */}
            <Image
              src="/logo.png"
              alt="Asteria Freelance Wave"
              width={34}
              height={34}
              className="relative w-8 h-8 object-contain animate-logo-breathe filter drop-shadow-[0_0_8px_rgba(96,200,212,0.6)]"
              priority
            />
          </div>

          <div className="flex items-center gap-1.5">
            <span className={`font-heading font-extrabold text-xl tracking-tight ${
              isDark ? "text-white" : "text-slate-900"
            }`}>
              Asteria
            </span>
            <span className="text-xs font-mono font-semibold text-ast-teal-400 uppercase tracking-wider px-1.5 py-0.5 rounded bg-ast-teal-400/10 border border-ast-teal-400/20">
              {t.navbar.brandTag}
            </span>
          </div>
        </a>

        {/* Center: Clean, De-cluttered Navigation Links */}
        <nav className={`hidden md:flex items-center gap-8 text-sm font-medium ${
          isDark ? "text-slate-300" : "text-slate-700"
        }`}>
          <button
            onClick={() => scrollToSection("the-problem")}
            className="hover:text-ast-teal-400 transition-colors duration-fast ease-courant focus:outline-none"
          >
            {t.navbar.navReality}
          </button>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="hover:text-ast-teal-400 transition-colors duration-fast ease-courant focus:outline-none"
          >
            {t.navbar.navHowItWorks}
          </button>
          <button
            onClick={() => scrollToSection("founding-cohort")}
            className="hover:text-ast-teal-400 transition-colors duration-fast ease-courant flex items-center gap-1.5 text-ast-teal-400 focus:outline-none font-semibold"
          >
            <Sparkles className="w-3.5 h-3.5" />
            {t.navbar.navPerks}
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="hover:text-ast-teal-400 transition-colors duration-fast ease-courant focus:outline-none"
          >
            {t.navbar.navFaq}
          </button>
        </nav>

        {/* Right: Clean Utility Group & CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />

          <button
            onClick={() => scrollToSection("waitlist")}
            className="relative group overflow-hidden px-5 py-2.5 rounded-12 text-xs sm:text-sm font-semibold font-heading text-ast-night bg-ast-teal-400 hover:bg-white active:scale-95 transition-all duration-fast ease-courant shadow-glow-soft flex items-center gap-1.5"
          >
            <span>{t.navbar.ctaJoin}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-10 border focus:outline-none ${
              isDark 
                ? "bg-ast-night-2/80 border-ast-teal-400/20 text-slate-200 hover:text-white" 
                : "bg-white border-slate-200 text-slate-700 hover:text-black shadow-sm"
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`md:hidden backdrop-blur-[14px] border-b px-6 py-5 mt-3 space-y-4 shadow-premium ${
          isDark ? "bg-ast-night/95 border-ast-teal-400/20" : "bg-white/95 border-slate-200"
        }`}>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-8 bg-ast-teal-900/10 border border-ast-teal-400/25 text-xs font-mono text-ast-teal-400">
            <span className="h-2 w-2 rounded-full bg-ast-teal-400"></span>
            <span className="ast-kicker">{t.navbar.cohortActive}</span>
          </div>

          <div className={`flex flex-col space-y-3 pt-2 text-base font-medium ${
            isDark ? "text-slate-200" : "text-slate-800"
          }`}>
            <button
              onClick={() => scrollToSection("the-problem")}
              className="text-left py-2 hover:text-ast-teal-400 border-b border-black/5 dark:border-white/5"
            >
              {t.navbar.navReality}
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-left py-2 hover:text-ast-teal-400 border-b border-black/5 dark:border-white/5"
            >
              {t.navbar.navHowItWorks}
            </button>
            <button
              onClick={() => scrollToSection("founding-cohort")}
              className="text-left py-2 text-ast-teal-400 flex items-center gap-2 border-b border-black/5 dark:border-white/5 font-semibold"
            >
              <Sparkles className="w-4 h-4" />
              {t.navbar.navPerks}
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-left py-2 hover:text-ast-teal-400"
            >
              {t.navbar.navFaq}
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={() => scrollToSection("waitlist")}
              className="w-full py-3.5 rounded-12 text-center font-heading font-semibold text-ast-night bg-ast-teal-400 hover:bg-white shadow-glow-soft flex items-center justify-center gap-2 transition-all duration-fast"
            >
              <ShieldCheck className="w-5 h-5 text-ast-teal-900" />
              {t.navbar.claimSpot}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
