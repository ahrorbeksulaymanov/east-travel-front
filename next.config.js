/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uzbekistan.travel',
        port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: 'http',
        hostname: '86.106.181.30',
        port: '8888',
        pathname: '/api/file/**',
      },
    ],
  },
  output: "export"

}

module.exports = nextConfig
