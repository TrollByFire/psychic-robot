/**
 *
 */

/**
 * Libraries
 */
var express = require('express');



/**
 * Configuration:
 * TODO: Move configuration into external json file
 */
var web_root = __dirname + "/public";
var port = 3000;

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
