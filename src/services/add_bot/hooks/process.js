'use strict';

// src/services/message/hooks/process.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

module.exports = function(options) {
  return function(hook) {

	const dse = require('dse-driver');
	const client = new dse.Client({
	  contactPoints: ['34.196.115.14'],
	  graphOptions: { name: 'gugi' }
	});

	const query = 'g.addV(label, vertexLabel, "uuid", uid, "display", displayName, "Type", typ, "subtype", stype, "photo", ph, "token", tok)';
	client.executeGraph(query, { vertexLabel: 'bot', uid: "bot_" + hook.data.name + "_"+hook.data.bot_token, displayName: "" + hook.data.name, typ: "" + hook.data.type, stype: 'sub', ph: "" +hook.data.photo, tok: ""+hook.data.bot_token}, function (err, result) {
		console.log(err)
		const vertex = result.first();
		console.log(vertex.properties.uuid[0].value);
	});
	hook.data = {id: "bot_" + hook.data.name + "_"+hook.data.bot_token}
  };
};
