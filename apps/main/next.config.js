/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  rewrites: {
    '/booking-area': {
      destination: 'http://localhost:3001/booking-area',
    }
  }
}

module.exports = nextConfig
