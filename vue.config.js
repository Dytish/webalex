const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    https: true,
    // disableHostCheck: true,
    // compress: true,
    // disableHostCheck: true,
    // port: 8080,
  }
})
