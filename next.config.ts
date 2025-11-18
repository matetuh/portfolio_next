import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',       // tells Next.js to export static HTML
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true, // continue build even if there are type errors
  },
};

export default nextConfig;
