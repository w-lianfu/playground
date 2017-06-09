const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: path.resolve(__dirname, './src/app.js'),
    module: path.resolve(__dirname, './src/module.js')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    port: 9009,
    hot: true,
    inline: true
  }
};
