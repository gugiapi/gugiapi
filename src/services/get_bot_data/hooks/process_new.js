'use strict';

// src/services/message/hooks/process.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

module.exports = function(options) {
  return function(hook) {
		if (hook.data.id == undefined) {return hook}
		console.log('text: ' + hook.data);
		//var nodent = require('nodent')();
		const dse = require('dse-driver');
		const client = new dse.Client({
			contactPoints: ['34.196.115.14'],
			graphOptions: { name: 'gugi' }
		});
		
		const query = 'g.V().hasLabel("bot").has("uuid", "' + hook.data.id + '").as("bot").outE().inV().as("template").outE().inV().as("keyword").simplePath().path().select("bot","template","keyword").by(valueMap())';
		return new Promise(function(resolve, reject){client.executeGraph(query, function (err, result) {
			if (err) {
				reject(err);
			}
			console.log('q ' + query);
			console.log(JSON.stringify(result.toArray()));
			resolve(result.toArray());
			//console.log(hook.data)
		})}).then(function(res){
			console.log('res \n' + JSON.stringify(res));
			hook.data = res;
		});
		
	};
};
