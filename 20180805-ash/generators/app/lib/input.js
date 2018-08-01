/**
 * Input options
 */

// Dependencies
const _ = require('lodash');

// Tests
const emailTest = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

// Input config
module.exports = function(generator) {
  let c = [];

  // Basic questions
  c.push({
    type: 'input',
    name: 'name',
    message: 'Project name/identifier',
    filter: _.kebabCase,
    validate: function(str) {
      return str.length > 0;
    },
    default: _.kebabCase(generator.appname)
  });

  c.push({
    type: 'input',
    name: 'title',
    message: 'Project title',
    required: true,
    validate: function(str) {
      return str.length > 0;
    },
    default: _.startCase(generator.appname)
  });

  c.push({
    type: 'input',
    name: 'description',
    message: 'Description',
    required: true,
    validate: function(str) {
      return str.length > 0;
    }
  });

  c.push({
    name: 'authorName',
    message: 'Author name',
    default: generator.user.git.name()
      ? `${generator.user.git.name()}, Star Tribune`
      : 'Star Tribune visuals and design teams'
  });

  c.push({
    name: 'authorEmail',
    message: 'Author email',
    default: generator.user.git.email() || 'datadrop@startribune.com'
  });

  // Project type
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
    name: 'stribStylesWrapper',
    required: true,
    default: '.strib-styles.ssa.ssb.ssc',
    message:
      'Strib Styles CSS selector wrapper; this ensures that the\n   Strib Styles are only applied to the project\'s content',
    when: answers => {
      return answers.projectType === 'cms';
    }
  });

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

  // Include data template
  c.push({
    type: 'confirm',
    name: 'dataAnalysis',
    message: 'Would you like to include the data analysis templates?'
  });

  // Add newline at the end of each, as its a bit easier on
  // the eyes.
  c = c.map(i => {
    i.message = i.message + '\n';
    return i;
  });

  return c;
};
