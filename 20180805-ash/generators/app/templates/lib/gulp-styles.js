/**
 * Styles/css tasks
 */

// Dependencies
const path = require('path');
const gulp = require('gulp');
const stylelint = require('gulp-stylelint');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');

// Lint styles/css
function lint() {
  return gulp.src(['styles/**/*.scss']).pipe(
    stylelint({
      failAfterError: false,
      reporters: [{ formatter: 'string', console: true }]
    })
  );
}
lint.description =
  'Lint CSS/SASS styles with stylelint.  See .stylelintrc for configuration.';

// Compile styles
function styles() {
  return gulp
    .src('styles/**/!(_)*.scss')
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: 'compressed',
        includePaths: [path.join(__dirname, '..', 'node_modules')]
      }).on('error', sass.logError)
    )
    .pipe(
      autoprefixer({
        // browsers: See browserlist file
        cascade: false
      })
    )
    .pipe(
      rename(path => {
        path.basename =
          path.basename === 'index'
            ? 'styles.bundle'
            : path.basename + '.bundle';
      })
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/'));
}
styles.description =
  'Build the styles from SASS.  Uses autoprefixer to add redundant, cross-browser properties; see browserlist file for configuration.';

// Exports
module.exports = {
  lint,
  styles
};
