/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  basePath: '/src',
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
}

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
})
