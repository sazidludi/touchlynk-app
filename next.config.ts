import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

const path = require("path");

module.exports = {
  reactStrictMode: true,
  webpack(config: any) {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    config.resolve.alias["@components"] = path.resolve(__dirname, "src/components");
    config.resolve.alias["@lib"] = path.resolve(__dirname, "src/lib");
    config.resolve.alias["@types"] = path.resolve(__dirname, "src/types");
    config.resolve.alias["@services"] = path.resolve(__dirname, "src/services");
    return config;
  }
};

