const path = require('path');
const webpack = require('webpack')

const compiler = webpack({
  entry: {
    pageOne: './src/pages/one',
    pageTwo: './src/pages/two'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
})

// module.exports = {
//   entry: {
//     pageOne: './src/pages/one',
//     pageTwo: './src/pages/two'
//   },
//   output: {
//     filename: '[name].js',
//     path: path.resolve(__dirname, 'dist'),
//   },
//   devtool: 'source-map',
//   module: {
//     rules: [
//       {
//         test: /\.js|\.jsx$/,
//         exclude: /(node_modules|bower_components)/,
//         use: {
//           loader: 'babel-loader'
//         }
//       }
//     ]
//   }
// };