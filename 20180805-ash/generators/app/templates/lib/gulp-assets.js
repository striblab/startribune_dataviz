/**
 * Asset handling
 */

// Dependencies
const gulp = require('gulp');

// Copy assets
async function assets() {
  return gulp.src('assets/**/*').pipe(gulp.dest('build/assets'));
}
assets.description = 'Move assets into the build folder.';

// Copy assets to root
async function rootAssets() {
  return gulp
    .src(['./assets/images/favicons/favicon.ico'])
    .pipe(gulp.dest('build'));
}
rootAssets.description =
  'Move certains assets to the root of the build folder.';

// All assets
const allAssets = gulp.parallel(assets, rootAssets);
allAssets.description = 'Copy assets to build folder.';

// Exports
module.exports = {
  assets,
  rootAssets,
  allAssets
};
