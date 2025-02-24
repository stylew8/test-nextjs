/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/test-nextjs',
  assetPrefix: '/test-nextjs/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  trailingSlash: true,
};

module.exports = nextConfig;
