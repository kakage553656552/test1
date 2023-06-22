const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      // sass: {
      //   data: `@import "@/styles/global.scss";` // 加载全局变量
      // }
    }
  },
  outputDir: 'dist',
  indexPath: 'index.html',
  devServer: {
    open: true,
    port: 8081,
    // host: 'localhost',
    proxy: {
      '/v1': {
        target: 'https://api.openai.com',
        ws: false,
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/v1': 'https://api.openai.com/v1'
        },
        headers: {
          Connection: 'keep-alive'
        }
      },

      
    }
  },
})
