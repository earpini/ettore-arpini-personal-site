import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://ettorearpini.com/sitemap.xml",
    host: "https://ettorearpini.com",
  };
}
