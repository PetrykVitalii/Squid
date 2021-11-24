import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { Configuration } from 'webpack';

const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

export default {
  mode: process.env.NODE_ENV,
  context: path.resolve(__dirname, 'src'),
  entry: ['babel-polyfill', './index.tsx'],
  output: {
    publicPath: '/',
    filename: '[name].[fullHash].js',
    path: path.resolve(__dirname, 'build'),
  },
  devServer: {
    client: {
      overlay: false,
    },
    static: path.join(__dirname, 'build'),
    hot: true,
    port: Number(process.env.PORT),
    host: '0.0.0.0',
    historyApiFallback: {
      index: '/',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|jp2|webp|mp4)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]'
        }
      },
    ],
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.(js|jsx|ts|tsx)(\?.*)?$/i,
        terserOptions: {
          compress: true,
        },
      }),
    ],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          priority: -10,
          chunks: 'initial',
          reuseExistingChunk: true,
        }
      }
    },
    runtimeChunk: {
      name: 'manifest'
    }
  },
  plugins: [
    new CompressionPlugin({
      filename: '[name].gz',
      algorithm: 'gzip',
      test: /\.(js|ts|tsx|html|svg|png|woff|woff2)/i,
    }),
    new HtmlWebpackPlugin({ template: './html/index.html' }),
    new CopyWebpackPlugin({ patterns: [{ from: 'assets', to: 'assets', noErrorOnMissing: true }] }),
  ],
} as Configuration;
