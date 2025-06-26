import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['inpl.eu'], // <--- Переконайтеся, що 'inpl.eu' тут є
  },
  // formats: ["image/webp"],
};

export default nextConfig;
