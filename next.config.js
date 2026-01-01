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
  // Pomoc pro OneDrive kompatibilitu
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: ['**/node_modules/**', '**/.git/**', '**/.next/**'],
        poll: 1000, // Polling pro OneDrive
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

module.exports = nextConfig;

