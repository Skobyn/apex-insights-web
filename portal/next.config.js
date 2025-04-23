/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  typescript: {
    ignoreBuildErrors: false
  },
  // Add custom config for Google Cloud/Looker as needed
}

module.exports = nextConfig; 