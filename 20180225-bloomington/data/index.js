/**
 * Data sub-generator
 */
'use strict';

// Dependencies
const path = require('path');
const _ = require('lodash');
const ejs = require('ejs');
const Generator = require('yeoman-generator');
const inputs = require('./input.js');
const dependencies = require('./dependencies.json');
const common = {
  inputs: require('../common/lib/input.js'),
  output: require('../common/lib/output.js'),
  package: require('../common/lib/package.js')
};

// Common locations
common.parts = path.join(__dirname, '../', 'common', 'template-parts');
common.files = path.join(__dirname, '../', 'common', 'template-files');

// App generator
const App = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.dependencies = dependencies;
  }

  // Input prompts
  prompting() {
    if (!this.options.composedWith) {
      this.log(common.output.welcome());
    }

    // If already has answers, then is probably being composed with
    return this.prompt(inputs(this, !!this.options.answers)).then(answers => {
      this.answers = answers;
    });
  }

  // Write files
  writing() {
    // Package.json
    this.pkg = common.package(this.answers, dependencies);
    if (!this.options.composedWith) {
      this.fs.writeJSON(this.destinationPath('package.json'), this.pkg);
    }
    // Templating context
    const tContext = {
      _: _,
      answers: this.answers || {},
      package: this.pkg
    };

    // Templating options
    const tOptions = {
      globOptions: {
        dot: true
      }
    };

    // TODO: Yeoman seems to do this writing after writing the main
    // app when its is used within another generator; this is probably just
    // by happen stance, but there is not way to control the order,
    // which makes it hard to make it simple overwrite things.
    // Keep looking into maybe.

    // Copy common files to pass through template
    // TODO: Not sure why but this does not work when used as sub-generator
    if (!this.options.composedWith) {
      this.fs.copyTpl(
        path.join(common.files, '**/*'),
        this.destinationPath('./'),
        tContext,
        null,
        tOptions
      );
    }

    // Copy data files to pass through template (any)
    this.fs.copyTpl(
      this.templatePath('data/**/*'),
      this.destinationPath('data'),
      tContext,
      null,
      tOptions
    );
    if (this.answers.useDrake) {
      this.fs.copyTpl(
        this.templatePath('data.workflow'),
        this.destinationPath('data.workflow'),
        tContext,
        null,
        tOptions
      );
    }

    // Copy data files to pass through template (standalone)
    if (!this.options.composedWith) {
      this.fs.copyTpl(
        this.templatePath('.gitignore'),
        this.destinationPath('.gitignore'),
        tContext,
        null,
        tOptions
      );
      this.fs.copyTpl(
        this.templatePath('README.md'),
        this.destinationPath('README.md'),
        tContext,
        null,
        tOptions
      );
    }

    // Specifics that should be combined with common elements, should not
    // be needed for use in sub generator.
    if (!this.options.composedWith) {
      this.fs.write(
        this.destinationPath('.gitignore'),
        ejs.render(
          [
            this.fs.read(this.templatePath('.gitignore')),
            this.fs.read(path.join(common.parts, '.gitignore'))
          ].join('\n\n'),
          tContext
        )
      );

      this.fs.write(
        this.destinationPath('README.md'),
        ejs.render(
          [
            this.fs.read(path.join(common.parts, 'README-header.md')),
            this.fs.read(this.templatePath('README.md')),
            this.fs.read(path.join(common.parts, 'README-footer.md'))
          ].join('\n\n'),
          tContext
        )
      );
    }
  }

  // Install
  installing() {
    this.npmInstall();
  }

  // All done
  done() {
    if (!this.options.composedWith) {
      this.log(common.output.done());
    }
  }
};

// Export
module.exports = App;
