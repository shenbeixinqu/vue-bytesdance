// const path = require("path");
module.exports = {
  lintOnSave: "warning",
  pages: {
    index: {
      // page的入口
      entry: "src/main.js",
      // 模板来源
      template: "public/index.html",
      // 在dist/index.html的输出
      filename: "index.html",
      title: "加入字节跳动",
      // 提取出来的通用chunk和 vendor chunk
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
  },
};
