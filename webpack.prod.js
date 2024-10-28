const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Make sure this points to your main JavaScript file
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "./",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Path to your main HTML file
      filename: "index.html",
    }),
  ],
  module: {
    rules: [
      // Define loaders here (e.g., for CSS, images)
    ],
  },
};
