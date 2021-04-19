module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  css: {
    loaderOptions: {
      scss: {
        data: '@import "@/styles/_variables.scss";'
      }
    }
  }
}
