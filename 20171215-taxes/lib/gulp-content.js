/**
 * Content tasks
 */

// Dependencies
const fs = require('fs');
const path = require('path');
const gutil = require('gulp-util');
const openurl = require('openurl');
const argv = require('yargs').argv;
const ContentSheets = require('./content-sheets.js');
const pkg = require('../package.json');

// Get content from sheets
function getContent(gulp, config) {
  return (done) => {
    let outputPath = path.join(__dirname, '..', 'content.json');

    // Ensure we have some auth
    if (checkAuth()) {
      return done();
    }

    // Ensure we have a spreadsheet ID
    if (checkspreadsheetId(config)) {
      return done();
    }

    let s = new ContentSheets();
    s.getContent(config.content.spreadsheetId).then((content) => {
      fs.writeFile(outputPath, JSON.stringify(content, null, '  '), done);
    })
      .catch((error) => {
        done(new gutil.PluginError('content', error, { showStack: true }));
      });
  };
}

// Create sheet and update config
function createSheet(gulp, config) {
  return (done) => {
    let configPath = path.join(__dirname, '..', 'config.json');

    // Ensure we have some auth
    if (checkAuth()) {
      return done(new gutil.PluginError('content:create', 'Cannot create new sheet without the needed environment variables.'));
    }

    // Check for email
    if (!argv.email) {
      return done(new gutil.PluginError('content:create', 'Make sure a valid Google email is provided to transfer ownership to. Example: "gulp content:create --email your.name@gmail.com"'));
    }

    // See if there is a spreadsheet ID already
    if (config && config.content && config.content.spreadsheetId) {
      return done(new gutil.PluginError('content:create', 'There is already a content.spreadsheetId in config.json.  Please remove this value before continuing and creating a new spreadsheet.'));
    }

    let s = new ContentSheets();
    s.newSheet({
      title: 'Content for "' + pkg.name + '"'
    }).then((sheet) => {
      // Update owner
      s.share(sheet.spreadsheetId, argv.email, 'owner', true).then(() => {
        let url = 'https://docs.google.com/spreadsheets/d/' + sheet.spreadsheetId + '/edit';

        // Add the spreadheet ID and email to config
        config.content = config.content || {};
        config.content.owner = argv.email;
        config.content.spreadsheetId = sheet.spreadsheetId;
        fs.writeFile(configPath, JSON.stringify(config, null, '  '), done);

        // As a niceity
        gutil.log('');
        gutil.log('A new spreasheet has been created and can be viewed at:');
        gutil.log('  ' + url);
        gutil.log('');

        if (!argv.quiet) {
          openurl.open(url);
        }
      }).catch(done);
    }).catch(done);
  };
}

// Share
function share(gulp, config, role) {
  return (done) => {
    let configPath = path.join(__dirname, '..', 'config.json');
    let command = role === 'owner' ? 'content:owner' : 'content:share';

    // Ensure we have some auth
    if (checkAuth()) {
      return done(new gutil.PluginError(command, 'Cannot create new sheet without the needed environment variables.'));
    }

    // Ensure we have a spreadsheet ID
    if (checkspreadsheetId(config)) {
      return done(new gutil.PluginError(command, 'There is no content.spreadsheetId in config.json.'));
    }

    // Check for email
    if (!argv.email) {
      return done(new gutil.PluginError(command, 'Make sure a valid Google email is provided to share with. Example: "gulp ' + command + ' --email your.name@gmail.com"'));
    }

    let s = new ContentSheets();
    s.share(config.content.spreadsheetId, argv.email, role, role === 'owner').then(() => {
      // Add the email to config
      config.content = config.content || {};
      if (role === 'owner') {
        config.content.owner = argv.email;
      }
      fs.writeFile(configPath, JSON.stringify(config, null, '  '), done);
    }).catch(done);
  };
}

// Open content
function openContent(gulp, config) {
  return (done) => {
    if (!config || !config.content || !config.content.spreadsheetId) {
      return done(new gutil.PluginError('content:open', 'No content.spreadsheetId in config.json was found'));
    }

    let url = 'https://docs.google.com/spreadsheets/d/' + config.content.spreadsheetId + '/edit';
    openurl.open(url);
  };
}

// Check auth env variables
function checkAuth() {
  let problem = !process.env.GOOGLE_AUTH_CLIENT_EMAIL || !process.env.GOOGLE_AUTH_PRIVATE_KEY;
  if (problem) {
    gutil.log();
    gutil.log(gutil.colors.yellow('WARNING: Did not find the environment variables: '));
    gutil.log(gutil.colors.yellow('  GOOGLE_AUTH_CLIENT_EMAIL or GOOGLE_AUTH_PRIVATE_KEY'));
    gutil.log();
    gutil.log(gutil.colors.yellow('This means that content cannot be loaded from Google Sheets.'));
    gutil.log(gutil.colors.yellow('See the README.md for more details.'));
    gutil.log();
  }

  return problem;
}

// Check auth spreadsheet id
function checkspreadsheetId(config) {
  let problem = !config || !config.content || !config.content.spreadsheetId;
  if (problem) {
    gutil.log();
    gutil.log(gutil.colors.yellow('WARNING: Did not find the config.json value: '));
    gutil.log(gutil.colors.yellow('  content.spreadsheetId'));
    gutil.log();
    gutil.log(gutil.colors.yellow('This means that content cannot be loaded from Google Sheets.'));
    gutil.log(gutil.colors.yellow('See the README.md for more details.'));
    gutil.log();
  }

  return problem;
}


module.exports = {
  getContent: getContent,
  createSheet: createSheet,
  openContent: openContent,
  share: share
};
