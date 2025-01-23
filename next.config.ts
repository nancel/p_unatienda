import type { NextConfig } from "next";

const path = require('path')

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/sass')],
    prependData: `@use "variables"`,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.shopify.com',
        protocol: 'https',
      }
    ]
  }
};

export default nextConfig;
