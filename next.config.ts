const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // Enable app directory
  },
  webpack(config) {
    config.resolve.alias["@"] = path.resolve(__dirname, "src/frontend");
    config.resolve.alias["@components"] = path.resolve(__dirname, "src/frontend/components");
    config.resolve.alias["@lib"] = path.resolve(__dirname, "src/frontend/lib");
    config.resolve.alias["@types"] = path.resolve(__dirname, "src/frontend/types");
    config.resolve.alias["@services"] = path.resolve(__dirname, "src/backend/services");
    config.resolve.alias["@backend"] = path.resolve(__dirname, "src/backend");
    return config;
  }
};

module.exports = nextConfig;
