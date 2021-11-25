import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import createStyledComponentsTransformer from 'typescript-plugin-styled-components';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { Configuration } from 'webpack';
import { config } from 'dotenv';

config();

export default {
  mode: process.env.NODE_ENV,
  context: path.resolve(__dirname, 'src'),
  entry: {
    bundle: './index.tsx',
  },
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
        test: /\.(ts|tsx)?$/,
        loader: 'ts-loader',
        options: {
          getCustomTransformers: (program: any) => ({
            before: [createStyledComponentsTransformer()],
          }),
        },
      },
      {
        test: /\.(png|jpe?g|gif|jp2|webp)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]'
        }
      },
      {
        test: /\.mp4$/,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]'
        }
      },
    ],
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': '/src',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './html/index.html' }),
    new CopyWebpackPlugin({ patterns: [{ from: 'assets', to: 'assets', noErrorOnMissing: true }] }),
  ],
} as Configuration;