/**
 * Various gulp functions
 */

// Dependencies
const del = require('del');

// Clean build folder
function clean() {
  return del(['build/**/*']);
}
clean.description = 'Removes all contents of build folder.';

// Exports
module.exports = {
  clean
};
