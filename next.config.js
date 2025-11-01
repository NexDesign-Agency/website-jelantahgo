/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Disabled for development - uncomment ONLY for static export build (production)
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  trailingSlash: true,
}

module.exports = nextConfig
