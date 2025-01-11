import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*', // Allows all hostnames
        pathname: '**', // Allows all pathnames
      },
    ],
  },
};

// Apply the NextIntl plugin and export the final configuration
export default withNextIntl(nextConfig);
