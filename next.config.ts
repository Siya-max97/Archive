import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/cities",
        destination: "/city",
        permanent: true,
      },
      {
        source: "/cities/:slug",
        destination: "/city/:slug",
        permanent: true,
      },
      {
        source: "/exhibitions",
        destination: "/exhibition",
        permanent: true,
      },
      {
        source: "/exhibitions/:slug",
        destination: "/exhibition/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;