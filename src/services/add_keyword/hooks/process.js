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

	const query = 'g.addV(label, vertexLabel, "uuid", uid, "display", displayName, "Type", typ, "subtype", stype)';
	client.executeGraph(query, { vertexLabel: 'keyword', uid: "keyword_" + hook.data.type + "_"+hook.data.keyword, displayName: "" + hook.data.keyword, typ: "" + hook.data.type, stype: 'sub'}, function (err, result) {
		console.log(err)
		const vertex = result.first();
		console.log(vertex.properties.uuid[0].value);
	});
    // Override the original data
    hook.data = {
      // Set the keyword id
      id: "keyword_" + hook.data.type + "_"+hook.data.keyword
    };
  };
};
