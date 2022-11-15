/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.dicebear.com', 'gravatar.com','i.pravatar.cc'],
  },
  experimental: {
    appDir: true
  }
}
