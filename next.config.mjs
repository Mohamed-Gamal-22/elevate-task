/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'flower.elevateegy.com',
            port: '',
            pathname: '/**',
            search: '',
          },
          {
            protocol: 'https',
            hostname: 'https://flower.elevateegy.com/uploads',
            port: '',
            pathname: '/**',
            search: '',
          },
        ],
      },
};

export default nextConfig;
