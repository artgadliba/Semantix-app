const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js[x]?$/,
        include: /node_modules/,
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.css'],
    symlinks: false
  },
  watchOptions: {
    followSymlinks: true,
  },
  output:{
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/')
  },
  devtool: 'source-map',
};
