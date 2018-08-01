/**
 * Gulp task listing that is actually useful
 */

// Dependencies
const gulp = require('gulp');
const chalk = require('chalk');
const _ = require('lodash');
const cliui = require('cliui');

// Main task listing function
async function list() {
  // Make sure the width is not absurd
  let idealWidth = 100;
  let ui = cliui({
    width:
      getWindowWidth() > idealWidth
        ? idealWidth
        : getWindowWidth()
          ? getWindowWidth()
          : 80
  });
  let tree = gulp.tree({ deep: true }).nodes;

  // Head
  ui.div('\n\nUsage: gulp task1 [task2] [task3]\n');

  // Examples
  ui.div('Examples:\n  gulp develop\n');

  // Tasks
  ui.div('Tasks:\n');

  let taskOutput = '';
  tree.forEach(t => {
    let task = gulp.task(t.label);
    let details = task.unwrap();
    let st = subTasks(t);
    let sf = subFlags(st);
    let subLabel = !!t.label.match(/^.+:.+/);

    // Description
    taskOutput += `  ${subLabel ? chalk.gray(t.label) : t.label}\t  ${
      details.description ? details.description : ''
    }\n`;

    // Sub tasks
    if (st && st.length) {
      taskOutput += `  \t    ${chalk.gray('sub tasks: ' + st.join(', '))}\n`;
    }

    // Flags
    if (details.flags) {
      taskOutput += `  \t    ${chalk.magenta('Flags:')}\n`;
      _.each(details.flags, (d, f) => {
        taskOutput += `  \t      ${chalk.cyan(f)}: ${d}\n`;
      });
    }

    // Sub flags
    if (sf) {
      _.each(sf, (f, s) => {
        taskOutput += `  \t    ${chalk.magenta(
          'Flags from ' + s + ' task:'
        )}\n`;
        _.each(f, (d, ff) => {
          taskOutput += `  \t      ${chalk.cyan(ff)}: ${d}\n`;
        });
      });
    }

    taskOutput += '\n';
  });
  ui.div(taskOutput);

  // Some space
  //ui.div('\n');

  // Output
  console.log(ui.toString());
}
list.description = 'Nicely output task list for this project.';

// Get subtasks
function subTasks(task) {
  let tasks = [];

  const traverse = (task, first = false) => {
    if (!first && !task.label.match(/^</)) {
      tasks.push(task.label);
    }

    if (task.nodes && task.nodes.length) {
      task.nodes.map(t => {
        traverse(t);
      });
    }
  };
  traverse(task, true);

  return tasks;
}

// Get sub flags from list of subtasks
function subFlags(st) {
  let sf = {};

  if (st && st.length) {
    st.forEach(t => {
      let task = gulp.task(t);
      let details =
        task && task.flags
          ? task
          : task && task.unwrap
            ? task.unwrap()
            : undefined;
      if (details && details.flags) {
        sf[t] = _.clone(details.flags);
      }
    });

    if (!_.isEmpty(sf)) {
      return sf;
    }
  }
}

// From cliui
function getWindowWidth() {
  if (typeof process === 'object' && process.stdout && process.stdout.columns) {
    return process.stdout.columns;
  }
  else {
    return 0;
  }
}

// Exports
module.exports = {
  list
};
