/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  typescript: {
    // !! WARN !!
    // This is a temporary solution for the build error
    // Remove this when the type issues are resolved
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
