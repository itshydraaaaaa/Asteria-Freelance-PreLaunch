export type SkillCategory =
  | "Development & Tech"
  | "UI/UX & Graphic Design"
  | "Content & Copywriting"
  | "Digital Marketing & SEO"
  | "Translation & Localization"
  | "Video Editing & Animation"
  | "Virtual Assistance & Admin"
  | "Other";

export type ReferralSource =
  | "Facebook Group"
  | "LinkedIn"
  | "Instagram"
  | "Friend or Colleague"
  | "Tech Community (e.g. Discord/Slack)"
  | "Other";

export interface WaitlistFormData {
  fullName: string;
  email: string;
  skillCategory: SkillCategory | "";
  referralSource?: ReferralSource | "";
}

export interface WaitlistRecord {
  id?: string;
  full_name: string;
  email: string;
  role: "freelancer" | "client" | "other";
  skill_category: string;
  referral_source?: string | null;
  created_at?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}
