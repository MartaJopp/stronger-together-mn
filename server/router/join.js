var express = require('express');
var router = express.Router();
var poolModule = require('../modules/pool.js');
var pool = poolModule;
var tasks = [];
var pg = require('pg');



module.exports = router; //allows for other files to use