/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  compiler: {
    removeConsole: {
      exclude: ["error"],
    },
    styledComponents: true,
  },
  experimental: {
    modularizelmports: {},
  },
};

module.exports = nextConfig;
