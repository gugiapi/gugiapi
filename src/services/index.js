'use strict';
const addBot = require('./add_bot');
const getKeywords = require('./get_keywords');
const getBotData = require('./get_bot_data');
const addKeyword = require('./add_keyword');
const connectKeyword = require('./connect_keyword');
const getTemplates = require('./get_templates');
const addTemplate = require('./add_template');
const connectTemplate = require('./connect_template');
const addPage = require('./add_page');
const recommendBot = require('./recommend_bot');
const processPage = require('./process_page');

const message = require('./message');
const authentication = require('./authentication');
const user = require('./user');

module.exports = function() {
  const app = this;


  app.configure(authentication);
  app.configure(user);
  app.configure(message);
  app.configure(addBot);
  app.configure(getKeywords);
  app.configure(getBotData);
  app.configure(connectKeyword);
  app.configure(addKeyword);
  app.configure(getTemplates);
  app.configure(addTemplate);
  app.configure(connectTemplate);
  app.configure(addPage);
  app.configure(recommendBot);
  app.configure(processPage);
  
};
