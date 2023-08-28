/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    domains: ["localhost"],
  },
  nextConfig,
  experimental: {
    serverActions: true,
  },
};
