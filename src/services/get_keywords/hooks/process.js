'use strict';

// src/services/message/hooks/process.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

module.exports = function(options) {
  return function(hook) {
	var Promise = require('promise');
	const dse = require('dse-driver');
	const client = new dse.Client({
	  contactPoints: ['34.196.115.14'],
	  graphOptions: { name: 'gugi' }
	});
	
	var veretex;
    var callback = function(veretex) { return veretex;}
	const query = 'g.V().hasLabel("keyword").has("display", Search.tokenRegex(".*(' + hook.data.text +').*")).valueMap()';
	//client.executeGraph(query, function (err, result) {
	//	console.log(err)
	//	const veretex = result.toArray()
	//	callback(veretex)
	//});

	Promise.resolve(client.executeGraph(query))
    // Override the original data
    hook.data = {
      // Set the user id
      results: veretex
    };
  };
};
