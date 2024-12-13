/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/alfie-enterprise-v3',
  images: {
    unoptimized: true,
  },
  // This ensures assets are properly loaded in GitHub Pages
  assetPrefix: '/alfie-enterprise-v3/',
}

module.exports = nextConfig
