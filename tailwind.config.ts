import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ast: {
          "teal-900": "#11606e",
          "teal-400": "#60c8d4",
          night: "#071b22",
          "night-2": "#0a2b34",
          "surface-dark-2": "#0b4a55",
          surface: "#ffffff",
          "surface-alt": "#f5f8f8",
          ink: "#12201f",
          "ink-soft": "#4b5c5c",
          "ink-faint": "#8a9695",
          line: "#e2e8e7",
          // Backward compatibility mappings
          primary: "#11606e",
          light: "#60c8d4",
          dark: "#0a2b34",
          deep: "#071b22",
        },
      },
      fontFamily: {
        heading: ["var(--font-sora)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      borderRadius: {
        "6": "6px",
        "8": "8px",
        "10": "10px",
        "12": "12px",
        "14": "14px",
        "16": "16px",
        "18": "18px",
        "26": "26px",
        pill: "9999px",
      },
      transitionDuration: {
        fast: "150ms",
        base: "300ms",
        slow: "500ms",
        ambient: "3200ms",
      },
      transitionTimingFunction: {
        vague: "cubic-bezier(.16,1,.3,1)",
        courant: "cubic-bezier(.65,0,.35,1)",
        maree: "cubic-bezier(.37,0,.63,1)",
      },
      boxShadow: {
        "glow-soft": "0 0 32px rgba(96,200,212,.16)",
        "glow-cyan": "0 0 24px rgba(96,200,212,.28)",
        "premium": "0 28px 70px -34px rgba(17,96,110,.42)",
        "ast-card": "0 10px 30px -10px rgba(7, 27, 34, 0.7)",
      },
      backgroundImage: {
        "dark-section": "linear-gradient(145deg, #071b22 0%, #0e424d 100%)",
        "light-section": "linear-gradient(180deg, #f7faf9 0%, #fff 26%, #fff 100%)",
        "shimmer-sweep": "linear-gradient(100deg, transparent 38%, rgba(255,255,255,.34) 50%, transparent 62%)",
        "accent-line": "linear-gradient(90deg, transparent, #60c8d4, transparent)",
      },
      animation: {
        "logo-breathe": "logoBreathe 5.5s cubic-bezier(.65,0,.35,1) infinite",
        "wave-drift": "waveDrift 16s cubic-bezier(.37,0,.63,1) infinite",
        "shimmer-sweep": "shimmerSweep 3.2s cubic-bezier(.37,0,.63,1) infinite",
        "pulse-wave": "pulseWave 3.2s cubic-bezier(.37,0,.63,1) infinite",
      },
      keyframes: {
        logoBreathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.92" },
          "50%": { transform: "scale(1.03)", opacity: "1" },
        },
        waveDrift: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(1deg)" },
        },
        shimmerSweep: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseWave: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.04)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
