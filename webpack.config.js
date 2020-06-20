"use strict";

const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  entry: {
    main: __dirname + "/src/index.js",
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
    chunkFilename: "[name].js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: "body",
      template: __dirname + "/index.html",
    }),
  ],
};
