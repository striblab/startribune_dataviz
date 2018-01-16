/**
 * Utility functions.
 */

/* global window, document, pym, _ */
'use strict';

// Dependencies
import queryString from 'query-string';

// If smooth scrolling is needed
//import smoothscroll from 'smoothscroll-polyfill';

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
    this.options.useView = this.options.useView === undefined ? true : this.options.useView;
    this.options.views = this.options.views || {
      develop: /localhost.*|127\.0\.0\.1.*/i,
      staging: /staging/i
    };

    // Read in query params
    this.parseQuery();

    // Set the view
    this.setView();

    // Smoothscroll polyyfill
    //smoothscroll.polyfill();

    // Enable pym
    if (this.options.pym) {
      this.pym = !_.isUndefined(window.pym) ? new pym.Child({ polling: 500 }) : undefined;
    }
  }

  // Set view (make note)
  setView() {
    if (this.options.useView) {
      let view ;
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
    catch(e) {
      this.embedded = true;
    }

    return this.embedded;
  }

  // Check for local storage
  hasLocalStorage() {
    if (!_.isUndefined(this.localStorage)) {
      return this.localStorage;
    }

    try {
      window.localStorage.setItem('test', 'test');
      window.localStorage.removeItem('test');
      this.localStorage = true;
    }
    catch(e) {
      this.localStorage = false;
    }

    return this.localStorage;
  }

  // Check for geolocation
  hasGeolocate() {
    return (window.navigator && 'geolocation' in window.navigator);
  }

  // Basic geolocation function
  geolocate(done) {
    if (this.hasGeolocate()) {
      window.navigator.geolocation.getCurrentPosition((position) => {
        done(null, { lat: position.coords.latitude, lng: position.coords.longitude });
      }, () => {
        done('Unable to find your position.');
      });
    }
    else {
      done('Geolocation not available');
    }
  }

  // Scroll to id
  goTo(id) {
    const el = _.isElement(id) ? id :
      id[0] && _.isElement(id[0]) ? id[0] :
        document.getElementById(id);

    if (!el) {
      return;
    }

    if (this.isEmbedded() && this.pym) {
      this.pym.scrollParentToChildEl(el);
    }
    else {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Google analytics page update
  // https://developers.google.com/analytics/devguides/collection/analyticsjs/single-page-applications
  gaPageUpdate(path) {
    path = path ? path : document.location.pathname +
      document.location.search + document.location.hash;

    if (window.ga) {
      window.ga('set', 'page', path);
      window.ga('send', 'pageview');
    }
  }
}

// Export a generator for the class.
export default (options) => {
  return new Util(options);
};
