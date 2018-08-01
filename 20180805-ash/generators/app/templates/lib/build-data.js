/**
 * Put together multiple local and remote sources
 * for building templates
 */

const fs = require('fs-extra');
const io = require('indian-ocean');
const request = require('request');
const path = require('path');
const _ = require('lodash');
const csv = require('d3-dsv').dsvFormat(',');
const GoogleDocs = require('./google-docs.js');
const GoogleSheets = require('./google-sheets.js');
const Airtable = require('./airtable.js');

// Some consts
const ioReadFormats = [
  'json',
  'geojson',
  'topojson',
  'csv',
  'tsv',
  'psv',
  'yaml',
  'yml',
  'aml'
];
const ioWriteFormats = [
  'json',
  'geojson',
  'topojson',
  'csv',
  'tsv',
  'psv',
  'yaml',
  'yml',
  'dbf'
];

// Main class
class BuildData {
  constructor(data = {}, options = {}) {
    this.data = data;
    this.options = options;

    // Defaults
    this.options.logger = this.options.logger || console.log;
    this.options.ttl = this.options.ttl || 1000 * 60 * 10;
    this.options.cache =
      this.options.cache || path.join(__dirname, '..', '.cache-remote-data');
    this.options.ignoreInitialCache = _.isBoolean(
      this.options.ignoreInitialCache
    )
      ? this.options.ignoreInitialCache
      : false;

    // Convineience
    this.logger = this.options.logger;

    // Make sure cache directory is there
    fs.mkdirpSync(this.options.cache);

    // Make sure local output directory is there
    if (this.options.localOutput) {
      fs.mkdirpSync(this.options.localOutput);
    }
  }

  // Main fetch handler
  async fetch() {
    if (_.isEmpty(this.data)) {
      this.logger('No data provided');
      return [];
    }

    // Place for keyed values
    let keyed = {};

    // Parallel
    await Promise.all(
      _.map(this.data, async (d, di) => {
        // Data pass through
        if (d.data) {
          keyed[di] = d.data;
          return;
        }

        // Allow for a post process
        if (_.isFunction(d.postprocess)) {
          keyed[di] = d.postprocess(await this.fetchSet(d, di));
        }
        else {
          keyed[di] = await this.fetchSet(d, di);
        }

        // Save local (in another place, for the build, maybe to be
        // used on the client)
        this.saveLocal(keyed[di], d, di);
      })
    );

    return keyed;
  }

  // Fetch a data set
  async fetchSet(set = {}, id) {
    if (!id) {
      throw new Error('id is needed for the fetchSet method.');
    }

    // Fill out data
    set = this.parseSet(set);

    // With local, we use indian-ocean
    if (!set.remote) {
      // Allow to set a specific type
      if (set.type && _.isFunction(io[`read${_.startCase(set.type)}Sync`])) {
        return io[`read${_.startCase(set.type)}Sync`](
          set.source,
          set.options ? set.options : undefined
        );
      }
      else {
        return io.readDataSync(
          set.source,
          set.options ? set.options : undefined
        );
      }
    }
    else {
      // Remote data
      return await this.fetchRemoteSet(set, id);
    }
  }

  // Fetch remote set (and cache)
  async fetchRemoteSet(set = {}, id) {
    // Check cache
    if (!this.options.ignoreInitialCache) {
      let cache = this.getCache(id, set);
      if (cache) {
        this.logger(`Using cache for ${id}`);
        return cache;
      }
    }

    // Place for data
    let data;

    // Note not using cache
    this.logger(`No cache, fetching ${id}`);

    // Determine how we do this.  Google docs
    if (set.type === 'google-docs' || set.type === 'google-doc') {
      let g = new GoogleDocs(set.options);
      data = await g.getStructuredContents(set.source || set.id || set.url);
    }
    // Google sheets
    else if (set.type === 'google-sheets' || set.type === 'google-sheet') {
      let g = new GoogleSheets(set.options);
      // Allow for key value store
      if (set.keyColumn) {
        data = await g.getContents(set.source || set.id || set.url, set.sheet);
      }
      else {
        data = await g.getStructuredContents(
          set.source || set.id || set.url,
          set.sheet
        );
      }
    }
    // Airtable
    else if (set.type === 'airtable') {
      let a = new Airtable(set.options);
      data = await a.getTableContents(
        set.source || set.base,
        set.table,
        set.view
      );
    }
    // Default remote
    else {
      data = await this.fetchGenericRemote(set);
    }

    // Cache data
    if (data) {
      this.setCache(id, data, set);
    }
    return data;
  }

  // Get general remote source
  async fetchGenericRemote(set) {
    return new Promise((resolve, reject) => {
      request(
        _.extend({}, set.options, {
          url: set.source || set.url
        }),
        (error, response, body) => {
          if (error) {
            return reject(error);
          }
          if (response.statusCode >= 400) {
            return reject(`Request returned ${response.statusCode}`);
          }

          if (set.type === 'json') {
            resolve(JSON.parse(body));
          }
          else if (set.type === 'csv') {
            resolve(csv.parse(body));
          }
          else {
            try {
              resolve(JSON.parse(body));
            }
            catch (e) {
              resolve(body);
            }
          }
        }
      );
    });
  }

  // Save local, if options allow it
  saveLocal(data, set, id) {
    if (!set.local) {
      return;
    }

    if (set.local && !this.options.localOutput) {
      this.logger(
        `local is set for ${id}, but the localOutput general option is not set; cannot save.`
      );
      return;
    }

    // Determine file name
    let extension = (set.source || set.url || set.id).split('.').pop();
    extension = ~ioWriteFormats.indexOf(set.type)
      ? set.type
      : ~ioWriteFormats.indexOf(extension)
        ? extension
        : 'json';
    let localName = _.isString(set.local) ? set.local : `${id}.${extension}`;
    let localPath = path.join(this.options.localOutput, localName);

    // Save
    this.logger(`Saving local version of ${id} as ${localPath}`);
    io.writeDataSync(localPath, data);
  }

  // Parse data options, specifically if it just a string, and how to
  // parse data if not defined
  parseSet(data) {
    const determineType = s => {
      if (s.match(/csv/i)) {
        return 'csv';
      }
      if (s.match(/json/i)) {
        return 'json';
      }

      return 'unknown';
    };

    // If just a string
    if (_.isString(data)) {
      // Google docs public URL
      if (data.match(/^https:\/\/docs.google.com\/document/i)) {
        data = {
          source: data,
          remote: true,
          type: 'google-docs',
          options: {
            noAuth: true
          }
        };
      }
      // Google sheets public URL
      else if (data.match(/^https:\/\/docs.google.com\/spreadsheets/i)) {
        data = {
          source: data,
          remote: true,
          type: 'google-sheets',
          options: {
            noAuth: true
          }
        };
      }
      // Other source
      else {
        data = {
          source: data
        };
      }
    }

    // Determine if this is a remote source or not
    if (_.isUndefined(data.remote)) {
      if (
        ~[
          'airtable',
          'google-doc',
          'google-docs',
          'google-sheet',
          'google-sheets'
        ].indexOf(data.type)
      ) {
        data.remote = true;
      }
      else if (data.source && data.source.match(/^http/i)) {
        data.remote = true;
      }
      else {
        data.remote = false;
      }
    }

    // Try to determine type
    if (_.isUndefined(data.type)) {
      data.type = determineType(data.source);
    }

    // Add globl ttl
    data.ttl = data.ttl || this.options.ttl;

    return data;
  }

  // Set cache.
  // TODO: Handle binary/buffer data
  setCache(id, data, options) {
    let meta = {
      options: options,
      created: new Date().toUTCString(),
      parser: _.isString(data) ? 'string' : 'json'
    };

    // Base parsing
    let w =
      meta.parser === 'string'
        ? data
        : meta.parser === 'json'
          ? JSON.stringify(data)
          : data;

    fs.writeFileSync(this.cacheMeta(id), JSON.stringify(meta));
    fs.writeFileSync(this.cacheData(id), w);
  }

  // Get cache
  // TODO: Handle binary/buffer data
  getCache(id, set = {}) {
    if (!fs.existsSync(this.cacheData(id))) {
      return false;
    }
    if (!fs.existsSync(this.cacheMeta(id))) {
      return false;
    }

    // Get meta data
    let meta = JSON.parse(fs.readFileSync(this.cacheMeta(id)));

    // See if still valid
    let now = new Date();
    let then = new Date(meta.created);
    let ttl = set.ttl || meta.options.ttl;
    if (now - then >= ttl) {
      return false;
    }

    // Otherwise get data
    let data = fs.readFileSync(this.cacheData(id), {
      encoding: meta.options.binary ? null : 'utf-8'
    });

    // Determine how to parse
    return meta.parser === 'string'
      ? data
      : meta.parser === 'json'
        ? JSON.parse(data)
        : data;
  }

  // Wrapper for locations
  cacheData(id) {
    return path.join(this.options.cache, `${id}.data`);
  }

  // Wrapper for locations
  cacheMeta(id) {
    return path.join(this.options.cache, `${id}.meta`);
  }
}

module.exports = BuildData;
