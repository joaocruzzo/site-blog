const { withContentlayer } = require('next-contentlayer2')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Você pode adicionar outras configs aqui se precisar
}

module.exports = withContentlayer(nextConfig)
