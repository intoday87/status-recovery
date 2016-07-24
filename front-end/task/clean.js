var sh = require('shelljs');
var webpackConfig = require('../webpack.config.js');

sh.config.fatal = true;
sh.config.verbose = true;

if (sh.test('-d', webpackConfig.output.path)) {
  sh.rm('-r', webpackConfig.output.path);
}
