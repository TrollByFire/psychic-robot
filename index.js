/**
 * @file index.js
 *
 * Contains the application's entry point.
 *
 */

/**
 * Libraries
 */
var express = require('express');
var path = require('path');
var HomeCtrl = require('./core/controllers/HomeCtrl');

/**
 * Configuration:
 *
 * Load config variables from config file and from ENV variables
 */
var config = require('./config');
var web_root = path.join(__dirname, config.web_root);
var port = config.port;

/**
 * Module globals
 */
var server = express();         // Express web server

// Create a new HomeCtrl object and initialize its root directory
var Home = new HomeCtrl(web_root);

// Mount the default route to the Home controller's router
server.use('/', Home.Router);

// Start the server on the configured port
server.listen(port);

// Export the module so it can be used within other Node.js applications
module.exports = server;
