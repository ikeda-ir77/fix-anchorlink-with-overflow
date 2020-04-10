const webpack = require('webpack');
const path = require('path');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: [
    './src/js/app.ts'
  ],
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }, {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader',
            options: {
              url: false
            }
          }, {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [require('autoprefixer')({grid: true})]
            }
          }, {
            loader: 'sass-loader'
          }
        ]
      }, {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader',
            options: {
              url: false
            }
          }, {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [require('autoprefixer')({grid: true})]
            }
          }
        ]
      }
    ]
  },
  devtool: 'source-map',
  output: {
    filename: './js/bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
  cache: false,
  optimization: {
    minimize: false,
  },
  devServer: {
    contentBase: path.join(__dirname, './dist/'),
    watchContentBase: true,
    historyApiFallback: true,
    compress: true,
    port: 3000,
    host: '0.0.0.0',
    inline: true
  },
  plugins: [
//    new BundleAnalyzerPlugin(), 
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
  ]
};
