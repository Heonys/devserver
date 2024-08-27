const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.ts",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash].js",
  },
  devtool: "eval",
  resolve: {
    extensions: [".js", ".ts"],
    alias: { "@": path.resolve(__dirname, "./src/") },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
  devServer: {
    compress: true,
    port: 9000,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "public/index.html",
      inject: true,
    }),
  ],
};
