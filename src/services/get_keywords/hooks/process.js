'use strict';

// src/services/message/hooks/process.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

module.exports = function(options, callback) {
  return function(hook) {
	//var nodent = require('nodent')();
	const dse = require('dse-driver');
	const client = new dse.Client({
	  contactPoints: ['34.196.115.14'],
	  graphOptions: { name: 'gugi' }
	});
	
	const query = 'g.V().hasLabel("keyword").has("display", Search.tokenRegex(".*(' + hook.data.text +').*")).valueMap()';
	Promise.resolve(client.executeGraph(query, function (err, result) {
		console.log(err)
		var veretex = result.toArray()
		//hook.data = veretex
		hook.data = {
			results: veretex
		};
		callback(veretex)
		//console.log(hook.data)
	}));
	
    // Override the original data
    //hook.data = {
      // Set the user id
    //  results: veretex
    //};
  };
};
