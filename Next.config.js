const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles'), path.resolve(__dirname, 'node_modules')],
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    localeDetection: false
  }
}