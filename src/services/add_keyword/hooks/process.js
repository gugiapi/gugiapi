'use strict';

// src/services/message/hooks/process.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

module.exports = function(options) {
  return function(hook) {

    // Override the original data
    hook.data = {
      // Set the user id
      id: "keyword_" + hook.data.type + "_"+hook.data.keyword
    };
  };
};
