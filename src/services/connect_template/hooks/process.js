'use strict';

// src/services/message/hooks/process.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

module.exports = function(options) {
  return function(hook) {
	const dse = require('dse-driver');
	const client = new dse.Client({
	  contactPoints: ['54.146.140.140'],
	  graphOptions: { name: 'gugi' }
	});

	const query = 'v1 = g.V().hasLabel("bot").has("uuid","'+hook.data.source_id+'").next(); v2 = g.V().hasLabel("template").has("uuid", "'+hook.data.target_id+'").next(); v1.addEdge("has_template", v2)';
	client.executeGraph(query, function (err, result) {
		console.log(err)
		//const edge = result.first();
		//console.log(edge.label);
	});
    // Override the original data
    hook.data = {
      // Set the user id
      info: "Added connection between " + hook.data.source_id + " and "+ hook.data.target_id
    };
  };
};
