const { loader: miniCssExtractLoader } = require("mini-css-extract-plugin");
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
      // To create when full folder structure is ready
    }
  }
};
