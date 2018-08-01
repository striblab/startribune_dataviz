# Application data

Data to pull into the application for HTML rendering or to put into `assets/` for the client can be handled in the `config.json` or for control, directly in the `gulpfile.js`. Different local and remote sources can be easily brought into the application this way. Any remote sources will be cached locally.

- Add entries in the `data` key in `config.json`.
- Or within the `html` task in `./lib/gulp-html.js`.

Data sources can be described in a number of ways.

- Just use a local path, like `sources/data.json`, so your config might looks something like:
  ```
  {
    ...
    "data": {
      templateData: 'sources/custom-data.json'
    },
    ...
  }
  ```
- You can also do the same with a remote source, like `http://example.com/some-data.csv`
- If you have a "Published to the web" CSV of a Google Sheet, you can use that as well; such as `https://docs.google.com/spreadsheets/d/e/XXXXXX/pub?output=csv`
- Or a "Published to the web" Google Document in [ArchieML](http://archieml.org/) format; such as `https://docs.google.com/document/d/e/XXXXX/pub`.
- For more control, you can use more options. You can force a specific type of data with the type paramter:
  ```
  {
    source: 'sources/example.jsonext',
    type: 'json'
  }
  ```
- We can also connect to Airtable. Make sure to have the `AIRTABLE_API_KEY` environment variable set:
  ```
  {
    type: 'airtable',
    base: 'XXXXX',
    table: 'Table name',
    ttl: 600000
  }
  ```
- For private Google Docs or Spreadsheets, make sure to have an API config file, and set the path in the `GOOGLE_APPLICATION_CREDENTIALS` environment variables. From there, we can use just the file ID as the source.
  ```
  {
    type: 'google-doc',
    id: 'XXXXXXX'
  }
  ```
- For a Google Spreadsheet that has a key and value columns, and you want to transform into an object, the spreadsheet needs to have the `Key`, `Value`, and `Type` columns set up, then you can just add the `keyColumn` option.
  ```
  {
    type: 'google-sheet',
    id: 'XXXXXXX',
    sheet: 'XXXXXX',
    keyColumn: true
  }
  ```
