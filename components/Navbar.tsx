"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, Menu, X, ShieldCheck } from "lucide-react";
import { easeCourant, durBase } from "@/lib/motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ast-night/85 backdrop-blur-[10px] border-b border-ast-teal-400/15 shadow-premium py-3"
          : "bg-transparent py-5"
      }`}
      style={{
        transitionTimingFunction: "cubic-bezier(.65,0,.35,1)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo & Status Pill */}
        <div className="flex items-center gap-3.5">
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-ast-teal-400 rounded-10"
            aria-label="Asteria Freelance Home"
          >
            {/* Asteria Logo with Signature Breathing & Soft Glow Halo */}
            <div className="relative flex items-center justify-center">
              {/* Diffuse glow halo */}
              <div 
                className="absolute -inset-1.5 bg-ast-teal-400/20 rounded-pill blur-md group-hover:bg-ast-teal-400/35 transition-colors duration-fast"
              />
              
              {/* Logo container with brand logoBreathe */}
              <div className="relative w-10 h-10 rounded-12 bg-ast-night-2/90 border border-ast-teal-400/30 flex items-center justify-center p-1.5 shadow-glow-soft animate-logo-breathe overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Asteria Freelance"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain filter drop-shadow-[0_0_6px_rgba(96,200,212,0.6)]"
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl tracking-tight text-white flex items-center gap-2">
                Asteria
                <span className="ast-kicker text-ast-teal-400 px-2 py-0.5 rounded-6 bg-ast-teal-900/30 border border-ast-teal-400/25">
                  Freelance
                </span>
              </span>
            </div>
          </a>

          {/* Founding Cohort Badge with Wave-Loader Rhythm Pulse */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-pill bg-ast-night-2/80 border border-ast-teal-400/20 text-[11px] font-mono tracking-wider text-ast-teal-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ast-teal-400 opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-ast-teal-400"></span>
            </span>
            <span className="ast-kicker text-ast-teal-400">Cohort 01 Pre-Launch</span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <button
            onClick={() => scrollToSection("the-problem")}
            className="hover:text-ast-teal-400 transition-colors duration-fast ease-courant focus:outline-none"
          >
            The Reality
          </button>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="hover:text-ast-teal-400 transition-colors duration-fast ease-courant focus:outline-none"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection("founding-cohort")}
            className="hover:text-ast-teal-400 transition-colors duration-fast ease-courant flex items-center gap-1.5 text-ast-teal-400/90 focus:outline-none"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Founding Perks
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="hover:text-ast-teal-400 transition-colors duration-fast ease-courant focus:outline-none"
          >
            FAQ
          </button>
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => scrollToSection("waitlist")}
            className="relative group overflow-hidden px-5 py-2.5 rounded-12 text-sm font-semibold font-heading text-ast-night bg-ast-teal-400 hover:bg-white active:scale-95 transition-all duration-fast ease-courant shadow-glow-soft"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-ast-teal-900" />
              Join Waitlist
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-10 bg-ast-night-2/80 border border-ast-teal-400/20 text-slate-200 hover:text-white focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-ast-night/95 backdrop-blur-[14px] border-b border-ast-teal-400/20 px-6 py-5 mt-3 space-y-4 shadow-premium">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-8 bg-ast-night-2/60 border border-ast-teal-400/20 text-xs font-mono text-ast-teal-400">
            <span className="h-2 w-2 rounded-full bg-ast-teal-400"></span>
            <span className="ast-kicker">Cohort 01 Pre-Launch Active</span>
          </div>

          <div className="flex flex-col space-y-3 pt-2 text-base font-medium text-slate-200">
            <button
              onClick={() => scrollToSection("the-problem")}
              className="text-left py-2 hover:text-ast-teal-400 border-b border-white/5"
            >
              The Reality
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-left py-2 hover:text-ast-teal-400 border-b border-white/5"
            >
              How It Works (Escrow & KYC)
            </button>
            <button
              onClick={() => scrollToSection("founding-cohort")}
              className="text-left py-2 text-ast-teal-400 flex items-center gap-2 border-b border-white/5"
            >
              <Sparkles className="w-4 h-4" />
              Founding Perks
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-left py-2 hover:text-ast-teal-400"
            >
              Frequently Asked Questions
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={() => scrollToSection("waitlist")}
              className="w-full py-3.5 rounded-12 text-center font-heading font-semibold text-ast-night bg-ast-teal-400 hover:bg-white shadow-glow-soft flex items-center justify-center gap-2 transition-all duration-fast"
            >
              <ShieldCheck className="w-5 h-5 text-ast-teal-900" />
              Claim Founding Spot
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
