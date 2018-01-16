/**
 * Acceptance test that check things like load, performance,
 * availability.
 */

// Available from Jest
// https://facebook.github.io/jest/docs/en/api.html#content
// https://facebook.github.io/jest/docs/en/expect.html#content

// Implicit dependencies
/* global jasmine, beforeAll, afterAll, describe, it, expect, fail */

// Test dependencies
const fs = require('fs');
const path = require('path');
const http = require('http');
const _ = require('lodash');
const lighthouse = require('lighthouse');
const chromeLauncher = require('lighthouse/chrome-launcher/chrome-launcher');
const chromeRemote = require('chrome-remote-interface');
const debug = require('debug')('tests:acceptance:basics');

// Test parts
const localApp = http.createServer(localHTTP);
const localPort = 7234;
const chromePort = 9222;
let browser;

// This seems to take too long
jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000;

// Do before
beforeAll((done) => {
  // Start local server
  localApp.listen(localPort);

  // Start browser instance
  return launchBrowser('http://127.0.0.1:' + localPort + '/index.html',
    {
      port: chromePort,
      chromeFlags: [
        '--headless',
        '--disable-gpu',
        '--window-size=1280x1696'
      ]
    },
    { output: 'json' }
  )
  .then((results) => done(results))
  .catch((error) => {
    browser.kill();
    done(error);
  });
});

// Do before
afterAll(() => {
  localApp.close();
  browser.kill();
});

// Tests
describe('loading', () => {

  // Make sure no errors show up in the console
  it('should load without errors', () => {
    return connectToBrowser({
      url: 'http://127.0.0.1:' + localPort + '/index.html',
      runtime: {
        consoleAPICalled: (e) => {
          if (e.type === 'error') {
            fail('An error was thrown in the console.');
            debug(e);
          }
        }
      }
    }).then((results) => {
      expect(results).toBeTruthy();
    })
    // Not sure why this needs to be manually done
    .catch((e) => {
      throw e;
    });
  });

  // Performance
  it('should have a decent performance', () => {
    return lighthouse('http://127.0.0.1:' + localPort + '/index.html',
      { output: 'json' },
      require('lighthouse/lighthouse-core/config/perf.json')
    )
    .then((results) => {
      _.each(results.audits, (a) => {
        //debug(a.name);
        //debug(a.details);
        if (_.isNumber(a.score)) {
          expect(a.score >= 75).toBe(true);
        }
      });
    })
    .catch((error) => {
      throw error;
    });
  });
});


// Serve files
function localHTTP(request, response) {
  request.url = request.url || 'index.html';
  let lookup = path.join(__dirname, '..', '..', 'build', request.url);

  fs.readFile(lookup, function(error, data) {
    if (error) {
      response.writeHead(404);
      response.end('File not found!');
      return;
    }

    response.writeHead(200);
    response.end(data);
  });
}

// Startup Chrome
function launchBrowser(url, launcher = {}, options = {}, config = null) {
  // Launch an instance
  return chromeLauncher.launch(launcher).then((chrome) => {
    browser = chrome;

    // Get port from running instance
    options.port = chrome.port;

    // Make lighthouse connection to instance
    return lighthouse(url, options, config);
  });
}

// Connect to browser via remote debugger and run tests
async function connectToBrowser(options) {
  // Await-able polling to make sure page is loaded.
  let loaded = false;
  const loading = async (startTime = Date.now()) => {
    if (!loaded && Date.now() - startTime < jasmine.DEFAULT_TIMEOUT_INTERVAL * 2) {
      await sleep(1000);
      await loading(startTime);
    }
  };

  // Get a tab and load
  const [tab] = await chromeRemote.List();
  const client = await chromeRemote({
    port: browser.port,
    target: tab
  });

  // Get debugger parts
  const { Network, Page, Log, CSS, DOM, Runtime } = client;

  // Mark page as loaded
  Page.loadEventFired(() => {
    loaded = true;
  });

  // Add any test handlers
  if (options.network && options.network.requestWillBeSent) {
    // https://chromedevtools.github.io/devtools-protocol/tot/Network/#event-requestWillBeSent
    Network.requestWillBeSent(options.network.requestWillBeSent);
  }
  if (options.log && options.log.entryAdded) {
    // https://chromedevtools.github.io/devtools-protocol/tot/Log/#type-LogEntry
    Log.entryAdded(options.network.entryAdded);
  }
  // This is where console.log statements will show up
  if (options.runtime && options.runtime.consoleAPICalled) {
    // https://chromedevtools.github.io/devtools-protocol/tot/Log/#type-LogEntry
    Runtime.consoleAPICalled(options.runtime.consoleAPICalled);
  }

  // Put together
  try {
    await Promise.all([
      Network.enable(),
      DOM.enable(),
      Runtime.enable(),
      Log.enable(),
      CSS.enable(),
      Page.enable(),
    ]);

    // Needed?
    //await Network.setCacheDisabled(true);

    // https://chromedevtools.github.io/debugger-protocol-viewer/tot/Page/#method-navigate
    await Page.navigate({ url: options.url });

    // Ensure page is loaded
    await loading();

    // TODO:
    // This is where tests could be run ?
  }
  catch (error) {
    await client.close();
    throw error;
  }

  // All done
  await client.close();

  return true;
}

// Promise timeout
function sleep (miliseconds = 1000) {
  return new Promise(resolve => setTimeout(() => resolve(), miliseconds));
}
