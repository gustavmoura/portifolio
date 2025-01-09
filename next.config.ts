import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'skillicons.dev',
      },
    ],
    domains: ['media.licdn.com'],
  },
};

export default nextConfig;
