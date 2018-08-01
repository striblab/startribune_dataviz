/**
 * Methods to get and create data with Google Sheets, specifically
 * using Google sheets as a key value store.
 *
 * https://developers.google.com/sheets/api/reference/rest/
 * https://developers.google.com/drive/v3/reference/
 */

// Dependencies
const _ = require('lodash');
const google = require('googleapis').google;
const request = require('request');
const csv = require('d3-dsv').dsvFormat(',');
const GoogleDrive = require('./google-drive.js');

// Default content
const defaultContent = [
  {
    values: [
      {
        userEnteredValue: { stringValue: 'Key' },
        note:
          'This is the reference that is used in the template; if you don\'t know what that means, then please don\'t change this.'
      },
      {
        userEnteredValue: { stringValue: 'Value' },
        note: 'The actual content that will show up.'
      },
      {
        userEnteredValue: { stringValue: 'Type' },
        note:
          'The type of content this.  Use "date", "number", "boolean" or "array" if needed.'
      },
      {
        userEnteredValue: { stringValue: 'Notes' },
        note: 'Any notes about this specific field'
      }
    ]
  },
  {
    values: [
      { userEnteredValue: { stringValue: 'Title' } },
      { userEnteredValue: { stringValue: 'The title of the project' } },
      { userEnteredValue: { stringValue: '' } },
      { userEnteredValue: { stringValue: '' } }
    ]
  },
  {
    values: [
      { userEnteredValue: { stringValue: 'Organization' } },
      { userEnteredValue: { stringValue: 'Star Tribune' } },
      { userEnteredValue: { stringValue: '' } },
      { userEnteredValue: { stringValue: 'Used for meta data.' } }
    ]
  },
  {
    values: [
      { userEnteredValue: { stringValue: 'Authors' } },
      { userEnteredValue: { stringValue: '' } },
      { userEnteredValue: { stringValue: '' } },
      { userEnteredValue: { stringValue: 'Used for meta data.' } }
    ]
  },
  {
    values: [
      { userEnteredValue: { stringValue: 'Social Description' } },
      { userEnteredValue: { stringValue: '' } },
      { userEnteredValue: { stringValue: '' } },
      {
        userEnteredValue: {
          stringValue:
            'Used for meta data and shows up when sharing directly from the project on Facebook and similar.'
        }
      }
    ]
  },
  {
    values: [
      { userEnteredValue: { stringValue: 'Tweet' } },
      { userEnteredValue: { stringValue: 'Check out this new project.' } },
      { userEnteredValue: { stringValue: '' } },
      {
        userEnteredValue: {
          stringValue:
            'Used for meta data and shows up when Tweeting directly from project.'
        }
      }
    ]
  },
  {
    values: [
      { userEnteredValue: { stringValue: 'Twitter Account' } },
      { userEnteredValue: { stringValue: '@startribune' } },
      { userEnteredValue: { stringValue: '' } },
      {
        userEnteredValue: {
          stringValue:
            'Used for meta data and shows up when Tweeting directly from project.'
        }
      }
    ]
  }
];

// Main class
class GoogleSheets extends GoogleDrive {
  constructor(options = {}) {
    super(options);
    this.sheets = google.sheets('v4');
    this.defaultContent = defaultContent;
    this.scopes = this.scopes.concat([
      'https://www.googleapis.com/auth/spreadsheets'
    ]);
  }

  // Create new spreadsheet.
  async newSheet(options = {}) {
    options.title = options.title || 'Content for project [PLEASE UPDATE]';
    options.sheetTitle = options.sheetTitle || 'Content for project';
    options.content =
      options.content !== false ? options.content || defaultContent : false;

    if (this.options.noAuth) {
      throw new Error('Cannot create new sheet with the "noAuth" option.');
    }

    // Put together resource sheet object
    let resource = {};
    resource.properties = { title: options.title };
    if (options.content) {
      resource.sheets = [
        {
          properties: {
            title: options.sheetTitle,
            gridProperties: {
              frozenRowCount: 1
            }
          },
          data: [
            {
              startRow: 0,
              startColumn: 0,
              rowData: options.content
            }
          ]
        }
      ];
    }

    // Get auth and make request
    let auth = await this.authenticate();
    return await this.sheets.spreadsheets.create({
      auth: auth,
      resource: resource
    });
  }

  // Wrapper for new blank sheet
  async newBlankSheet(options = {}) {
    options.content = false;
    return await this.newSheet(options);
  }

  // Get the basic grid content
  //
  // field should be 'userEnteredValue', 'effectiveValue', or 'formattedValue'
  //
  // TODO.  Look into Sheet ID.  The docs say it needs
  // to be a number, but there's the gid, such as 682757591
  // https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets#SheetProperties
  async getRawGrid(id, sheet = false, field = 'userEnteredValue') {
    if (!id) {
      throw new Error('Spreadsheet/file id not provided to getRawGrid method');
    }

    let auth = await this.authenticate();
    let response = await this.sheets.spreadsheets.get({
      auth: auth,
      spreadsheetId: id,
      includeGridData: true
    });

    // Get specific sheet
    let s = response.data.sheets[0];
    if (_.isInteger(sheet) || _.isString(sheet)) {
      s = _.find(response.sheets, sheet => {
        return sheet.properties.sheetId === sheet;
      });
    }

    // Check for sheet
    if (!s) {
      throw new Error('Unable to locate sheet from ID: ' + sheet);
    }

    // Get data into simple format
    let data = [];
    if (s.data && s.data[0] && s.data[0].rowData) {
      s.data[0].rowData.forEach(r => {
        let row = [];
        r.values.forEach(c => {
          row.push(
            field === 'formattedValue'
              ? c[field]
              : c[field]
                ? c[field].stringValue
                : null
          );
        });

        data.push(row);
      });
    }

    return data;
  }

  // Get contents via "Published to Web" csv
  async getPublishedToWebContents(url) {
    if (!url || !url.match(/^http/i)) {
      throw new Error(
        'URL provided to getPublishedToWebContent method does not start with "http"'
      );
    }

    return new Promise((resolve, reject) => {
      request.get(url, (error, response, body) => {
        if (error) {
          return reject(error);
        }
        if (response.statusCode >= 300) {
          return reject(
            new Error(
              `Request for public google doc returned ${response.statusCode}.`
            )
          );
        }

        resolve(csv.parse(body));
      });
    });
  }

  // Format raw content
  formatRawGrid(data) {
    if (!_.isArray(data) || !data.length) {
      //throw new Error('Data provided not array with any rows.');
      return [];
    }

    // Assume first row is headers
    let headers = data.shift();
    return data.map(d => {
      let row = {};

      // Use headers for keys
      d.forEach((c, ci) => {
        row[headers[ci]] = _.isString(c) ? c.trim() : c;
      });

      return row;
    });
  }

  // Format the grid into key value object
  formatContentFromGrid(grid) {
    if (!_.isArray(grid) || !grid.length) {
      throw new Error('Grid provided not array with any rows.');
    }

    let content = {};
    grid.forEach(g => {
      let key = _.camelCase(g.Key);

      content[key] = g.Value;
      if (g.Type && g.Type.toLowerCase() === 'number' && g.Value) {
        content[key] = parseFloat(g.Value);
      }
      else if (g.Type && g.Type.toLowerCase() === 'boolean' && g.Value) {
        content[key] = g.match(/yes|true|1|^y/i)
          ? true
          : g.match(/no|false|0|^n/i)
            ? false
            : null;
      }
      else if (g.Type && g.Type.toLowerCase() === 'date' && g.Value) {
        // TODO
      }
      else if (g.Type && g.Type.toLowerCase() === 'array' && g.Value) {
        content[key] = g.Value.split('|');
      }
    });

    return content;
  }

  // Wrapper to get content from sheet and format it in key value way
  async getStructuredContents(id, sheet = false) {
    if (!id) {
      throw new Error(
        'Spreadsheet/file id not provided to getStructuredContent method'
      );
    }

    // No auth version comes as CSV
    if (this.options.noAuth) {
      return await this.getPublishedToWebContents(id);
    }

    return this.formatRawGrid(await this.getRawGrid(id, sheet));
  }

  // Wrapper to get content from sheet and format it in key value way
  async getContents(id, sheet = false) {
    if (!id) {
      throw new Error('Spreadsheet/file id not provided to getContent method');
    }

    return this.formatContentFromGrid(
      this.formatRawGrid(await this.getRawGrid(id, sheet))
    );
  }
}

module.exports = GoogleSheets;
