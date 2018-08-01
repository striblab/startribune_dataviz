/**
 * HTML gulp tasks
 */

// Dependencies
const path = require('path');
const gulp = require('gulp');
const gutil = require('gulp-util');
const include = require('gulp-file-include');
const ejs = require('gulp-ejs');
const rename = require('gulp-rename');
const noopener = require('gulp-noopener');
const htmlhint = require('gulp-htmlhint');
const a11y = require('gulp-a11y');
const _ = require('lodash');
const transform = require('gulp-transform');
const { argv } = require('yargs');
const configUtil = require('./config.js');
const BuildData = require('./build-data.js');

// Register svelte includes
require('svelte/ssr/register')({
  extensions: ['.html', '.svelte', '.svelte.html'],
  generate: 'ssr',
  hydratable: true,
  preserveComments: true
});

// Get data
async function getData() {
  let { config } = configUtil.getConfig();
  let buildData = new BuildData(
    _.extend(
      {},
      {
        config: { data: config },
        argv: { data: argv },
        _: { data: _ }
      },
      config.data ? config.data : {}
    ),
    {
      logger: m => {
        gutil.log(`[${gutil.colors.cyan('html')}] [build-data] ${m}`);
      },
      ignoreInitialCache: argv.cache === false,
      cache: path.join(__dirname, '..', '.cache-build-data'),
      localOutput: path.join(__dirname, '..', 'assets', 'data')
    }
  );
  return await buildData.fetch();
}

// Main function to build HTML files.  Utilizes EJS and includes.
// Deprecated: Using Svelte for templating, since it shares client side.
async function html() {
  let { config } = configUtil.getConfig();
  let data = await getData();

  return gulp
    .src(
      _.filter(
        _.flatten([
          'pages/**/!(_)*.ejs.html',
          // Get list of templates we might want rendered besides pages.
          // See rewriting in server section.
          config.cms && config.cms.rewriteMapping
            ? _.map(
              _.values(config.cms.rewriteMapping),
              v => `pages/${v.replace(/\.html/, '.ejs.html')}`
            )
            : undefined
        ])
      )
    )
    .pipe(
      include({
        prefix: '@@',
        basepath: '@file'
      })
    )
    .pipe(ejs(data).on('error', gutil.log))
    .pipe(
      rename(function(path) {
        path.basename = path.basename.replace('.ejs', '');
      })
    )
    .pipe(gulp.dest('build/'));
}
html.description =
  'Main function to build HTML files.  Utilizes EJS, includes, and common build data.';
html.flags = {
  '--no-cache': 'Ignores cache in collecting the build data.'
};

// Renders pages with Svelte.
async function htmlSvelte() {
  let { config } = configUtil.getConfig();
  let data = await getData();
  let pagesDir = path.join(process.cwd(), 'templates');

  return (
    gulp
      // TODO: Handle the main app part for easy loading for CMS
      .src(
        _.filter(
          _.flatten([
            'templates/**/!(_)*.svelte.html',
            // Get list of templates we might want rendered besides pages.
            // See rewriting in server section.
            config.cms && config.cms.rewriteMapping
              ? _.map(
                _.values(config.cms.rewriteMapping),
                v => `templates/${v.replace(/\.html/, '.svelte.html')}`
              )
              : undefined
          ])
        )
      )
      .pipe(
        transform('utf8', (content, file) => {
          // Clear cache first, otherwise watching won't work
          clearRequireCache(pagesDir);
          let s = require(file.path);
          let r = s.render(data);

          // for the includes, we don't want to add the page wrapper.
          return isInclude(file.path)
            ? `${r.css ? r.css.code : ''} ${r.html}`
            : sveltePage(r);
        })
      )
      .pipe(
        rename(function(path) {
          path.basename = path.basename.replace('.svelte', '');
        })
      )
      .pipe(gulp.dest('build/'))
  );
}
htmlSvelte.description =
  'Main function to build HTML files.  Utilizes Svelte to build components.';
htmlSvelte.flags = {
  '--no-cache': 'Ignores cache in collecting the build data.'
};

// Simple linting, meant for live building
function lintSimple() {
  return gulp
    .src('build/**/!(_)*.html')
    .pipe(noopener.warn())
    .pipe(htmlhint('.htmlhintrc'))
    .pipe(htmlhint.reporter('htmlhint-stylish'));
}
lintSimple.description =
  'Simple HTML linting meant for quick building processes.  Assumes HTML is built in the build folder.';

// Full HTML linting
function lint() {
  return gulp
    .src('build/**/!(_)*.html')
    .pipe(noopener.warn())
    .pipe(htmlhint('.htmlhintrc'))
    .pipe(htmlhint.reporter())
    .pipe(a11y())
    .pipe(a11y.reporter());
}
lint.description =
  'Full HTML linting, including accessibility linting.  Assumes HTML is built in the build folder.';

// Make full html from svelte render
function sveltePage({ html, head, css }) {
  return `<!doctype html>
<html lang="en">
	<head>
    ${head}

		<style>
			${css.code}
		</style>
  </head>

	<body>
		${html}
	</body>
</html>
`;
}

// Clear require cache
function clearRequireCache(prefix) {
  if (prefix) {
    _.each(require.cache, (c, ci) => {
      if (ci.indexOf(prefix) === 0) {
        delete require.cache[ci];
      }
    });
  }
}

// Determine if a path is an include, prefix with _
function isInclude(filepath) {
  return filepath ? filepath.split('/').pop()[0] === '_' : false;
}

// Exports
module.exports = {
  getData,
  html,
  htmlSvelte,
  lint,
  lintSimple
};
