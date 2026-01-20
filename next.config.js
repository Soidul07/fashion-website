/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // basePath: '',
  // assetPrefix: '',
  images: {
    domains: [],
    unoptimized: true,
  },
  reactStrictMode: false,
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  eslint: {
    ignoreDuringBuilds: true, // This will ignore ESLint errors during the build
  },
  //output: 'export',
 
};

module.exports = nextConfig;