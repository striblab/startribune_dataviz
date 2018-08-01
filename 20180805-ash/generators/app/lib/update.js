/**
 * Notify users if they need to update.
 */

const updateNotifier = require('update-notifier');
const pkg = require('../../../package.json');

updateNotifier({
  pkg,
  // We want to see this every time
  updateCheckInterval: 1000 * 5
}).notify({
  defer: false,
  isGlobal: true
});
