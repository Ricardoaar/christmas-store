const { loader: miniCssExtractLoader } = require("mini-css-extract-plugin");

const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(png|gif|jpg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/[md5:hash].[ext]"
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [miniCssExtractLoader, "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    alias: {
      "@components": path.resolve(__dirname, "../src/client/components"),
      "@pages": path.resolve(__dirname, "../src/client/pages"),
      "@styles": path.resolve(__dirname, "../src/client/assets/styles"),
      "@assets": path.resolve(__dirname, "../src/client/assets"),
      "@client": path.resolve(__dirname, "../src/client")
    }
  }
};
