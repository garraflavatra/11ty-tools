const glob = require("glob");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackAssetsManifest = require("webpack-assets-manifest");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const dirname = process.cwd();

module.exports = {
  entry: function () {
    let entries = {
      styles: dirname + "/src/assets/style/bundle.js",
    };
    glob.sync(dirname + "/src/assets/js/*.js").forEach((file) => {
      entries[path.basename(file, ".js")] = file;
    });
    return entries;
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
      chunkFilename: "[name].[contenthash].css",
    }),
    new WebpackAssetsManifest({}),
  ],
  output: {
    filename: "[name].[contenthash].js",
    path: dirname + "/out/_proc",
  },
  optimization: {
    minimize: true,
    minimizer: [
      `...`,
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        type: "asset/resource",
        generator: {
          filename: "fonts/[contenthash][ext]",
        },
      },
      {
        test: /.*\.(gif|jpe?g|bmp|png)$/gim,
        type: "asset/resource",
        generator: {
          filename: "img/[contenthash][ext]",
        },
      },
    ],
  },
};
