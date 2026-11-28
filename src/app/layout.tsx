import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./credentials.css";


import "./portfolio-redesign.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], display: "swap", variable: "--font-mono", weight: ["400", "500"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: "Kenneth Bitun | Full-stack & Machine Learning", template: "%s | Kenneth Bitun" },
  description: "Kenneth Bitun is a Computer Science student at Our Lady of Fatima University building full-stack applications and exploring machine learning.",
  keywords: ["Kenneth Bitun", "full-stack development", "machine learning", "portfolio"],
  authors: [{ name: "Kenneth Bitun" }],
  openGraph: {
    title: "Kenneth Bitun | Full-stack & Machine Learning",
    description: "Full-stack applications, machine-learning research, and the engineering decisions that connect them.",
    type: "website",
    images: [{ url: "/kenneth-portrait.png", alt: "Portrait of Kenneth Bitun" }],
  },
};
export const viewport: Viewport = { colorScheme: "light dark", themeColor: [{ media: "(prefers-color-scheme: light)", color: "#f4f4ee" }, { media: "(prefers-color-scheme: dark)", color: "#1d1a25" }] };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org", "@type": "Person", name: "Kenneth Bitun",
    jobTitle: "Full-stack developer",
    description: "Full-stack developer exploring AI engineering and connected software systems.",
  };
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <ThemeProvider><Navbar /><main id="main-content">{children}</main><Footer /></ThemeProvider>
      </body>
    </html>
  );
}
