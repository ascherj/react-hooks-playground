const path = require('path');

module.exports = {
  entry: './client/src/index.jsx',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, 'client/dist/'),
    filename: 'bundle.js'
  },
  devServer: {
    static: { directory: path.join(__dirname, 'client/dist/') },
    port: 3000,
    hot: true
  }
};
