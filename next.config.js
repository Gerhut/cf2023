/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vipcdn.mgtv.com',
        port: '',
        pathname: '/lego/**',
      },
    ],
  },
}

module.exports = nextConfig
