/**
 * Input options
 */
'use strict';

// Dependencies
const common = require('../common/lib/input.js');

// Tests
const emailTest = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

// Input config
module.exports = function(generator) {
  var c = common(generator);

  // Type of project
  c.push({
    type: 'list',
    name: 'projectType',
    message: 'What type of project is this?',
    default: 'standalone',
    choices: [
      {
        name: 'Standalone embed -- Will probably be used in an iframe.',
        value: 'standalone',
        short: 'Standalone embed'
      },
      {
        name:
          'CMS integration -- Markup lives in the CMS with assets managed in project.',
        value: 'cms',
        short: 'CMS integration'
      }
    ]
  });

  // CMS questions
  c.push({
    type: 'input',
    name: 'cmsIDs',
    required: true,
    message:
      'The Clickability CMS article ID(s).  For multiple ID\'s, separate by\n   a comma, such as "123, 456".  Note that only the first one is used\n   in the build, and the other are for reference.',
    when: answers => {
      return answers.projectType === 'cms';
    }
  });

  c.push({
    type: 'input',
    name: 'lcdIDs',
    message:
      'The Clickability CMS Linked-Content-Data (LCD) ID(s).  For multiple ID\'s, separate by\n   a comma, such as "123, 456".  Note that this\n   currently only used for reference',
    when: answers => {
      return answers.projectType === 'cms';
    }
  });

  // Use google for content
  c.push({
    type: 'confirm',
    name: 'googleSpreadsheet',
    message:
      'Would you like to use Google Spreadsheets to maintain some content/copy\n   of this project? Note that this will require some extra setup.',
    when: answers => {
      // CMS will most likely not use a Google Spreadsheet for content
      return answers.projectType !== 'cms';
    }
  });

  c.push({
    type: 'input',
    name: 'googleSpreadsheetEmail',
    message:
      'Enter your Google API client email.\n   This is something like: XXXXXX@XXXXXX.iam.gserviceaccount.com',
    required: true,
    validate: function(str) {
      return str.length > 0 && emailTest.test(str);
    },
    default: () => {
      return process.env.GOOGLE_AUTH_CLIENT_EMAIL || undefined;
    },
    when: answers => {
      return answers.googleSpreadsheet === true;
    }
  });

  c.push({
    type: 'input',
    name: 'googleSpreadsheetKey',
    message:
      'Enter your Google API private key.\n   This is something like: --BEGIN PRIVATE--XX\\nXX\\nXX--END PRIVATE KEY--',
    required: true,
    validate: function(str) {
      return str.length > 0;
    },
    default: () => {
      return process.env.GOOGLE_AUTH_PRIVATE_KEY || undefined;
    },
    when: answers => {
      return answers.googleSpreadsheet === true;
    }
  });

  c.push({
    type: 'input',
    name: 'googleSpreadsheetOwner',
    message:
      'Enter your personal Google Email to set the owner of the spreadsheet.\n   This may be something like name@gmail.com and will be different than the email above.',
    required: true,
    validate: function(str) {
      return str.length > 0 && emailTest.test(str);
    },
    default: () => {
      return (
        process.env.GOOGLE_DEFAULT_SPREADSHEET_OWNER ||
        generator.user.git.email() ||
        undefined
      );
    },
    when: answers => {
      return answers.googleSpreadsheet === true;
    }
  });

  // Include data template
  c.push({
    type: 'confirm',
    name: 'dataTemplate',
    message: 'Would you like to include the data analysis template?'
  });

  // Add newline at the end of each, as its a bit easier on
  // the eyes.
  c = c.map(i => {
    i.message = i.message + '\n';
    return i;
  });

  return c;
};
