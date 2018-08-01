/**
 * Some helpful functions for CMS integration
 */

// Dependencies
const fs = require('fs-extra');
const path = require('path');
const gutil = require('gulp-util');
const { copy } = require('copy-paste');
const argv = require('yargs').argv;
const configUtil = require('./config.js');
const webpackConfig = require('../webpack.config.js');

// Some basics check of CMS config
async function cmsConfig() {
  let { config, error, location } = configUtil.getConfig();
  if (error) {
    throw new gutil.PluginError('cms', error);
  }

  gutil.log(`
Config found at:
  ${gutil.colors.cyan(location)}
`);

  if (config.cms) {
    gutil.log(`
CMS configuration found:
${gutil.colors.cyan(JSON.stringify(config.cms, null, '  '))}
`);
  }
  else {
    gutil.log(
      gutil.colors.yellow(`
Unable to locate the "cms" key in the config; this should be something like:
`) +
        gutil.colors.cyan(`
  {
    ...
    "cms":
      "id": "123456",
      "pages": ["123456"],
      "lcds": ["456789"],
      "rewriteMapping": {
        "article-lcd-body-content": "_index-content.html"
      }
    }
    ...
  }
    `)
    );
  }
}
cmsConfig.description =
  'Output information about the CMS config in config.json.';

// Get the values for common LCD.
async function lcd() {
  let { config, error } = configUtil.getConfig();
  if (error) {
    throw new gutil.PluginError('cms', error);
  }

  // Check for cms
  if (!config || !config.cms) {
    throw new gutil.PluginError(
      'cms',
      'Unable to find the "cms" section in the config.'
    );
  }

  // Parts
  let parts = {};

  // Scripts.  Webpack config is hard to discern if used in a dynamic way
  parts.scripts =
    config.publish && config.publish.production
      ? config.publish.production.path + '/' + webpackConfig.output.filename
      : undefined;

  // Just hardcoded, since the definition is in the gulp task
  parts.styles =
    config.publish && config.publish.production
      ? config.publish.production.path + '/styles.bundle.css'
      : undefined;

  // Content
  let hasContent =
    config.cms.rewriteMapping &&
    config.cms.rewriteMapping['article-lcd-body-content'];
  let contentFullPath = path.join(
    __dirname,
    '..',
    'build',
    config.cms.rewriteMapping['article-lcd-body-content']
  );
  let contentProjectPath = path.join(
    'build',
    config.cms.rewriteMapping['article-lcd-body-content']
  );
  parts.hasContent =
    hasContent && fs.existsSync(contentFullPath) ? contentProjectPath : false;
  parts.content =
    hasContent && fs.existsSync(contentFullPath)
      ? fs.readFileSync(contentFullPath, 'utf-8')
      : undefined;

  // Script libraries
  parts['script libraries'] =
    config.js && config.js.globals && config.js.globals.length
      ? `<script src="${config.js.globals.join(
        '"></script>\n<script src="'
      )}"></script>`
      : undefined;

  // Style libraries
  parts['style libraries'] =
    config.styles && config.styles.globals && config.styles.globals.length
      ? `<link rel="stylesheet" type="text/css" href="${config.styles.globals.join(
        '" />\n<link rel="stylesheet" type="text/css" href="'
      )}" />`
      : undefined;

  // Final output
  gutil.log(`

The following are common values used in the LCD for CMS integration
for this project.  LCD(s) located at:
${gutil.colors.green(
    config.cms && config.cms.lcds ? config.cms.lcds.join(', ') : ''
  )}

${gutil.colors.gray(
    'Note that this is a best guess and may change if\n you have customized the template or project.'
  )}

content:
${
  parts.hasContent
    ? gutil.colors.cyan('Contents of file: <' + parts.hasContent + '>')
    : gutil.colors.gray(
      'Unable to get contents, either the cms.rewriteMapping[\'article-lcd-body-content\'] in the config is not set to a build file, or the build file is not there (run "gulp").'
    )
}

scripts:
${
  parts.scripts
    ? gutil.colors.cyan(parts.scripts)
    : gutil.colors.gray(
      'No scripts found, this is either an issue with the Webpack config, \n or there is not a "publish.production" entry in the config.'
    )
}

styles:
${
  parts.styles
    ? gutil.colors.cyan(parts.styles)
    : gutil.colors.gray(
      'No styles foundmake sure there is a "publish.production" entry in the config.'
    )
}

script libraries:
${gutil.colors.cyan(parts['script libraries'])}

style libraries:
${
  parts['style libraries']
    ? gutil.colors.cyan(parts['style libraries'])
    : gutil.colors.gray(
      'No style libraries, include by putting in "styles.global" in the config.'
    )
}
`);

  // Copy
  if (argv.get && parts[argv.get]) {
    await copy(parts[argv.get]);
    gutil.log(`
Copied "${argv.get}" to the clipboard.
    `);
  }
  else if (!argv.get) {
    gutil.log(`
Use the --get="property" option to copy a value to the clipboard.
    `);
  }
  else {
    gutil.log(`
${gutil.colors.yellow(
    'Unable to find the property "' + argv.get + '" to copy.'
  )}
    `);
  }
}
lcd.description = 'Output LCD values for this project.  This is a best guess.';
lcd.flags = {
  '--get=<LCD_FIELD>':
    '(Optional) Provide the LCD field, such as "content" to copy that value to your clipboard if possible.'
};

// Async copy
async function asyncCopy(v) {
  return new Promise((resolve, reject) => {
    try {
      copy(v, o => {
        resolve(o);
      });
    }
    catch (e) {
      reject(e);
    }
  });
}

// Exports
module.exports = {
  config: cmsConfig,
  lcd
};
