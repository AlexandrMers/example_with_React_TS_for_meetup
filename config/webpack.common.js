const path = require("path");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const baseConfig = {
  entry: path.resolve(__dirname, "../src/index.tsx"),
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "../build/static/"),
    publicPath: "/static/"
  },
  plugins: [
    new Dotenv({
      systemvars: true
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
      eslint: {
        files: path.resolve(__dirname, "../src/**/*.{ts,tsx,js,jsx}")
      }
    }),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, "../build/index.html"),
      template: path.resolve(__dirname, "template.html")
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules|module\.scss/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "resolve-url-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.scss$/,
        include: /module\.scss/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]_[local]_[hash:base64]"
              },
              importLoaders: 1,
              sourceMap: true
            }
          },
          "resolve-url-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              outputPath: "assets"
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "fonts"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src/")
    },
    extensions: [".js", ".jsx", ".ts", ".tsx", ".sass"]
  },
  node: {
    fs: "empty"
  }
};

module.exports = [baseConfig];
