/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'www.w3schools.com',
      },
      {
        protocol: 'https',
        hostname: 'blocks.primereact.org',
      },
      {
        protocol: 'https',
        hostname: 'sawapan.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
      },
      {
        protocol: 'https',
        hostname: 'th.bing.com',
      },
    ],
  },
};

export default nextConfig;
