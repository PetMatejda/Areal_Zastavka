/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.arealzastavka.cz'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;

