/**
 *
 */

/**
 * Libraries
 */
var express = require('express');



/**
 * Configuration:
 *
 * Load config variables from config file and from ENV variables
 */
var config = require('./config');
var web_root = __dirname + config.web_root;
var port = config.port;

/**
 * Module globals
 */
var server = express();         // Express web server
var root = express.Router();    // Router to handle the site root

// TODO: Point the default route (site root) at the index.html file

// TODO: Mount the site root router on the site root

// Start the server on the configured port

server.listen(port);

// Export the module so it can be used within other Node.js applications
module.exports = server;
