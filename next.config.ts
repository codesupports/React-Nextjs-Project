import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export"
};

export default nextConfig;
module.exports = {
  basePath: '/React-Nextjs-Project', // Replace 'your-repo-name' with your actual repo name
  output: 'export',            // Export as a static site
  images: {
    unoptimized: true,         // Disable image optimization (optional)
  },
}
module.exports.nextConfig;