/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  reactStrictMode: false,
  images: {
    domains: ["lh3.googleusercontent.com", "upload.wikimedia.org"],
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;
