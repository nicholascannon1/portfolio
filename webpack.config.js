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
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: {presets: ['es2015']}},
    ]
  }
};