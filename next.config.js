/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['gsap', 'swiper']
  },
  images: {
    domains: ['images.ctfassets.net'],
  },
}

module.exports = nextConfig