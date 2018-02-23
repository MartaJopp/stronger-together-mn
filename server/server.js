var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var bodyParser = require('body-parser'); // require body-parser
var joinRouter = require('./router/join.js'); // require taskRouter
var poolModule = require('./modules/pool.js');
var pool = poolModule;

app.use(bodyParser.urlencoded({ extended: true })); //bodyParser 

// static files
app.use(express.static('server/public'));

// database folder that it is connecting to join router
app.use('/join', joinRouter);

// start server
app.listen(port, function () {
    console.log('listening on port', port);
}); // end start server