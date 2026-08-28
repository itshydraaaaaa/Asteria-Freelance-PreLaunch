# Asteria Freelance — Pre-Launch Teaser & Waitlist

A high-converting, supply-side-first pre-launch teaser landing page for **Asteria Freelance** — Tunisia's first escrow-protected freelance marketplace (expanding to MENA post-launch).

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Supabase**.

---

## 🌟 Key Features

- **Supply-Side & Trust-First Focus**: Tailored specifically for Tunisian freelancers with clear messaging around milestone escrow guarantees, dual-sided KYC verification, and native TND payouts via Flouci & Konnect.
- **The "Spoiler" Mechanics**: Previews the escrow vault, multi-milestone payments, and smart proposal drafting without exposing unfinished application screens.
- **Founding Cohort Recruitment**: Incentivizes early sign-ups with discounted platform fees, founding badges, and early platform access.
- **Supabase Waitlist Integration**: Real-time validation, duplicate email handling, Row-Level Security (RLS) insert-only policies, and celebratory share states (WhatsApp, LinkedIn, Twitter/X, direct link).
- **Lightweight & High Performance**: Mobile-first responsive design, ambient CSS/SVG gradient mesh, and zero heavy 3D dependencies for 90+ Lighthouse score optimization.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Motion**: [Framer Motion](https://www.framer.com/motion/)
- **Database / Backend**: [Supabase](https://supabase.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Effects**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local` and add your Supabase credentials:

```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

*(Note: If Supabase credentials are left empty, the site operates in a graceful development preview mode).*

### 3. Setup Supabase Table & RLS Policies
In your Supabase dashboard SQL Editor, execute the migration script located at:
[`supabase/migrations/20260828000000_create_waitlist.sql`](supabase/migrations/20260828000000_create_waitlist.sql)

This will:
- Create the `waitlist_signups` table
- Enforce unique lowercase emails
- Enable Row Level Security (RLS) with an **Insert-Only policy for anonymous users** (preventing public reads of registrant data)

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production
```bash
npm run build
```

---

## 🎨 Design System

- **Colors**:
  - Deep Navy: `#031417` / `#061d22`
  - Brand Dark Teal: `#0a3a40` (`--ast-dark`)
  - Primary Teal: `#11606e` (`--ast-primary`)
  - Accent Cyan: `#60c8d4` (`--ast-light`)
  - Surface Glass: `rgba(13, 72, 80, 0.4)`
- **Typography**:
  - Headings: `Exo 2`
  - Body: `Plus Jakarta Sans`
  - Code / Stats / Badges: `JetBrains Mono`

---

## 🚢 Deploy to Vercel

1. Push this repository to GitHub/GitLab.
2. Import project in [Vercel](https://vercel.com).
3. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to Environment Variables in Vercel settings.
4. Deploy!
