/**
 * Helpers around getting config, specifically to be able to support
 * more featureful config.
 */

// Dependencies
const fs = require('fs-extra');
const path = require('path');

// Get base config
function getConfig() {
  if (!hasConfig()) {
    return { error: 'No config file found.' };
  }

  try {
    if (fs.existsSync(path.join(__dirname, '..', 'config.custom.json'))) {
      return {
        config: require('../config.custom.json'),
        location: 'config.custom.json'
      };
    }
    else if (fs.existsSync(path.join(__dirname, '..', 'config.json'))) {
      return { config: require('../config.json'), location: 'config.json' };
    }
  }
  catch (e) {
    return { error: e };
  }
}

// Check for config
function hasConfig() {
  return (
    fs.existsSync(path.join(__dirname, '..', 'config.custom.json')) ||
    fs.existsSync(path.join(__dirname, '..', 'config.json'))
  );
}

// Export
module.exports = {
  getConfig,
  hasConfig
};
