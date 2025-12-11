/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
  reactStrictMode: true,
  compiler: {
    removeConsole: false,
  },
  experimental: {
    viewTransition: true,
  },
};

module.exports = nextConfig;
