const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,

  // Ensure the app works whether deployed to "/" or a custom subpath
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/'
});
