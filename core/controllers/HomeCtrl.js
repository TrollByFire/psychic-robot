/**
 * @file HomeCtrl.js
 *
 * MVC Controller responsible for main site configuration and static files
 *
 */

var express = require('express');
var path = require('path');

/**
 * @name HomeCtrl
 *
 * Object which is responsible for serving static content
 */
var HomeCtrl = function(root)
{
    // Create a router to export to the
    var router = express.Router();

    this.Index = function(req, res)
    {
        res.sendFile(path.join(root, "/views/index.html"));
    }

    // Point the site index at the Index method
    router.get('/', this.Index);

    this.Router = router;
}

module.exports = HomeCtrl;
