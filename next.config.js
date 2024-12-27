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
  },
  // Disable static optimization for client components
  staticPageGenerationTimeout: 1000,
  // Enable client-side routing
  trailingSlash: true,
  // Disable server components
  serverComponents: false
}

module.exports = nextConfig
