/**
 * Content tasks
 */

// Dependencies
const zlib = require('zlib');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const gutil = require('gulp-util');
const jeditor = require('gulp-json-editor');
const rename = require('gulp-rename');
const moment = require('moment');
const awspublish = require('gulp-awspublish');
const AWS = require('aws-sdk');
const openurl = require('openurl');
const argv = require('yargs').argv;
require('dotenv').load({ silent: true });

// Create a publish token in config.json
function createToken() {
  return done => {
    let config = getConfig();

    if (config.publishToken) {
      gutil.log('Publish token already present in config.json');
      return done();
    }
    else {
      config.publishToken = crypto.randomBytes(16).toString('hex');
      return fs.writeFile(
        path.join(__dirname, '..', 'config.json'),
        JSON.stringify(config, null, '  '),
        done
      );
    }
  };
}

// Write build version of config which is just the token.
function buildConfig(gulp) {
  return done => {
    let configPath = getConfigPath();
    if (!configPath) {
      done(
        new gutil.PluginError(
          'publish:build',
          'Unable to find config.json or config.custom.json.'
        )
      );
    }

    return gulp
      .src(configPath)
      .pipe(
        jeditor(function(config) {
          return config.publishToken
            ? { publishToken: config.publishToken }
            : {};
        })
      )
      .pipe(
        rename(function(path) {
          path.basename = path.basename.replace('.custom', '');
        })
      )
      .pipe(gulp.dest('build'));
  };
}

// Main publish function
function publish(gulp) {
  return () => {
    let p = getPublishConfig();
    let publisher = awspublish.create({
      params: {
        Bucket: p.bucket
      }
    });
    // Public-read by default
    let headers = {
      CacheControl:
        'public, max-age=' + (p.cacheSeconds || 60) + ', must-revalidate',
      Expires: moment()
        .add(p.cacheSeconds || 60, 'seconds')
        .toDate()
    };

    gutil.log('Using bucket "' + p.bucket + '"');
    return gulp
      .src('build/**/*')
      .pipe(
        rename(path => {
          path.dirname =
            (p.path.substr(-1) === '/' ? p.path : p.path + '/') + path.dirname;
        })
      )
      .pipe(awspublish.gzip())
      .pipe(publisher.publish(headers))
      .pipe(publisher.cache())
      .pipe(awspublish.reporter());
  };
}

// Check token
function confirmToken() {
  let s3 = new AWS.S3();

  return done => {
    let p = getPublishConfig();
    let config = getConfig();
    let key =
      (p.path.substr(-1) === '/' ? p.path : p.path + '/') + 'config.json';

    // Make sure we have something to compare
    if (!config.publishToken) {
      return done(
        new gutil.PluginError(
          'publish:check',
          'Unable to find publishToken in config.json. Run "gulp publish:token" to create a token.'
        )
      );
    }

    // If force
    if (argv.force) {
      gutil.log(gutil.colors.yellow('Forcing confirmation.'));
      return done();
    }

    // Get remote file
    s3.getObject(
      {
        Bucket: p.bucket,
        Key: key
      },
      (error, data) => {
        if (error && error.code === 'NoSuchKey') {
          gutil.log(
            gutil.colors.yellow(
              'Unable to find "' + key + '" on bucket "' + p.bucket + '".'
            )
          );
          return done();
        }
        else if (error) {
          return done(
            new gutil.PluginError('publish:check', error, { showStack: true })
          );
        }

        let c;
        try {
          c = JSON.parse(zlib.gunzipSync(data.Body).toString('utf-8'));
        }
        catch (e) {
          return done(
            new gutil.PluginError('publish:check', e, { showStack: true })
          );
        }

        if (c && c.publishToken && c.publishToken === config.publishToken) {
          gutil.log('Tokens match.');
          return done();
        }
        else {
          return done(
            new gutil.PluginError(
              'publish:check',
              'Tokens do not match, please make sure that this project should be deployed to "' +
                key +
                '" on bucket "' +
                p.bucket +
                '".  Or, use the --force flag to force the publish.'
            )
          );
        }
      }
    );
  };
}

// Open URL
function openURL() {
  return done => {
    let p = getPublishConfig();
    openurl.open(p.url);
    done();
  };
}

// Get publish config
function getPublishConfig() {
  let config = getConfig();
  return argv.production && config.publish.production
    ? config.publish.production
    : argv.staging && config.publish.staging
      ? config.publish.staging
      : argv.testing && config.publish.testing
        ? config.publish.testing
        : config.publish.default;
}

// Get config path
function getConfigPath() {
  let co = path.join(__dirname, '..', 'config.json');
  let cu = path.join(__dirname, '..', 'config.custom.json');

  if (fs.existsSync(cu)) {
    return cu;
  }
  else if (fs.existsSync(co)) {
    return co;
  }
  else {
    return undefined;
  }
}

// Get config
function getConfig() {
  let p = getConfigPath();
  return p ? require(p) : {};
}

// Exports
module.exports = {
  publish: publish,
  buildConfig: buildConfig,
  createToken: createToken,
  confirmToken: confirmToken,
  getConfigPath: getConfigPath,
  getConfig: getConfig,
  getPublishConfig: getPublishConfig,
  openURL: openURL
};
