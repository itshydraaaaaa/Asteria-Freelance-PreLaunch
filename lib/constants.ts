import { FaqItem, SkillCategory, ReferralSource } from "./types";

export const SKILL_CATEGORIES: SkillCategory[] = [
  "Development & Tech",
  "UI/UX & Graphic Design",
  "Content & Copywriting",
  "Digital Marketing & SEO",
  "Translation & Localization",
  "Video Editing & Animation",
  "Virtual Assistance & Admin",
  "Other",
];

export const REFERRAL_SOURCES: ReferralSource[] = [
  "Facebook Group",
  "LinkedIn",
  "Instagram",
  "Friend or Colleague",
  "Tech Community (e.g. Discord/Slack)",
  "Other",
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is Asteria Freelance, and why is it built for Tunisia first?",
    answer:
      "Asteria Freelance is a dedicated freelance marketplace engineered specifically for the realities of the Tunisian freelance economy before expanding across the MENA region. Unlike international platforms that complicate payments or informal social media groups with zero protection, Asteria provides formal contracts, milestone escrow, and native TND payouts via Flouci and Konnect.",
  },
  {
    question: "How does the milestone escrow payment guarantee work?",
    answer:
      "Before you start working on any milestone, the client deposits the agreed funds into Asteria's secure escrow. The money is locked and guaranteed. Once you submit your milestone deliverables and the client approves, the funds are immediately released to your Asteria balance—eliminating the risk of non-payment or ghosting.",
  },
  {
    question: "How do I withdraw my earnings in Tunisia?",
    answer:
      "We support direct local payment rails. You can cash out your earnings natively in Tunisian Dinar (TND) directly to your Flouci mobile wallet, Konnect wallet / GIM-TEL card, or via standard bank transfer. For international clients hiring you, Stripe integration is supported seamlessly without currency conversion headaches on your end.",
  },
  {
    question: "What are the benefits of joining as a Founding Freelancer?",
    answer:
      "Founding Freelancers who register on our pre-launch waitlist unlock an exclusive reduced platform fee during our launch period (significantly lower than the standard platform fee), an official Founding Freelancer verification badge on their public profile, early access to client project postings, and a direct channel to shape platform features.",
  },
  {
    question: "Is there any cost or commitment to join the waitlist?",
    answer:
      "No. Joining the waitlist is 100% free and requires zero commitment. It simply reserves your priority spot in Cohort 01 so you are first in line when we open initial onboarding.",
  },
  {
    question: "How does KYC verification protect me from scam clients?",
    answer:
      "Every client and freelancer undergoes real identity verification (KYC) before initiating funded contracts. This eliminates anonymous burner accounts, drastically cuts down scam postings, and ensures you are always dealing with verified individuals and registered businesses.",
  },
];

export const PLATFORM_STATS = [
  {
    label: "Payment Protection",
    value: "100% Escrow",
    description: "Funds deposited before work begins",
  },
  {
    label: "Local Payouts",
    value: "TND Native",
    description: "Flouci, Konnect & direct local bank transfers",
  },
  {
    label: "Identity Security",
    value: "KYC Verified",
    description: "Dual-sided verification for clients and talent",
  },
  {
    label: "Net Take-Home",
    value: "88% Payout",
    description: "Fair 12% standard platform fee (discounted for cohort)",
  },
];
