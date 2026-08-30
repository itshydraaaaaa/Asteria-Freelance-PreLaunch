"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Locale, translations } from "@/lib/i18n";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check saved language or default to English
    const saved = localStorage.getItem("asteria-lang") as Locale | null;
    if (saved && (saved === "en" || saved === "fr")) {
      setLocaleState(saved);
      document.documentElement.lang = saved;
    } else {
      setLocaleState("en");
      document.documentElement.lang = "en";
    }
    setMounted(true);
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("asteria-lang", newLocale);
    document.documentElement.lang = newLocale;
  };

  const toggleLocale = () => {
    const next = locale === "en" ? "fr" : "en";
    setLocale(next);
  };

  const t = translations[locale] || translations.en;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      locale: "en" as Locale,
      setLocale: () => {},
      toggleLocale: () => {},
      t: translations.en,
    };
  }
  return context;
}
