/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // It helps when using the "standalone" output or to control built files
  output: 'standalone',
  // Uncomment if you serve images from external domains:
  // images: { domains: ['example.com'] }
}

module.exports = nextConfig
