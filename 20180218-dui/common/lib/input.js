/**
 * Input options
 */
'use strict';

// Dependencies
const _ = require('lodash');

// Input config
module.exports = function(generator) {
  return [{
    type: 'input',
    name: 'name',
    message: 'Project name/identifier',
    filter: _.kebabCase,
    validate: function(str) {
      return str.length > 0;
    },
    default: _.kebabCase(generator.appname)
  },
  {
    type: 'input',
    name: 'title',
    message: 'Project title',
    required: true,
    validate: function(str) {
      return str.length > 0;
    },
    default: _.startCase(generator.appname)
  },
  {
    type: 'input',
    name: 'description',
    message: 'Description',
    required: true,
    validate: function(str) {
      return str.length > 0;
    }
  },
  {
    name: 'authorName',
    message: 'Author name',
    default: 'Star Tribune visuals team, Jeff Hargarten, MaryJo Webster, CJ Sinner, Alan Palazzolo' || generator.user.git.name()
  },
  {
    name: 'authorEmail',
    message: 'Author email',
    default: generator.user.git.email() || 'datadrop@startribune.com'
  }];
};
