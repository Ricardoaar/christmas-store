const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.common");

const config = {
  mode: "production",
  target: "node",
  entry: {
    server: path.resolve(__dirname, "../src/server/index.js")
  },
  output: {
    path: path.resolve(__dirname, "../src/server/public"),
    filename: "server-entry.js"
  },
  externals: [nodeExternals()]
};

module.exports = merge(baseConfig, config);
