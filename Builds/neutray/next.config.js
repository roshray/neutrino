/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.dicebear.com', 'gravatar.com'],
  },
  experimental: {
    appDir: true
  }
}
