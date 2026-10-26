import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: "Kenneth Bitun — Full-stack & AI Engineering", template: "%s — Kenneth Bitun" },
  description: "A portfolio of full-stack product work, machine-learning projects, and the engineering decisions that connect them.",
  keywords: ["Kenneth Bitun", "full-stack developer", "AI engineering", "machine learning", "portfolio"],
  authors: [{ name: "Kenneth Bitun" }],
  openGraph: {
    title: "Kenneth Bitun — Full-stack & AI Engineering",
    description: "Software that connects interfaces, data, and intelligent systems.",
    type: "website",
    images: [{ url: "/foodcast-cover.webp", alt: "Rice fields used as Foodcast source artwork" }],
  },
};
export const viewport: Viewport = { colorScheme: "light dark", themeColor: "#F8F7F4" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org", "@type": "Person", name: "Kenneth Bitun",
    jobTitle: "Full-stack developer",
    description: "Full-stack developer exploring AI engineering and connected software systems.",
  };
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <ThemeProvider><Navbar /><main id="main-content">{children}</main><Footer /></ThemeProvider>
      </body>
    </html>
  );
}
