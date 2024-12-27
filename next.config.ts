import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // Add the hostname of your external image source
  },
};

export default nextConfig;
