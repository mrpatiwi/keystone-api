const keystone = require('keystone');
const mongoose = require('mongoose');
const Promise = require('bluebird');

const config = require('./config');
const routes = require('./routes');

// Setup MongoDB driver
mongoose.Promise = Promise;
keystone.set('mongoose', mongoose);

// Load settings
keystone.init(config.init);

// Load your project's Models
keystone.import('models');

// Setup Express.js routes
keystone.set('routes', routes);

// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
  users: 'User',
});

module.exports = keystone;
