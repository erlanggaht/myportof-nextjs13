/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    
  },
  images: {
    domains: ['source.unsplash.com','i.dummyjson.com'],
  },
}

module.exports = nextConfig
