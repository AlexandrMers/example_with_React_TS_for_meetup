const path = require("path");
const merge = require("webpack-merge");
require("dotenv").config();

const common = require("./webpack.common");

module.exports = [
  merge(common[0], {
    mode: "development",
    devtool: "inline-source-map",
    output: {
      filename: "[name].[hash].js",
      path: path.resolve(__dirname, "../build"),
      publicPath: "/"
    },
    devServer: {
      historyApiFallback: true,
      host: "0.0.0.0",
      https: true,
      publicPath: "/"
    }
  })
];
