const path = require('path')
const webpack = require('webpack')
const port = 3111

module.exports = [
  {
    devtool: 'eval',
    entry: [
      'react-hot-loader/patch',
      `webpack-dev-server/client?http://localhost:${port}`,
      'webpack/hot/only-dev-server',
      './src/index',
    ],
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
    },
    resolve: {
      extensions: ['.js'],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          include: path.join(__dirname, 'src'),
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
    ],
    devServer: {
      host: 'localhost',
      port: port,
      historyApiFallback: true,
      hot: true,
      contentBase: 'dist/',
    },
  },
]
