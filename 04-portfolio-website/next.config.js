/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        destination:
          'https://deepak-design-engineer-portfolio.vercel.app/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
