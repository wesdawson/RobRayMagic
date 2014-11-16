// server.js

// modules =================================================
var path           = require('path');		// From amjorgen
var logger 		   = require('morgan');     // From amjorgen
var http 		   = require('http'); 	 	// From amjorgen
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override'); 

// Database
mongoose.connect('mongodb://localhost/wesdawson'); //From amjorgen

// configuration ===========================================
	
// config files
var db = require('./config/db');

var port = process.env.PORT || 8080; // set our port
// mongoose.connect(db.url); // connect to our mongoDB database (uncomment after you enter in your own credentials in config/db.js)

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

app.use(logger('dev'));									   // From amjorgen
app.use(bodyParser.urlencoded({extended: false}));		   // From amjorgen
app.use(express.static(path.join(__dirname, '/public')));  // From amjorgen

//Schema											   // From amjrogen
var Schema = mongoose.Schema;
var Contact = new Schema({							   // From amjorgen
name: {type: String, required: true},
company: {type: String, required: false},			   // From amjorgen
email: {type: String, required: true},
comment: {type: String, required: true}				   // From amjorgen
});
var ContactModel = mongoose.model('Contact', Contact); // From amjorgen

// routes ==================================================
require('./app/routes')(app, express, path); // configure our routes

// From amjorgen ===========================================
app.post('/api/contacts', function (req, res){
	var contact;
	contact = new ContactModel({
		name: req.body.name,
		company: req.body.company,
		email: req.body.email,
		comment: req.body.comment
	});
	contact.save(function (err) {
		if (!err) {
			return console.log("created");
		} else {
			return console.log(err);
		}
	});
	res.sendfile('./public/views/index.html');
});
// ==========================================================


// start app ===============================================
app.listen(port);										// startup our app at http://localhost:8080
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app