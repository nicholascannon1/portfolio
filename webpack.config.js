const path = require('path');

module.exports = {
  mode: 'production',
  context: __dirname,
  target: 'web',
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: {presets: ['es2015']} },
      { test: /\.(png|jp(e*)g|svg)$/, loader: 'url-loader', options:{ 
        limit: 8000, // converts images under 8kb to base64 strings
        name: 'images/[hash]-[name].[ext]'
      } },
      { test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader', options: {
        name: '[name].[ext]',
        outputPath: 'fonts/'
      } },
      { test: /\.pdf$/, loader: 'file-loader', options: {
        name: '[name].[ext]',
        outputPath: 'docs/'
      } }
    ]
  }
};