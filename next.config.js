/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
  })

const nextConfig = {
    reactStrictMode: false,
}

module.exports = withPWA(nextConfig);
