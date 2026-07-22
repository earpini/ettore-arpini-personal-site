import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Ettore Arpini | AI Governance Strategist",
  description: "Ettore Arpini works at the intersection of AI governance, strategy, institutional change, and international cooperation.",
  alternates: { canonical: "/about2/" },
  openGraph: {
    title: "About Ettore Arpini | AI Governance Strategist",
    description: "AI governance strategy, institutional change, and international cooperation.",
    url: "/about2/",
    type: "profile",
  },
};

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
