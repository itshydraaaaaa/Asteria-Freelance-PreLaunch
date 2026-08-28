"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp, Mail, ShieldCheck } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-ast-teal-400/15 bg-ast-night pt-16 pb-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-ast-teal-400/15">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center">
                <div className="absolute -inset-1 bg-ast-teal-400/20 rounded-pill blur-md animate-pulse-wave" />
                <div className="relative w-10 h-10 rounded-12 bg-ast-night-2/90 border border-ast-teal-400/30 flex items-center justify-center p-1.5 shadow-glow-soft overflow-hidden">
                  <Image
                    src="/logo.png"
                    alt="Asteria Freelance Logo"
                    width={36}
                    height={36}
                    className="w-full h-full object-contain filter drop-shadow-[0_0_6px_rgba(96,200,212,0.6)]"
                  />
                </div>
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Asteria <span className="text-ast-teal-400">Freelance</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Tunisia&apos;s dedicated freelance marketplace designed to eliminate non-payment
              and informal risk through milestone escrow, KYC verification, and local TND payouts.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="ast-kicker text-slate-300">Tunisia First • Expanding to MENA Post-Launch</span>
            </div>
          </div>

          {/* Col 2: Navigation shortcuts */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="ast-kicker text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#the-problem" className="hover:text-ast-teal-400 transition-colors duration-fast ease-courant">
                  The Problem
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-ast-teal-400 transition-colors duration-fast ease-courant">
                  How Escrow Works
                </a>
              </li>
              <li>
                <a href="#founding-cohort" className="hover:text-ast-teal-400 transition-colors duration-fast ease-courant">
                  Founding Perks
                </a>
              </li>
              <li>
                <a href="#waitlist" className="hover:text-ast-teal-400 transition-colors duration-fast ease-courant">
                  Join Waitlist
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-ast-teal-400 transition-colors duration-fast ease-courant">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="ast-kicker text-white">
              Contact & Inquiries
            </h4>
            <p className="text-xs text-slate-400">
              Have questions about the founding cohort or platform partnerships?
            </p>
            <a
              href="mailto:contact@asteriafreelance.com"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-10 bg-ast-night-2/70 border border-ast-teal-400/20 text-xs font-mono text-ast-teal-400 hover:border-ast-teal-400/40 hover:bg-ast-night-2 transition-all duration-fast ease-courant"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>contact@asteriafreelance.com</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>
            &copy; {new Date().getFullYear()} Asteria Freelance. All rights reserved. Pre-launch development.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-ast-teal-400 transition-all duration-fast ease-courant group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-fast ease-courant" />
          </button>
        </div>

      </div>
    </footer>
  );
}
