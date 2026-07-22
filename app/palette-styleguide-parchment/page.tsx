import { SiteHome } from "../page";
import type { Metadata } from "next";

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default function StyleguideParchmentPalettePage() {
  return <SiteHome palette="styleguide-parchment" />;
}
