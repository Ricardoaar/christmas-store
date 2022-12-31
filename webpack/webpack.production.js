// Plugins
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Utils
const path = require("path");
const { merge } = require("webpack-merge");
// Setup
const baseConfig = require("./webpack.common");

const config = {
  mode: "production",
  entry: { main: [path.resolve(__dirname, "../src/client/index.js")] },
  output: {
    path: path.resolve(__dirname, "..", "src/server/public"),
    filename: "assets/[fullhash].js",
    publicPath: "/",
    globalObject: `typeof self !== 'undefined' ? self : this`
  },
  plugins: [
    new CompressionWebpackPlugin({
      test: /\.js$|\.css$/,
      filename: "[path][base].gz"
    }),
    new WebpackManifestPlugin({
      fileName: "asset-manifest.json"
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: path.resolve(
        __dirname,
        "..",
        "src/server/public"
      )
    }),
    new MiniCssExtractPlugin({
      filename: "assets/app-[hash].css"
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: "async",
      cacheGroups: {
        defaultVendors: {
          name: "vendors",
          chunks: "all",
          reuseExistingChunk: true,
          priority: 1,
          filename: "assets/vendors-[chunkhash].js",
          enforce: true
        }
      }
    }
  }
};

module.exports = merge(baseConfig, config);
