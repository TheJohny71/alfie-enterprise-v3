/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: '/alfie-enterprise-v3',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/alfie-enterprise-v3/',  // Note the trailing slash
  trailingSlash: true,
  // Add this to help with chunk loading
  webpack: (config) => {
    config.output.publicPath = `/alfie-enterprise-v3/_next/`;
    return config;
  },
}

module.exports = nextConfig
