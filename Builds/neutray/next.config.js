/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.dicebear.com', 'gravatar.com', 'scontent.fgau4-1.fna.fbcdn.net','i.pravatar.cc']
  },
  experimental: {
    appDir: true
  }
}
