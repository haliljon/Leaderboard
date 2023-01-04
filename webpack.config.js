const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'script.js'),
  output: {
    filename: 'score-list.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: '[name][ext]',
  },
  mode: 'development',
  module: {
    rules: [{ test: /\.css$/, use: ['style-loader', 'css-loader'] }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'To Do list App',
      filename: 'index.html',
      template: 'src/index.html',
    }),
  ],
};
