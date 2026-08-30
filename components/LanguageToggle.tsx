"use client";

import React, { useEffect, useState } from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { useTheme } from "./ThemeProvider";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { locale, setLocale, toggleLocale } = useLanguage();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-16 h-9 rounded-10 bg-black/5 dark:bg-white/5 border border-transparent ${className}`} />
    );
  }

  const isDark = theme === "dark";

  return (
    <div
      className={`inline-flex items-center p-1 rounded-10 border transition-all duration-fast ease-courant text-xs font-mono font-semibold select-none ${
        isDark
          ? "bg-ast-night-2/90 border-ast-teal-400/25 text-slate-300 shadow-glow-soft"
          : "bg-white/90 border-ast-teal-900/15 text-slate-700 shadow-sm"
      } ${className}`}
    >
      <button
        onClick={() => setLocale("en")}
        className={`px-2 py-1 rounded-6 transition-all duration-fast ${
          locale === "en"
            ? "bg-ast-teal-400 text-ast-night font-bold shadow-xs"
            : "hover:text-ast-teal-400 opacity-70 hover:opacity-100"
        }`}
        title="Switch to English"
        aria-label="Switch to English"
      >
        EN
      </button>

      <span className="text-slate-400/40 px-0.5">•</span>

      <button
        onClick={() => setLocale("fr")}
        className={`px-2 py-1 rounded-6 transition-all duration-fast ${
          locale === "fr"
            ? "bg-ast-teal-400 text-ast-night font-bold shadow-xs"
            : "hover:text-ast-teal-400 opacity-70 hover:opacity-100"
        }`}
        title="Passer en Français"
        aria-label="Passer en Français"
      >
        FR
      </button>
    </div>
  );
}
