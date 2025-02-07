import nextConfig from './next.config.mjs'; // This would be incorrect if you're using default export in .mjs file

// Correct usage for exporting from a .mjs file
export default {
    reactStrictMode: true,
    images: {
      domains: ['example.com'],
    },
  };
  