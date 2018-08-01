/**
 * Task running and building through Gulp.
 * http://gulpjs.com/
 *
 * Make sure you're Gulp CLI is up to date with: `npm install -g gulp-cli`
 *
 * Groups of tasks are managed in sub files in ./lib/
 *
 * Use `gulp tasks` to get a helpful list of tasks.
 *
 * In general, try to use config files (like .babelrc) to manage
 * options for processes.  This will allow moving away from
 * Gulp more easily if desired.
 */
'use strict';

// Dependencies
const gulp = require('gulp');
const js = require('./lib/gulp-js.js');
const styles = require('./lib/gulp-styles.js');
const html = require('./lib/gulp-html.js');
const misc = require('./lib/gulp-misc.js');
const assets = require('./lib/gulp-assets.js');
const develop = require('./lib/gulp-develop.js');
const cms = require('./lib/gulp-cms.js');
const tasks = require('./lib/gulp-tasks.js');
const publish = require('./lib/gulp-publish.js');
const googleDrive = require('./lib/gulp-google-drive.js');

// Make default just list of tasks
gulp.task('default', tasks.list);

// Google
gulp.task('google:share', googleDrive.share);
gulp.task('google:owner', googleDrive.owner);
gulp.task('google:new-doc', googleDrive.newDoc);
gulp.task('google:new-sheet', googleDrive.newSheet);
gulp.task('google:new-content-sheet', googleDrive.newContentSheet);
gulp.task('google:api', googleDrive.apiInfo);

// CMS
gulp.task('cms:info', cms.config);
gulp.task('cms:lcd', cms.lcd);

// HTML
gulp.task('html:lint-simple', html.lintSimple);
gulp.task('html:lint', html.lint);
gulp.task('html:build', html.htmlSvelte);

// JS
gulp.task('js:lint', js.lint);
gulp.task('js:test', js.test);
gulp.task('js:build', js.js);

// Styles
gulp.task('styles:lint', styles.lint);
gulp.task('styles:build', styles.styles);

// Develop
gulp.task('develop:server', develop.server);

// Publish
gulp.task('publish:build-token', publish.buildToken);
gulp.task('publish:compare-token', publish.compareToken);
gulp.task('publish:info', publish.info);
gulp.task('publish:open', publish.open);
gulp.task('publish:publish', publish.publish);

// Combine publish and build token
const allPublish = gulp.series('publish:build-token', 'publish:publish');
allPublish.description =
  'Exports publish token to build folder and then publishes.';
gulp.task('publish', allPublish);

// Misc
gulp.task('clean', misc.clean);

// Assets
gulp.task('assets', assets.allAssets);

// Main HTML tasks
const simpleHTML = gulp.series('html:build', 'html:lint-simple');
simpleHTML.description = 'Build and (simple) lint HTML';
gulp.task('html:simple', simpleHTML);
const allHTML = gulp.series('html:build', 'html:lint');
allHTML.description = 'Build and lint HTML';
gulp.task('html', allHTML);

// Main JS task
const allJS = gulp.series(gulp.parallel('js:lint', 'js:test'), 'js:build');
allJS.description = 'Lint, test, and build JS.';
gulp.task('js', allJS);

// Main Styles task
const allStyles = gulp.series('styles:lint', 'styles:build');
allStyles.description = 'Lint, and build CSS from SASS.';
gulp.task('styles', allStyles);

// Main development task
const allBuild = gulp.parallel('html:simple', 'styles', 'js');
allBuild.description = 'Full project build.';
gulp.task('build', allBuild);

// Combined watch task
async function allWatch() {
  gulp.watch(['styles/**/*.scss'], gulp.series('styles'));
  gulp.watch(
    ['templates/**/*', 'config.*json', 'package.json', 'content.json'],
    gulp.series('html:simple')
  );
  gulp.watch(['app/**/*', 'config.json'], gulp.series('js'));
  gulp.watch(['assets/**/*'], gulp.series('assets'));
}
allWatch.description =
  'Watch project for changes, and re-run specific build steps.';
gulp.task('watch', allWatch);

// Main development task
const allDevelop = gulp.series(
  'build',
  gulp.parallel('develop:server', 'watch')
);
allDevelop.description = 'Build, run web server, and watch for changes.';
gulp.task('develop', allDevelop);

// Deploy, which wraps publish
const deploy = gulp.series('clean', 'build', 'publish');
deploy.description =
  'Cleans the build directory, runs the full build, and publishes to S3.';
gulp.task('deploy', deploy);

// Task list
gulp.task('tasks', tasks.list);
