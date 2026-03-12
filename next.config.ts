import type { NextConfig } from "next";

const repo = "React-Nextjs-Project";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
};

export default nextConfig;
module.exports = {
basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  images: {
    unoptimized: true,         // Disable image optimization (optional)
  },
}
module.exports.nextConfig;