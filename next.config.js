/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.arealzastavka.cz',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'arealzastavka.cz',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.mecholupskypark.cz',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'mecholupskypark.cz',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    unoptimized: false,
  },
};

module.exports = nextConfig;

