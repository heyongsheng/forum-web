const path = require('path')
const defaultSettings = require('./src/settings')

const name = defaultSettings.title || ''

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  devServer: {
    proxy: process.env.VUE_APP_BASE_API
  }
}
