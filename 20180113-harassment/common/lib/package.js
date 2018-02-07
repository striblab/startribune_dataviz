/**
 * Common function to build package json.
 */
'use strict';

// Dependencies
const _ = require('lodash');
const path = require('path');
const fs = require('fs');
const gitConfig = require('git-config');

// Package building function
module.exports = function(context, dependencies) {
  context = context || {};
  dependencies = dependencies || {};

  // Attempt to get git info
  let gitPath = path.join(process.cwd(), '.git/config');
  let gitInfo = {};
  if (fs.existsSync(gitPath)) {
    gitInfo = gitConfig.sync(gitPath);
  }

  return {
    name: _.kebabCase(context.name),
    version: context.version || '0.0.1',
    description: context.description,
    author: {
      name: context.authorName,
      email: context.authorEmail
    },
    repository: gitInfo['remote "origin"'] ? {
      type: 'git',
      url: gitInfo['remote "origin"'].url
    } : undefined,
    main: context.main || 'app/index.js',
    scripts: {
      test: 'jest'
    },
    keywords: context.keywords || [],
    engines: {
      node: '>=6.9'
    },
    dependencies: dependencies.dependencies || {},
    devDependencies: dependencies.devDependencies || {},
    license: 'MIT'
  };
};
