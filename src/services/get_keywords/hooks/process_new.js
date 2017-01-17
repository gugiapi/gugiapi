'use strict';

// src/services/message/hooks/process.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

module.exports = function(options) {
  return function(hook) {
		console.log('text: ' + hook.data);
		//var nodent = require('nodent')();
		const dse = require('dse-driver');
		const client = new dse.Client({
			contactPoints: ['34.196.115.14'],
			graphOptions: { name: 'gugi' }
		});
		
		const query = 'g.V().hasLabel("keyword").has("display", Search.tokenRegex(".*(' + hook.data.text +').*")).valueMap()';
		return new Promise(function(resolve, reject){client.executeGraph(query, function (err, result) {
			if (err) {
				reject(err);
			}
			console.log('q ' + query);
			console.log(JSON.stringify(result));
			resolve(result);
			//console.log(hook.data)
		})}).then(function(res){
			console.log('res \n' + JSON.stringify(res));
			hook.data = res;
		});
		
			// Override the original data
			//hook.data = {
				// Set the user id
			//  results: veretex
			//};
	};
};
