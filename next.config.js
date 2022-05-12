/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  reactStrictMode: false,
  images: {
    domains: ["lh3.googleusercontent.com", "upload.wikimedia.org"],
  },
};

module.exports = nextConfig;
