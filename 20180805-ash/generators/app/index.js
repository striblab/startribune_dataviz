/**
 * Main/default front-end app/visual generator
 */
'use strict';

// Dependencies
const crypto = require('crypto');
const _ = require('lodash');
const chalk = require('chalk');
const Generator = require('yeoman-generator');
const dependencies = require('./dependencies.json');
const inputs = require('./lib/input.js');
const outputs = require('./lib/output.js');
const writePackage = require('./lib/package.js');

// Update notifier
require('./lib/update.js');

// App generator
const App = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.dependencies = dependencies;
  }

  // Input prompts
  prompting() {
    this.log(outputs.welcome());

    return this.prompt(inputs(this)).then(answers => {
      // Format some ansers
      answers.cmsIDs = answers.cmsIDs
        ? _.map(answers.cmsIDs.split(','), d => d.trim())
        : answers.cmsIDs;
      answers.lcdIDs = answers.lcdIDs
        ? _.map(answers.lcdIDs.split(','), d => d.trim())
        : answers.lcdIDs;

      this.answers = answers;
    });
  }

  // Determine parts (sub generators)
  default() {
    // Nothing
  }

  // Write files
  writing() {
    // Package.json
    this.pkg = writePackage(this.answers, this.dependencies);
    this.fs.writeJSON(this.destinationPath('package.json'), this.pkg);

    // Templating context
    const tContext = {
      _: _,
      answers: this.answers,
      package: this.pkg,
      env: process.env,
      token: randomToken()
    };

    // Copy template files.  Overall, assume files are template-able
    // files.
    this.fs.copyTpl(
      this.templatePath('./**/*'),
      this.destinationPath('./'),
      tContext,
      null,
      {
        globOptions: {
          dot: true,
          // Exceptions
          ignore: _.filter(
            _.flatten([
              // Has images and binaries
              this.templatePath('./assets/**/*'),
              // We need to rename this
              this.templatePath('./.gitignore.tpl'),
              // No data analysis
              this.answers.dataAnalysis
                ? undefined
                : [
                  this.templatePath('./tests/data/**/*'),
                  this.templatePath('./data/**/*'),
                  this.templatePath('./data.workflow')
                ]
            ])
          )
        }
      }
    );

    // Copy assets (since these are not text files, we don't want to pass
    // through copyTpl)
    this.fs.copy(
      this.templatePath('./assets/**/*'),
      this.destinationPath('./assets')
    );

    // Copy random assets that needs templating
    this.fs.copyTpl(
      this.templatePath('./assets/**/*.json'),
      this.destinationPath('./assets'),
      tContext
    );

    // Gitignore needs to be renamed
    this.fs.copyTpl(
      this.templatePath('.gitignore.tpl'),
      this.destinationPath('./.gitignore'),
      tContext
    );
  }

  // Install
  install() {
    this.log(chalk.cyan('\nInstalling npm packages...\n'));
    this.npmInstall(undefined, { silent: true, loglevel: 'error' }).then(() => {
      // Do post install stuff here
    });
  }

  // All done
  end() {
    this.log(outputs.done());
  }
};

// Random token
function randomToken() {
  return crypto.randomBytes(16).toString('hex');
}

// Export
module.exports = App;
