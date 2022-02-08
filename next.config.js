/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')
// p/ desabilitar quando estiver em dev(yarn dev)
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    return config
  }
}
