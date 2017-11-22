// === Server Flags ===
var debugMode = false;

// === Initilize Express ===
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session')
var app = express();

// === Import Necessary Functionality ==
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/terminal'));
app.use(session({secret: '1234567890QWERTY', resave: false, saveUninitialized: true}));

// === Start Server ===
const server = app.listen(process.env.PORT || 3000, function() {
  const port = server.address().port;
    console.log("Wonderful server is listening on port " + port);
});

// === Create Console ===
var con = require('./console/console.js');

// === Respond to AJAX calls ===
app.post('/console', function(req,res){
	debug(req.body.input);
	res.json({response: con.input(req.body.input, req.session.id)});
});

// === Helper Functions ===
function debug(debugText){
	if(debugMode){
		console.log(debugText);
	}
}
