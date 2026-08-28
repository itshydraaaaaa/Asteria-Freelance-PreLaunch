import React from "react";
import Navbar from "@/components/Navbar";
import BackgroundMesh from "@/components/BackgroundMesh";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FoundingCohortSection from "@/components/FoundingCohortSection";
import WaitlistForm from "@/components/WaitlistForm";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-ast-night text-slate-100 flex flex-col justify-between selection:bg-ast-teal-400 selection:text-ast-night">
      {/* Dynamic Ambient Deep-Water Mesh */}
      <BackgroundMesh />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 flex-1">
        {/* 1. Hero Section with Escrow Vault Lifecycle Widget */}
        <Hero />

        {/* 2. The Problem: Informal Freelance Risks in Tunisia */}
        <ProblemSection />

        {/* 3. The Solution / The Spoiler: Escrow, KYC, Flouci/Konnect, AI Assist */}
        <SolutionSection />

        {/* 4. Founding Cohort: Incentives, Discounts & Verified Badge */}
        <FoundingCohortSection />

        {/* 5. Waitlist Registration Form with Wave Loader & Pass Shimmer */}
        <WaitlistForm />

        {/* 6. FAQ Section with Courant Accordions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
