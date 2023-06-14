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
  indexPath: 'index.html'
})
