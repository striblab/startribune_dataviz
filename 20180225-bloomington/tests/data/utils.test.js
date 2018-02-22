/**
 * Test for front-end app utils.js
 */

// Available from Jest
// https://facebook.github.io/jest/docs/en/api.html#content
// https://facebook.github.io/jest/docs/en/expect.html#content

// Implicit dependencies
/* global describe, it, expect */

// Dependenciest to test
let utils = require('../../data/lib/data-utils.js');

// Test
describe('utils', () => {
  it('should load', () => {
    expect(utils).toBeTruthy();
  });
});
