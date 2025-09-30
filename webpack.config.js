const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash].js",
    assetModuleFilename: "images/[hash][ext][query]",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.ico$/i,
        type: "asset/resource",
        generator: {
          filename: "[name][ext]", // keep favicon.ico name unchanged
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.png",
    }),
  ],
  devServer: {
    static: "./dist",
    open: true,
    hot: true,
  },
};
