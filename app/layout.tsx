import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ettore Arpini | AI Governance Strategy and Impact",
  description: "Ettore Arpini develops impact strategies, partnerships, and institutions to help countries and organizations shape the impacts of advanced AI.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg?v=20260716-ea",
    shortcut: "/favicon.svg?v=20260716-ea",
  },
  metadataBase: new URL("https://ettorearpini.com"),
  openGraph: {
    title: "Ettore Arpini | AI Governance Strategy and Impact",
    description: "Strategy, institutions, and middle powers in the age of advanced AI.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Ettore Arpini — Making AI governance real" }],
    type: "website",
    url: "/",
    siteName: "Ettore Arpini",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ettore Arpini | AI Governance Strategy and Impact",
    description: "Strategy, institutions, and middle powers in the age of advanced AI.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ettore Arpini",
    url: "https://ettorearpini.com/",
    jobTitle: "AI Governance Strategist",
    description: "Strategy and impact professional working on AI governance, institutional development, and international cooperation.",
    sameAs: [
      "https://www.linkedin.com/in/arpini",
      "https://x.com/ettorearpini",
      "https://arpini.substack.com",
    ],
    knowsAbout: ["AI governance", "AI policy", "International AI governance", "AI geopolitics", "Impact strategy", "Institutional strategy"],
  };

  return <html lang="en"><head><link rel="stylesheet" href="/site.css?v=20260715-2" /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }} /></head><body>{children}</body></html>;
}
