const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
<<<<<<< HEAD
    filename: 'bundle.js',
=======
    filename: 'bundle.js', 
>>>>>>> f0e454633275ccc149aa843bec9a7e511ff78487
    path: path.resolve('./dist'),
  },
  devServer: {
    hot: true,
    contentBase: path.resolve('./dist'),
    compress: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
