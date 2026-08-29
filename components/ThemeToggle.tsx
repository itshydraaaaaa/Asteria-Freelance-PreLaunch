"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-9 h-9 rounded-10 bg-ast-night-2/40 border border-ast-teal-400/20 ${className}`} />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className={`relative p-2 rounded-10 border transition-all duration-fast ease-courant focus:outline-none focus-visible:ring-2 focus-visible:ring-ast-teal-400 ${
        isDark
          ? "bg-ast-night-2/90 border-ast-teal-400/25 text-ast-teal-400 hover:bg-ast-surface-dark-2/50 shadow-glow-soft"
          : "bg-white/90 border-ast-teal-900/20 text-ast-teal-900 hover:bg-slate-100 shadow-sm"
      } ${className}`}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 transition-transform duration-fast hover:rotate-45" />
        ) : (
          <Moon className="w-4 h-4 transition-transform duration-fast hover:-rotate-12" />
        )}
      </div>
    </button>
  );
}
