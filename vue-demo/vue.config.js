const path = require('path');
const { name } = require('./package');
module.exports = {
  assetsDir: "vue",
  indexPath: "vue.html",
  css: {
    loaderOptions: {
      css: {
        localIdentName: '[local]_[hash:base64:5]',
      },
      sass: {
        data: '@import \'~@/assets/scss/global.scss\';',
        module: false,
      },
    },
  },

  devServer: {
    port: 80,
    proxy: {
      '/api': {
        target: 'http://localhost:8080/',
        changeOrigin: true,
      }
    }
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd',// 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  }
};
