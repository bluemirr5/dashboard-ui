let url = process.env.VUE_APP_PROXY_HOST;
if (!process.env.VUE_APP_PROXY_HOST) url = "http://34.97.108.10:9999/";

let targetDir = process.env.VUE_APP_TARGET_DIR;
if (!process.env.VUE_APP_TARGET_DIR) targetDir = "./dist";

module.exports = {
  outputDir: targetDir,
  lintOnSave: process.env.NODE_ENV !== "production",
  productionSourceMap: false,
  devServer: {
    // https: true,
    port: 3333,
    proxy: {
      // proxyTable 설정
      "/api": {
        target: url,
        changeOrigin: true,
      },
      "/pub": {
        target: url,
        changeOrigin: true,
      },
    },
  },
};
