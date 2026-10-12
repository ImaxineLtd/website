import type { NextConfig } from "next";

// GITHUB_PAGES=true builds a static export for GitHub Pages (preview hosting).
// Static hosting cannot send custom headers or redirects, so those apply only to a normal Next.js deployment.
const isPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = isPages
  ? {
      output: "export",
      basePath: process.env.PAGES_BASE_PATH ?? "",
      images: { unoptimized: true },
      reactStrictMode: true,
    }
  : {
      reactStrictMode: true,
      poweredByHeader: false,
      async headers() {
        return [
          {
            source: "/:path*",
            headers: [
              { key: "X-Content-Type-Options", value: "nosniff" },
              { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
              { key: "X-Frame-Options", value: "DENY" },
              { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
              { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
            ],
          },
        ];
      },
      // Single product for now: the hub points at it until a second product exists.
      async redirects() {
        return [{ source: "/products", destination: "/products/caseproof", permanent: false }];
      },
    };

export default nextConfig;
