<div align="center">
  <img src="public/logo.png" alt="Asteria Freelance Logo" width="90" height="90" />
  
  # Asteria Freelance — Pre-Launch Teaser & Waitlist
  
  **Tunisia's First Escrow-Protected Freelance Marketplace**  
  *Expanding across the MENA region post-launch.*

  [![Next.js 14](https://img.shields.io/badge/Next.js-14.2-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.3-black?style=for-the-badge&logo=framer&logoColor=blue)](https://www.framer.com/motion/)
  [![Supabase](https://img.shields.io/badge/Supabase-Database_%26_RLS-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
  [![Vercel](https://img.shields.io/badge/Vercel-Deploy_Ready-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
</div>

---

## 🌊 Overview & Strategic Mission

**Asteria Freelance** is a modern freelance marketplace engineered specifically for the realities of the Tunisian freelance economy. 

This standalone pre-launch landing page executes a **supply-side-first launch strategy**: recruiting a high-caliber pool of **Founding Freelancers (Cohort 01)** across Development, UI/UX Design, Content, Marketing, Video, and Translation before launching public demand-side marketing to clients.

The website is crafted with a bespoke **"Deep-Water Futurism"** aesthetic (*Charte Graphique v2.1*), merging bank-grade payment trust with fluid micro-interactions and interactive telemetry.

---

## ⚡ Core Value Differentiators

* 🔒 **Milestone Escrow Vault**: Clients fund deliverables upfront into protected escrow before work begins. Zero risk of ghosting or unpaid work.
* 🪪 **Dual-Sided KYC Verification**: Verified identity and tax ID checks for both freelancers and clients eliminate burner profiles and scams.
* 💳 **Native TND Payment Rails**: Direct, native withdrawals in Tunisian Dinar (TND) via **Flouci**, **Konnect** (GIM-TEL / mobile wallet), and local bank accounts, with Stripe support for international hiring.
* 📊 **Transparent Platform Economics**: Flat 12% standard platform fee (88% net take-home pay), with discounted fee privileges for Founding Freelancers.
* 🤖 **Smart Proposal Assistance**: Integrated AI writing assistant for polishing project bids and gig scopes in seconds (positioned as a convenience, not a gimmick).
* 🎫 **Holographic Founding Member Pass**: Interactive confirmation pass featuring iridescent sheen, member verification, and 1-click sharing to WhatsApp, LinkedIn, and Twitter/X.

---

## 🎨 Design System — "Deep-Water Futurism"

### 1. Color Palette Tokens
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--teal-900` | `#11606e` | Primary deep brand teal (grounding anchor) |
| `--teal-400` | `#60c8d4` | Bright cyan/aqua (accent glows & interactive highlights) |
| `--premium-night` | `#071b22` | Deep-water background base |
| `--premium-night-2` | `#0a2b34` | Secondary dark container background |
| `--surface-dark-2` | `#0b4a55` | Elevated surface card fill |
| `--glow-soft` | `0 0 32px rgba(96,200,212,.16)` | Diffuse cyan halo |
| `--shadow-premium` | `0 28px 70px -34px rgba(17,96,110,.42)` | Deep elevation shadow |

### 2. Motion Easing Tokens
* **`--ease-vague`** (`cubic-bezier(.16, 1, .3, 1)`): *Wave* — soft, no-overshoot deceleration for entrances and reveals.
* **`--ease-courant`** (`cubic-bezier(.65, 0, .35, 1)`): *Current* — smooth symmetric curve for hover states and transitions.
* **`--ease-maree`** (`cubic-bezier(.37, 0, .63, 1)`): *Tide* — slow drifting curve for ambient background loops.

### 3. Typography
* **Headings / Display (H1–H3)**: [Sora](https://fonts.google.com/specimen/Sora)
* **Body / Paragraphs**: [Inter](https://fonts.google.com/specimen/Inter)
* **Eyebrows / Badges / Stats / Code**: [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (`.ast-kicker`, uppercase, `0.22em` tracking)

---

## 🏗️ Project Architecture

```
asteria-prelaunch/
├── app/
│   ├── layout.tsx             # Root layout with Sora, Inter, JetBrains Mono & SEO meta
│   ├── page.tsx               # Main single-page landing page combining all sections
│   ├── globals.css            # Brand CSS tokens, holographic sheen, HUD corner brackets
│   └── api/
│       └── waitlist/          # Serverless API endpoint for optional backend integrations
│           └── route.ts
├── components/
│   ├── Navbar.tsx             # Sticky frosted navbar with breathing wave logo & status pill
│   ├── Hero.tsx               # Liquid-metal headline, CTA & Escrow Protocol Terminal
│   ├── InteractiveGlowCard.tsx# Mouse-following radial illumination card component
│   ├── BackgroundMesh.tsx     # Ambient bathymetric plasma gradient canvas
│   ├── ProblemSection.tsx     # 3 forensic incident report cards for informal freelancing
│   ├── SolutionSection.tsx    # 4-stage connected escrow protocol sequence & ledger card
│   ├── FoundingCohortSection.tsx # Cohort 01 perks & live capacity tracker
│   ├── WaitlistForm.tsx       # Live validated waitlist form & Holographic Pass Card
│   ├── FaqSection.tsx         # Smooth accordion knowledge base
│   └── Footer.tsx             # Brand tagline, contact email & back-to-top interaction
├── lib/
│   ├── supabase.ts            # Type-safe Supabase client with preview mock fallback
│   ├── motion.tsx             # Framer Motion curves, 5-point wave loader, wave line divider
│   ├── analytics.ts           # trackEvent() telemetry stub (GA4, PostHog, Plausible)
│   ├── constants.ts           # Skill domains, referral channels, and FAQ content
│   └── types.ts               # TypeScript interfaces for forms and data models
├── public/
│   ├── logo.png               # Official Asteria wave emblem
│   └── icon.svg               # Vector brand mark for favicons
└── supabase/
    └── migrations/
        └── 20260828000000_create_waitlist.sql # Database schema with RLS Insert-Only policy
```

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/itshydraaaaaa/Asteria-Freelance-PreLaunch.git
cd Asteria-Freelance-PreLaunch
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env.local` file by copying `.env.example`:

```bash
cp .env.example .env.local
```

Populate `.env.local` with your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

> **Note:** If Supabase keys are left blank, the application gracefully operates in local development preview mode without throwing runtime errors.

### 4. Run Development Server
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### 5. Build for Production
```bash
npm run build
```

---

## 🗄️ Supabase Database & Security Setup

Execute the migration script in your Supabase SQL Editor:  
[`supabase/migrations/20260828000000_create_waitlist.sql`](supabase/migrations/20260828000000_create_waitlist.sql)

### Table Schema: `waitlist_signups`
* `id` (`UUID PRIMARY KEY DEFAULT gen_random_uuid()`)
* `full_name` (`TEXT NOT NULL`)
* `email` (`TEXT NOT NULL UNIQUE`)
* `role` (`TEXT NOT NULL DEFAULT 'freelancer'`)
* `skill_category` (`TEXT NOT NULL`)
* `referral_source` (`TEXT`)
* `created_at` (`TIMESTAMPTZ DEFAULT now()`)

### Security Policies (Row-Level Security):
* **Public Insert-Only**: Anonymous visitors can submit their registration.
* **Privacy Protection**: Public `SELECT` is blocked by default under RLS so registrant emails cannot be scraped or accessed from client browsers.

---

## 🚢 Deployment to Vercel

1. Push your repository to GitHub.
2. Import the repository into [Vercel](https://vercel.com).
3. In the project settings, add the Environment Variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Click **Deploy**.

---

## 📄 License & Attribution

&copy; Asteria Freelance. All rights reserved.  
Built for the Tunisian freelance community • Expanding to MENA.
