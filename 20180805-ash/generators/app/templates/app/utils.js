/**
 * Utility functions.
 */

/* global window, document, pym */
'use strict';

// Dependencies
import queryString from 'query-string';
import _ from 'lodash';

// Util class
class Util {
  /**
   * Constructor
   * @param  {object} options Object with the following keys:
   *                          - pym: Enable pym.js, defaults to true
   *                          - views: Object describing views
   *                          - useView: Boolean whether to show view, defaults
   *                            to true.
   * @return {undefined}
   */
  constructor(options) {
    this.options = options || {};

    // Defaults
    this.options.pym = this.options.pym === undefined ? true : this.options.pym;
    this.options.useView =
      this.options.useView === undefined ? true : this.options.useView;
    this.options.views = this.options.views || {
      develop: /localhost.*|127\.0\.0\.1.*/i,
      staging: /staging/i
    };

    // Read in query params
    this.parseQuery();

    // Set the view
    //this.setView();

    // Enable pym
    if (this.options.pym) {
      this.pym = !_.isUndefined(window.pym)
        ? new pym.Child({ polling: 500 })
        : undefined;
    }
  }

  // Set view (make note)
  setView() {
    if (this.options.useView) {
      let view;
      _.find(this.options.views, (match, v) => {
        view = v;
        return window.location.href.match(match) ? v : undefined;
      });

      if (view) {
        let div = document.createElement('div');
        let body = document.getElementsByTagName('body')[0];
        div.className = 'site-view site-view-' + view;
        body.insertBefore(div, body.childNodes[0]);
      }
    }
  }

  // Get query params and adjust as needed
  parseQuery() {
    this.query = queryString.parse(document.location.search);

    // Adjust options
    if (this.query.pym && this.query.pym === 'true') {
      this.options.pym = true;
    }
  }

  // Super basic deep clone
  deepClone(data) {
    return JSON.parse(JSON.stringify(data));
  }

  // Simple check to see if embedded in iframe
  isEmbedded() {
    if (!_.isUndefined(this.embedded)) {
      return this.embedded;
    }

    try {
      this.embedded = window.self !== window.top;
    }
    catch (e) {
      this.embedded = true;
    }

    return this.embedded;
  }

  // Check for local storage
  hasLocalStorage() {
    if (!_.isUndefined(this.localStorage)) {
      return this.canLocalStorage;
    }

    try {
      window.localStorage.setItem('test', 'test');
      window.localStorage.removeItem('test');
      this.canLocalStorage = true;
    }
    catch (e) {
      this.canLocalStorage = false;
    }

    return this.canLocalStorage;
  }

  // Check for geolocation
  hasGeolocate() {
    if (_.isUndefined(this.canGeolocate)) {
      this.canGeolocate = window.navigator && 'geolocation' in window.navigator;
      // Unfortunately HTTPS is needed, but in some browsers,
      // the API is still available.  We could run the API, but then the user
      // gets a dialog.  :(
    }

    return this.canGeolocate;
  }

  // Basic geolocation function
  geolocate(done, watch = false) {
    return new Promise((resolve, reject) => {
      if (this.hasGeolocate()) {
        // iphone acts weird sometimes about this.  This is some hacky way
        // to ensure it works ok, but who knows.
        // https://stackoverflow.com/questions/3397585/navigator-geolocation-getcurrentposition-sometimes-works-sometimes-doesnt
        window.navigator.geolocation.getCurrentPosition(
          function() {},
          function() {},
          {}
        );

        this.geolocateWatchID = window.navigator.geolocation[
          watch ? 'watchPosition' : 'getCurrentPosition'
        ](
          position => {
            resolve({
              lat: position.coords.latitude,
              lng: position.coords.longitude
            });
          },
          error => {
            this.hasGeolocate = false;
            reject(error ? error : 'Unable to find your position.');
          },
          { maximumAge: 5000, timeout: 50000, enableHighAccuracy: true }
        );
      }
      else {
        reject('Geolocation not available');
      }
    });
  }

  // Stop geolocation
  stopGeolocate() {
    if (this.geolocateWatchID && this.hasGeolocate()) {
      window.navigator.geolocation.clearWatch(this.geolocateWatchID);
    }
  }

  // Scroll to id.  By default, we use the native scrollIntoView,
  // but it is not widely supported and not good polyfills exists,
  // specifically ones that can offset.  So, if jQuery and the
  // scrollTo function is available we use that.
  // https://github.com/flesler/jquery.scrollTo
  goTo(id, parent, options = {}) {
    const el = _.isElement(id)
      ? id
      : id[0] && _.isElement(id[0]) ? id[0] : document.getElementById(id);
    let $parent = window.$
      ? _.isUndefined(parent) ? window.$(window) : window.$(parent)
      : undefined;
    options.duration = options.duration || 1250;

    if (!el) {
      return;
    }

    if (this.isEmbedded() && this.pym) {
      this.pym.scrollParentToChildEl(el);
    }
    else if ($parent && window.$ && window.$.fn.scrollTo) {
      $parent.scrollTo(window.$(el), options);
    }
    else {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Round number
  round(value, decimals = 2) {
    return _.isNumber(value)
      ? Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals)
      : value;
  }

  // Test for android phone
  isAndroid() {
    if (!_.isBoolean(this.agentAndroid)) {
      this.agentAndroid =
        window.navigator &&
        window.navigator.userAgent &&
        window.navigator.userAgent.match(/android/i);
    }

    return this.agentAndroid;
  }

  // Test for ios
  isIOS() {
    if (!_.isBoolean(this.agentIOS)) {
      this.agentIOS =
        window.navigator &&
        window.navigator.userAgent &&
        window.navigator.userAgent.match(/iphone|ipad/i);
    }

    return this.agentIOS;
  }

  // Test for windows phone
  isWindowsPhone() {
    if (!_.isBoolean(this.agentWindowsPhone)) {
      this.agentWindowsPhone =
        window.navigator &&
        window.navigator.userAgent &&
        window.navigator.userAgent.match(/windows\sphone/i);
    }

    return this.agentWindowsPhone;
  }

  // Check basic mobile (assume ios or android)
  isMobile() {
    return this.isAndroid() || this.isIOS() || this.isWindowsPhone();
  }

  // Google analytics page update
  // https://developers.google.com/analytics/devguides/collection/analyticsjs/single-page-applications
  gaPageUpdate(path) {
    path = path
      ? path
      : document.location.pathname +
        document.location.search +
        document.location.hash;

    if (window.ga) {
      window.ga('set', 'page', path);
      window.ga('send', 'pageview');
    }
  }
}

// Export a generator for the class.
export default options => {
  return new Util(options);
};
