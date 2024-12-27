/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: ['@ant-design', 'antd', 'rc-util', 'rc-pagination', 'rc-picker']
}

module.exports = nextConfig
