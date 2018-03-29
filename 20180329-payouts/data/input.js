/**
 * Input options
 */
'use strict';

// Dependencies
const common = require('../common/lib/input.js');

// Input config
module.exports = function(generator, noCommon = false) {
  let c = [];
  if (!noCommon) {
    c = common(generator);
  }

  // Use google for content
  c.push({
    type: 'confirm',
    name: 'useDrake',
    message : 'Use Drake for data workflow (recommended)'
  });

  // Add newline at the end of each, as its a bit easier on
  // the eyes.
  c = c.map((i) => {
    i.message = i.message + '\n';
    return i;
  });

  return c;
};
