const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  target: 'web',
  mode: process.env.NODE_ENV,
  stats: 'minimal',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/',
    globalObject: 'this',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /serviceWorker.js$/,
        exclude: '/node_modules/',
        loader: 'worker-loader',
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: '/node_modules/',
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.scss$/,
        exclude: '/node_modules/',
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(ico|png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        exclude: '/node_modules/',
        loader: 'file-loader',
      },
      {
        test: /\.html$/,
        exclude: '/node_modules/',
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: path.resolve(__dirname, 'src', 'assets', 'icons', 'favicon.ico'),
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
  ],
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    host: '0.0.0.0',
    port: process.env.PORT || 80,
    overlay: true,
  },
};
