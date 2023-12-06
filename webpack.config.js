const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    host: "0.0.0.0",
    port: 8080,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template/index.html",
      filename: "index.html",
      chunks: ["main"],
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "./src/assets", to: "assets" }],
    }),
    new MiniCssExtractPlugin({ filename: "[name].css" }), // Add this line
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"], // Update this line
      },
      {
        test: /\.(png|jpg|svg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
