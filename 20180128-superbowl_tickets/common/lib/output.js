/**
 * Some common outputting.
 */

// Dependencies
const chalk = require('chalk');

// Exports
module.exports = {
  welcome: function() {
    return [
      '',
      chalk.green('........................................'),
      chalk.green('...................=....................'),
      chalk.green('...................=....................'),
      chalk.green('..................===...................'),
      chalk.green('..................===...................'),
      chalk.green('.................=====..................'),
      chalk.green('.................=====..................'),
      chalk.green('................=======.................'),
      chalk.green('................=======.................'),
      chalk.green('...............+=======~................'),
      chalk.green('.=====================.000000000000000*.'),
      chalk.green('...+================..00000000000000....'),
      chalk.green('......============...000000000000.......'),
      chalk.green('........========....00000000000.........'),
      chalk.green('...........===.....000000000............'),
      chalk.green('..................000000000.............'),
      chalk.green('.................0000000000.............'),
      chalk.green('...............0000000000000............'),
      chalk.green('..............00000.00000000............'),
      chalk.green('.............0000.....0000000...........'),
      chalk.green('............000.........00000...........'),
      chalk.green('...........00.............0000..........'),
      chalk.green('..........0.................000.........'),
      chalk.green('..............................0.........'),
      chalk.green('........................................'),
      '',
      '    ' + chalk.bgGreen.black('                              '),
      '    ' + chalk.bgGreen.black('   ★ Striblab Generator ★     '),
      '    ' + chalk.bgGreen.black('                              '),
      '',
      chalk.cyan('We\'re gonna create a new project from a template'),
      chalk.cyan('in this directory. We need to get some info from'),
      chalk.cyan('you first.'),
      ''
    ].join('\n');
  },

  done: function() {
    return [
      '',
      '    ' + chalk.bgGreen.black('                              '),
      '    ' + chalk.bgGreen.black('       ★ We did it! ★         '),
      '    ' + chalk.bgGreen.black('                              '),
      '',
      chalk.cyan('Please read the ') + chalk.yellow('README.md') + chalk.cyan(' that was generated in your'),
      chalk.cyan('new project for details on how the project is setup.'),
      ''
    ].join('\n');
  }
};
