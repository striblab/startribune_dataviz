/**
 * Some basic methods for getting data from Airtable
 */

// Dependencies
const _ = require('lodash');
const Airtable = require('airtable');
require('dotenv').load({ silent: true });

// Main class
class AirtableData {
  constructor(options = {}) {
    this.options = options;

    if (!process.env.AIRTABLE_API_KEY) {
      throw new Error(
        'Airtable API access requires a key as the AIRTABLE_API_KEY environment variable.'
      );
    }

    // Airtable doesn't natively read the env variable if loaded via dotenv
    this.airtable = new Airtable({
      apiKey: process.env.AIRTABLE_API_KEY
    });
  }

  // Get contents of a table
  async getTableContents(baseID, table, view = undefined) {
    if (!baseID) {
      throw new Error(
        'The Airtable Base ID is needed; a base has multiple tables.  This can be found in the https://airtable.com/api section.'
      );
    }
    if (!table) {
      throw new Error(
        'The Airtable Table ID is needed; a base has multiple tables.  This can be found in the https://airtable.com/api section.'
      );
    }

    // Base connection
    let base = this.airtable.base(baseID);

    // Options
    let selectOptions = {};
    if (view) {
      selectOptions.view = view;
    }

    // Collect all
    return new Promise((resolve, reject) => {
      let all = [];

      base(table)
        .select(selectOptions)
        .eachPage(
          (records, next) => {
            all = all.concat(
              records.map(r => {
                // Attach Airtable row ID to fields
                r.fields = r.fields || {};
                r.fields.airtableID = r.id;
                return r.fields;
              })
            );
            next();
          },
          error => {
            if (error) {
              return reject(error);
            }

            // Filter empty rows
            all = _.filter(all, a => {
              return a && !_.isEmpty(a);
            });

            resolve(all);
          }
        );
    });
  }
}

// Export
module.exports = AirtableData;
