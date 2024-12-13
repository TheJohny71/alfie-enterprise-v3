/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/alfie-enterprise-v3',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/alfie-enterprise-v3',
  trailingSlash: true,
}

module.exports = nextConfig
