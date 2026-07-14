import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ettore Arpini — Making AI governance real",
  description: "Strategy, mobilization, and fieldbuilding for AI governance in middle power countries.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  metadataBase: new URL("https://ettorearpini.com"),
  openGraph: {
    title: "Ettore Arpini — Making AI governance real",
    description: "Strategy, institutions, and middle powers in the age of advanced AI.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Ettore Arpini — Making AI governance real" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ettore Arpini — Making AI governance real",
    description: "Strategy, institutions, and middle powers in the age of advanced AI.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
