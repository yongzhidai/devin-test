/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: ['antd', '@ant-design/icons'],
  experimental: {
    esmExternals: 'loose'
  }
}

module.exports = nextConfig
