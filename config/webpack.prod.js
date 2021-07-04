const merge = require("webpack-merge");

const common = require("./webpack.common");

module.exports = [
  merge(common[0], {
    mode: "production",
    devtool: "source-map"
  })
];
