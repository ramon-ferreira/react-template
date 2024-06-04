const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackPluginServe } = require('webpack-plugin-serve');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const { emitWarning } = require('process'); /** TODO: Pipeline warning */

const buildFolder = path.join(__dirname, '../build');
const hashName = '[name].[chunkhash]';

module.exports = (env, options) => {
  const isDevMode = options.mode === 'development';

  return {
    devtool: 'eval-cheap-module-source-map',
    entry: {
      index: './src/App.jsx',
      mainPage: './src/pages/Main/index.jsx',
      errorPage: './src/pages/Error/index.jsx',
    },
    output: {
      path: buildFolder,
      filename: `${hashName}.bundle.js`,
      clean: true
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json', '.wasm'],
      alias: {
        '@components': path.join(__dirname, '../src/components'),
        '@pages': path.join(__dirname, '../src/pages'),
        '@assets': path.join(__dirname, '../src/assets')
      }
    },
    watch: true,
    plugins: [
      new webpack.ProvidePlugin({
        React: 'react'
      }),
      new HtmlWebpackPlugin({
        template: './src/App.html'
      }),
      new MiniCssExtractPlugin({
        filename: `${hashName}.css`
      }),
      new WebpackPluginServe({
        static: buildFolder,
        liveReload: false,
        host: '127.0.0.1',
        port: 8080,
        historyFallback: true,
      })],
    module: {
      rules: [{
        test: /\.jsx$/i,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }, {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader, {
            loader: 'css-loader',
            options: {
              modules: {
                exportGlobals: true,
                localIdentName: isDevMode ? '[path][name]__[local]' : '[chunkhash:base64:5]'
              }
            }
          }, 'sass-loader']
      }, {
        test: /\.(svg|png|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/[chunkhash][ext]'
        }
      }, {
        test: /\.(ttf|woff)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/fonts/[chunkhash][ext]'
        }
      }]
    },
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin({
        terserOptions: {
          format: {
            comments: false
          }
        },
        extractComments: false
      })]
    },
    performance: {
      hints: 'warning',
      maxEntrypointSize: 1500000,
      maxAssetSize: 1500000
    }
  };
};
