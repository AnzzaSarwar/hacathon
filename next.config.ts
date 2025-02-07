/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
    reactStrictMode: true,
    images: {
      domains: ["cdn.sanity.io"], 
    },
    swcMinify: true, 
  };
  
  module.exports = nextConfig;
  