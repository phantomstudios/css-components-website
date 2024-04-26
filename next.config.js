/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["mdx-bundler"],
  },
};

module.exports = nextConfig;
