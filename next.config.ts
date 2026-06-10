import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        destination: 'http://10.0.20.40:8000/api/v1/:path*',
      },
    ];
  },
};

export default nextConfig;