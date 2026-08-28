import type { Metadata, Viewport } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#071b22",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Asteria Freelance | Tunisia's Escrow-Protected Freelance Marketplace",
  description:
    "Never chase an unpaid invoice again. Join the Founding Freelancer Cohort for Asteria Freelance: milestone escrow protection, KYC-verified clients, and native TND payouts via Flouci and Konnect.",
  keywords: [
    "freelance Tunisia",
    "Tunisian freelancers",
    "Asteria freelance",
    "freelance escrow Tunisia",
    "Flouci payment freelance",
    "Konnect payment freelance",
    "freelance marketplace Tunisia",
    "Tunisia tech talent",
  ],
  authors: [{ name: "Asteria Freelance Team" }],
  creator: "Asteria Freelance",
  publisher: "Asteria",
  metadataBase: new URL("https://asteriafreelance.vercel.app"),
  openGraph: {
    title: "Asteria Freelance | Pre-Launch Founding Cohort",
    description:
      "Tunisia's first freelance marketplace with guaranteed milestone escrow, KYC verification, and local Flouci & Konnect payouts. Claim your Founding Freelancer spot.",
    url: "https://asteriafreelance.vercel.app",
    siteName: "Asteria Freelance",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asteria Freelance | Escrow-Protected Freelancing in Tunisia",
    description:
      "Get paid, guaranteed. No more ghosting or payment hurdles. Claim your founding freelancer badge & discounted platform fees.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-ast-night text-slate-100 font-sans antialiased selection:bg-ast-teal-400 selection:text-ast-night relative">
        {children}
      </body>
    </html>
  );
}
