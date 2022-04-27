const path = require("path");
const fs = require("fs");


module.exports = {
  mode: "development",
  // mode: "production",
  watch: true,
  entry: path.join(__dirname, '../src/index'),
  output: {
    path: path.join(__dirname, '../dist'),
    module: true,
    chunkFormat: 'module',
    filename: 'main.mjs'
  },
  target: 'node14',
  experiments: {
    topLevelAwait: true,
    outputModule: true
  },
  node: {
    __dirname: false,
    __filename: false
  }
};
