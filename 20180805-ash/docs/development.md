# Development

Development tasks are managed with [Gulp](http://gulpjs.com/). Use the following to get a full list of all available tasks:

    gulp tasks

## Install

The following are global prerequisites and may already be installed.

1.  Install [Node.js](https://nodejs.org/en/).
    * (on Mac) Install [homebrew](http://brew.sh/) then run: `brew install node`
1.  Install the [Gulp](http://gulpjs.com/) command line: `npm install gulp-cli -g`

The following should be performed for initial and each code update:

1.  Install Node dependencies: `npm install`

## Local

To run a local web server that will auto-reload with [Browsersync](https://browsersync.io/), watch for file changes and re-build:

    gulp develop

There are some arguments that can alter the local server behavior, specifically if you are publishing through the CMS; you can run these in multiple Terminal tabs for different development needs:

* Proxy through a local `news-platform` instance; if you don't know what that is, it is likely you don't have it setup. `gulp develop --cms`
  * For the mobile version of the site, use `gulp develop --cms --mobile`.
  * If your project has multiple pages, you can target a specific article ID with `gulp develop --cms --cms-id=123456`.

There are number of commands via Gulp that can be helpful. Use the following to get a list of the available commands:

    gulp tasks

## Build

All relevant parts are compiled into the `build/` folder. The default complete build can be done with `gulp build`

## Directories and files

See [docs/files-directories.md](./files-directories.md).

## Dependencies and modules

Depending on what libraries or dependencies you need to include there are a few different ways to get those into the project.

* **JS**
  * Include it with `npm`.
    * For instance: `npm install --save awesome-lib`
    * This can then be included in the application, with something like:
      ```js
      import awesome from "awesome-lib";
      awesome.radical();
      ```
  * For dependencies that are very common and are available through a trusted CDN, you can include it in `config.json`. Consider using the [StribLab static libs CDN](https://github.com/striblab/static-libs).
    * For instance:
      ```js
      "js": {
        "globals": [
          "https://static.startribune.com/assets/libs/pym.js/1.3.2/pym.v1.min.js"
        ]
      }
      ```
    * In your application, make sure to add a comment like the following so that linters will know that the dependency is already loaded.
      ```js
      /* global Pym */
      ```
    * **IMPORTANT** Make sure to always use a specific version from a CDN; do not use _latest_ or something similar.
    * For testing, these need to be available and should be added to `tests/global.js`
  * For local modules that you have written yourself, you can use the ES6 module syntax.
    * For instance, say you have created a `utils.js` module file, just use a relative path to include it:
      ```js
      import utilsFn from "./utils.js";
      let utils = utilsFn({});
      ```
* **CSS**
  * Include it with `npm`.
    * For instance: `npm install --save normalize-scss`
    * This can then be included in the application, with something like:
      ```css
      @import "normalize-scss/sass/_normalize.scss";
      ```
  * For dependencies that are very common and are available through a trusted CDN, you can include it in `config.json`. Consider using the [StribLab static libs CDN](https://github.com/striblab/static-libs).
    * For instance:
      ```js
      "css": {
        "globals": [
          "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        ]
      }
      ```
    * **IMPORTANT** Make sure to always use a specific version from a CDN; do not use _latest_ or something similar.
