const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

process.env.NODE_ENV = "production";

module.exports = {
  mode: "production",
  target: "web",
  entry: { "index" : "./src/index", "noun" : "./src/noungame" },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new HtmlWebpackPlugin({
      template: "src/noungame.html",
      filename: "noungame.html"
    }),
    //new BundleAnalyzerPlugin({
    //  generateStatsFile : true
    //}),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
