'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('add_bot service', function() {
  it('registered the add_bots service', () => {
    assert.ok(app.service('add_bots'));
  });
});
