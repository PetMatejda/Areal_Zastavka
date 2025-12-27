/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.arealzastavka.cz', 'www.mecholupskypark.cz'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.arealzastavka.cz',
      },
      {
        protocol: 'https',
        hostname: 'www.mecholupskypark.cz',
      },
      {
        protocol: 'https',
        hostname: 'arealzastavka.cz',
      },
      {
        protocol: 'https',
        hostname: 'mecholupskypark.cz',
      },
    ],
  },
};

module.exports = nextConfig;

