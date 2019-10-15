const path = require('path');
const webpack = require('webpack');

// const distFolder = path.join(process.cwd(), 'dist');
// const appsFolder = path.join(process.cwd(), 'apps');
const ___dir = path.join(process.cwd());

module.exports = {
  entry: { server: path.join(___dir, 'apps', 'website', 'server.old.ts') },
  resolve: { extensions: ['.js', '.ts'] },
  target: 'node',
  mode: 'none',
  // this makes sure we include node_modules and other 3rd party libraries
  externals: [/node_modules/],
  output: {
    // path: path.join(__dirname, 'dist'),
    // filename: '[name].js'
    path: path.join(___dir, 'dist', 'website'),
    filename: '[name].js'
  },
  module: {
    rules: [{ test: /\.ts$/, loader: 'ts-loader' }]
  },
  plugins: [
    // Temporary Fix for issue: https://github.com/angular/angular/issues/11580
    // for 'WARNING Critical dependency: the request of a dependency is an expression'
    new webpack.ContextReplacementPlugin(
      /(.+)?angular(\\|\/)core(.+)?/,
      // path.join(__dirname, 'src'), // location of your src
      path.join(___dir, 'apps', 'website', 'src'), // location of your src
      {} // a map of your routes
    ),
    new webpack.ContextReplacementPlugin(
      /(.+)?express(\\|\/)(.+)?/,
      //path.join(__dirname, 'src'),
      //path.join(distFolder, 'apps', 'abc-xzy-website'),
      path.join(___dir, 'apps', 'website', 'src'),
      {}
    ),
        // workaround for https://github.com/angular/angular-cli/issues/9975
    new webpack.ContextReplacementPlugin(
      /(.+)?angular(\\|\/)common(\\|\/)locales/,
      /(en-US|ar-LBN|ar|en)$/
    )
    // ,new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en-US|ar-LBN|ar|en/)
    // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ]
};
