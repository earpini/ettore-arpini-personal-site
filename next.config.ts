import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.GITHUB_ACTIONS === "true"
    ? {
        output: "export" as const,
        trailingSlash: true,
        typescript: { ignoreBuildErrors: true },
      }
    : {}),
};

export default nextConfig;
