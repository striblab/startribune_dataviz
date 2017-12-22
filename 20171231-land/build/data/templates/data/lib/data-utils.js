/**
 * Collection of utility functions for data processing.
 */
'use strict';

// Dependencies
const request = require('request');
const csv = require('d3-dsv').dsvFormat(',');
const _ = require('lodash');

// Get Google Spreadsheet data through public publishing functionality
//
// @key - Google spreadsheet key
// @sheet - GID of sheet to get
// @options - Object of options
//    - {
//      // Turn field into array
//      arrays: { field-name: separating-character }
//    }
function googleSpreadsheet(key, sheet, options, done) {
  options = options || {};
  const url = sheet ? 'https://docs.google.com/spreadsheets/d/' + key + '/pub?gid=' + sheet + '&single=true&output=csv' :
    'https://docs.google.com/spreadsheets/d/' + key + '/pub?output=csv';

  request(url, (error, response, body) => {
    if (error || response.statusCode >= 300) {
      return done(error || 'Status code: ' + response.statusCode);
    }

    // Parse CSV
    var rows;
    try {
      rows = csv.parse(body);
    }
    catch (e) {
      return done(e);
    }

    // Format a little
    rows = _.map(rows, (r) => {
      var formatted = {};

      // Make each field camelcase and trim
      _.each(r, (v, k) => {
        formatted[_.camelCase(k)] = _.isString(v) ? v.trim() : v;
      });

      // Format arrays
      if (options.arrays) {
        _.each(options.arrays, (char, field) => {
          if (!_.isString(formatted[field]) || formatted[field] === '') {
            return;
          }

          formatted[field] = _.map(formatted[field].split(char), (d) => {
            return d.trim();
          });
        });
      }

      return formatted;
    });

    done(null, rows);
  });
}

// Export
module.exports = {
  csv: csv,
  googleSpreadsheet: googleSpreadsheet
  // TODO: Make function to get google spreadheet data with API
};
