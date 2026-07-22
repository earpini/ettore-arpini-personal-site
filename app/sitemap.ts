import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "about2/",
    "frontier-ai-dependency-explorer/",
    "leverage-lab/",
    "policy-windows-explorer/",
    "brazil-ai-analysis/",
  ];

  return routes.map((route) => ({ url: `https://ettorearpini.com/${route}` }));
}
