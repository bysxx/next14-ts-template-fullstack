/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['.'],
  },
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  compiler: {
    removeConsole: false,
  },
};

module.exports = nextConfig;
