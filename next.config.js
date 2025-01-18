/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // For static export
  images: {
    unoptimized: true, // Disable image optimization
  },
};

module.exports = nextConfig;
