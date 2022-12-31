require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"]
});
const dotenv = require("dotenv");

require("asset-require-hook")({
  extensions: ["jpg", "png", "gif"],
  name: "/assets/[md5:hash].[ext]"
});

dotenv.config();
