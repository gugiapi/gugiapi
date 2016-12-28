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
	client.executeGraph(query, { vertexLabel: 'template', uid: "template_" + hook.data.type + "_"+ hook.data.template, displayName: "" + hook.data.template, typ: "" + hook.data.type, stype: 'sub'}, function (err, result) {
		console.log(err)
		const vertex = result.first();
		console.log(vertex.properties.uuid[0].value);
	});
    // Override the original data
    hook.data = {
      // Set the template id
      id: "template_" + hook.data.type + "_" + hook.data.template
    };
  };
};
