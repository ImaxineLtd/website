import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Single product for now: the hub points at it until a second product exists.
  async redirects() {
    return [{ source: "/products", destination: "/products/caseproof", permanent: false }];
  },
};

export default nextConfig;
