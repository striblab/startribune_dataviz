/**
 * Methods to get and create data with Google Sheets, specifically
 * using Google sheets as a key value store.
 *
 * https://developers.google.com/sheets/api/reference/rest/
 * https://developers.google.com/drive/v3/reference/
 */

// Dependencies
const _ = require('lodash');
const google = require('googleapis');
const GoogleAuth = require('google-auth-library');
require('dotenv').load({ silent: true });


// Default content
const defaultContent = [
  { values: [
    { userEnteredValue: { stringValue: 'Key' }, note: 'This is the reference that is used in the template; if you don\'t know what that means, then please don\'t change this.' },
    { userEnteredValue: { stringValue: 'Value' }, note: 'The actual content that will show up.' },
    { userEnteredValue: { stringValue: 'Type' }, note: 'The type of content this.  Use "date", "number", "boolean" or "array" if needed.' },
    { userEnteredValue: { stringValue: 'Notes' }, note: 'Any notes about this specific field' }
  ]},
  { values: [
    { userEnteredValue: { stringValue: 'Title' }},
    { userEnteredValue: { stringValue: 'The title of the project' }},
    { userEnteredValue: { stringValue: '' }},
    { userEnteredValue: { stringValue: '' }},
  ]},
  { values: [
    { userEnteredValue: { stringValue: 'Organization' }},
    { userEnteredValue: { stringValue: 'Star Tribune' }},
    { userEnteredValue: { stringValue: '' }},
    { userEnteredValue: { stringValue: 'Used for meta data.' }},
  ]},
  { values: [
    { userEnteredValue: { stringValue: 'Authors' }},
    { userEnteredValue: { stringValue: '' }},
    { userEnteredValue: { stringValue: '' }},
    { userEnteredValue: { stringValue: 'Used for meta data.' }},
  ]},
  { values: [
    { userEnteredValue: { stringValue: 'Social Description' }},
    { userEnteredValue: { stringValue: '' }},
    { userEnteredValue: { stringValue: '' }},
    { userEnteredValue: { stringValue: 'Used for meta data and shows up when sharing directly from the project on Facebook and similar.' }},
  ]},
  { values: [
    { userEnteredValue: { stringValue: 'Tweet' }},
    { userEnteredValue: { stringValue: 'Check out this new project.' }},
    { userEnteredValue: { stringValue: '' }},
    { userEnteredValue: { stringValue: 'Used for meta data and shows up when Tweeting directly from project.' }},
  ]},
  { values: [
    { userEnteredValue: { stringValue: 'Twitter Account' }},
    { userEnteredValue: { stringValue: '@startribune' }},
    { userEnteredValue: { stringValue: '' }},
    { userEnteredValue: { stringValue: 'Used for meta data and shows up when Tweeting directly from project.' }},
  ]}
];

// ContentSheets as content
class ContentSheets {
  constructor(options) {
    this.options = options || {};
    this.sheets = google.sheets('v4');
    this.drive = google.drive('v3');

    this.defaultContent = defaultContent;
  }

  // Authenticate using a Google Service Account
  authenticate() {
    if (!process.env.GOOGLE_AUTH_CLIENT_EMAIL || !process.env.GOOGLE_AUTH_PRIVATE_KEY) {
      throw new Error('No credentials found as environment variables (GOOGLE_AUTH_CLIENT_EMAIL or GOOGLE_AUTH_PRIVATE_KEY).');
    }

    return new Promise((resolve) => {
      // Check if already auth
      const authFactory = new GoogleAuth();
      const authClient = new authFactory.JWT(
        process.env.GOOGLE_AUTH_CLIENT_EMAIL,
        null,
        process.env.GOOGLE_AUTH_PRIVATE_KEY.replace(/\\n/g, '\n'),
        [
          'https://www.googleapis.com/auth/spreadsheets',
          'https://www.googleapis.com/auth/drive',
          'https://www.googleapis.com/auth/drive.file'
        ]
      );

      this.authClient = authClient;
      authClient.authorize(() => {
        this.authClient = authClient;
        resolve(authClient);
      });
    });
  }

  // Create new spreadsheet
  newSheet(options) {
    options = options || {};
    options.title = options.title || 'Content for project [PLEASE UPDATE]';
    options.sheetTitle = options.sheetTitle || 'Content for project';
    options.content = options.content || defaultContent;

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

    return new Promise((resolve, reject) => {
      this.authenticate().then((auth) => {
        // Create new spreadsheet
        this.sheets.spreadsheets.create({
          auth: auth,
          resource: resource
        }, (error, spreadsheet) => {
          if (error) {
            return reject(error);
          }

          resolve(spreadsheet);
        });
      })
        .catch(reject);
    });
  }

  // Share with someone.
  // role is probably going to be 'owner' or 'writer'
  // Transfer is used with owner to changer ownership of file
  share(id, email, role = 'writer', transfer = false) {
    if (!id) {
      throw new Error('File id not provided to addOwner method');
    }
    if (!email) {
      throw new Error('Email not provided to addOwner method');
    }

    return new Promise((resolve, reject) => {
      this.authenticate().then((auth) => {
        this.drive.permissions.create({
          auth: auth,
          resource: {
            role: role,
            type: 'user',
            emailAddress: email
          },
          fileId: id,
          transferOwnership: transfer
        }, function(error, response) {
          if (error) {
            return reject(error);
          }
          return resolve(response);
        });
      })
        .catch(reject);
    });
  }

  // Get the basic grid content
  //
  // field should be 'userEnteredValue', 'effectiveValue', or 'formattedValue'
  //
  // TODO.  Look into Sheet ID.  The docs say it needs
  // to be a number, but there's the gid, such as 682757591
  // https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets#SheetProperties
  getRawGrid(id, sheet = false, field = 'userEnteredValue') {
    if (!id) {
      throw new Error('Spreadsheet/file id not provided to addOwner method');
    }

    return new Promise((resolve, reject) => {
      this.authenticate().then((auth) => {
        this.sheets.spreadsheets.get({
          auth: auth,
          spreadsheetId: id,
          includeGridData: true
        }, (error, response) => {
          if (error) {
            return reject(error);
          }

          // Get sheet, either number
          let s = response.sheets[0];
          if (_.isInteger(sheet) || _.isString(sheet)) {
            s = _.find(response.sheets, (sheet) => {
              return sheet.properties.sheetId === sheet;
            });
          }

          // Check for sheet
          if (!s) {
            return reject(new Error('Unable to locate sheet from ID: ' + sheet));
          }

          // Get data into simple format
          let data = [];
          s.data[0].rowData.forEach((r) => {
            let row = [];
            r.values.forEach((c) => {
              row.push(field === 'formattedValue' ? c[field] :
                c[field] ? c[field].stringValue : null);
            });

            data.push(row);
          });

          resolve(data);
        });
      })
        .catch(reject);
    });
  }

  // Format raw content
  formatRawGrid(data) {
    if (!_.isArray(data) || !data.length) {
      throw new Error('Data provided not array with any rows.');
    }

    // Assume first row is headers
    let headers = data.shift();
    return data.map((d) => {
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
    grid.forEach((g) => {
      let key = _.camelCase(g.Key);

      content[key] = g.Value;
      if (g.Type && g.Type.toLowerCase() === 'number' && g.Value) {
        content[key] = parseFloat(g.Value);
      }
      else if (g.Type && g.Type.toLowerCase() === 'boolean' && g.Value) {
        content[key] = (g.match(/yes|true|1|^y/i)) ? true : (g.match(/no|false|0|^n/i)) ? false : null;
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

  // Get content
  getContent(id, sheet = false) {
    if (!id) {
      throw new Error('Spreadsheet/file id not provided to addOwner method');
    }

    return new Promise((resolve, reject) => {
      this.getRawGrid(id, sheet).then((data) => {
        resolve(this.formatContentFromGrid(this.formatRawGrid(data)));
      }).catch(reject);
    });
  }
}

module.exports = ContentSheets;
