const path = require("path");
const webpack = require("webpack");
const baseConfig = require("./webpack.common");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  mode: "development",
  entry: {
    main: [
      "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true",
      path.resolve(__dirname, "../src/client/index.js")
    ]
  },
  output: {
    path: path.resolve(__dirname, "..", "dist"),
    filename: "assets/app.js",
    publicPath: "/"
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "assets/app.css"
    })
  ]
};

module.exports = merge(baseConfig, config);
