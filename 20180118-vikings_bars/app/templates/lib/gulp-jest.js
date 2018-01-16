/**
 * gulp-jest module is annoying.
 *
 * See for config options:
 * http://facebook.github.io/jest/docs/en/configuration.html#content
 */

// Dependencies
const jest = require('jest-cli');
const gutil = require('gulp-util');

module.exports = (name, options) => {
  return (done) => {
    jest.runCLI(options, [ options.rootDir || process.cwd() ], (results) => {
      if (results.numFailedTests) {
        return done(new gutil.PluginError(name, results.numFailedTests + ' tests failed.'));
      }
      done(null);
    }).catch(() => {
      return done(new gutil.PluginError(name, 'Test did not pass.'));
    });
  };
};
