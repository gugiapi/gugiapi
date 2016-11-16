'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const process = require('./process');

exports.before = {
  all: [],
  find: [],
  get: [],
  create: [process()],
  update: [],
  patch: [],
  remove: []
};

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [process()],
  update: [],
  patch: [],
  remove: []
};
