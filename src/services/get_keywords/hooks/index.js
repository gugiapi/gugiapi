'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const process = require('./process_new');

exports.before = {
  all: [],
  find: [],
  get: [process()],
  create: [process({})],
  update: [],
  patch: [],
  remove: []
};

exports.after = {
  all: [],
  find: [],
  get: [process()],
  create: [process({})],
  update: [],
  patch: [],
  remove: []
};
