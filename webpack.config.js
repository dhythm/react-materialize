const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.tsx',
  // mode: 'development',
  module: {
    rules: [
      // {
      //   test: /\.(js|jsx)$/,
      //   exclude: /(node_modules|bower_components)/,
      //   loader: 'babel-loader',
      //   options: { presets: ['@babel/env'] },
      // },
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        loader: 'eslint-loader',
      },
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: { extensions: ['.ts', '.tsx', '.js'] },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist/'),
    port: 3000,
    hotOnly: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
