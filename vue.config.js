module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/styles/_mq.sass"; @import "@/assets/styles/global.sass";`
      }
    }
  },
  outputDir: 'dist',
}
