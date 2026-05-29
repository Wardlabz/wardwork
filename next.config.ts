import type { NextConfig } from "next";
import { getSecurityHeaders } from "./config/security-headers";

// Startup validation for production NEXT_PUBLIC_SITE_URL environment variable
if (process.env.NODE_ENV === "production" && !process.env.NEXT_PUBLIC_SITE_URL) {
  console.warn(
    "\x1b[33m%s\x1b[0m", // Yellow ANSI escape code
    "⚠️ WARNING: NEXT_PUBLIC_SITE_URL is not set in the production environment. " +
    "CORS will fall back to 'https://wardwork.tech' which may cause client-side issues if the site is hosted elsewhere."
  );
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://wardwork.tech";

const corsHeaders = [
  { key: "Access-Control-Allow-Credentials", value: "true" },
  {
    key: "Access-Control-Allow-Origin",
    value: siteUrl,
  },
  {
    key: "Access-Control-Allow-Methods",
    value: "GET,DELETE,PATCH,POST,PUT,OPTIONS",
  },
  {
    key: "Access-Control-Allow-Headers",
    value:
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    const securityHeaders = getSecurityHeaders();

    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        source: "/api/:path*",
        headers: [...securityHeaders, ...corsHeaders],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
