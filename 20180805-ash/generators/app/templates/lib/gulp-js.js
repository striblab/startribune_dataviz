/**
 * JS tasks
 */

// Dependencies
const path = require('path');
const gulp = require('gulp');
const eslint = require('gulp-eslint');
const jest = require('jest-cli');
const gutil = require('gulp-util');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('../webpack.config.js');

// JS linter
function lint() {
  return gulp
    .src(['app/**/*.js', 'gulpfile.js'])
    .pipe(eslint())
    .pipe(eslint.format());
}
lint.description =
  'Runs ESLint on JS files.  See the .eslintrc file for configuration.';

// Testing ,manully using jest module because
function test() {
  return runJest({
    rootDir: path.join(__dirname, '..'),
    testMatch: ['**/*.test.js'],
    testPathIgnorePatterns: ['acceptance'],
    setupFiles: ['./tests/globals.js']
  });
}
test.description = 'Runs any *.test.js JS tests via Jest.';

// Main JS task, just runs webpack
function js() {
  return (
    gulp
      // src is arbitrary?
      .src('app/index.js')
      .pipe(webpackStream(webpackConfig, webpack))
      .pipe(gulp.dest('build'))
  );
}
test.description =
  'Main build for JS; uses webpack.  See webpack.config.js for configuration.';

// Run jest
function runJest(options = {}) {
  return jest
    .runCLI(options, [options.rootDir || process.cwd()])
    .then(results => {
      if (results.numFailedTests) {
        throw new gutil.PluginError(
          'js',
          results.numFailedTests + ' tests failed.'
        );
      }
    })
    .catch(() => {
      throw new gutil.PluginError('js', 'Test did not pass.');
    });
}

// Exports
module.exports = {
  lint,
  test,
  js
};
