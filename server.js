// server.js


// modules =================================================
var express        = require('express');
var nodemailer	   = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');
var app            = express();
var mongoose       = require('mongoose');
var logger	       = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

var http = require('http');
var path = require('path'); 
var router = express.Router();



// configuration ===========================================
var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport("SMTP",{
   service: "Gmail",
   auth: {
       user: "wesley.s.dawson@gmail.com",
       pass: "Wd654654"
   }
});

// var mailOptions = {
//    from: $scope.user.email, // sender address
//    to: "magicrobertray@Gmail.com", // list of receivers
//    subject: $scope.user.name, // Subject line
//    text: $scope.user.body // plaintext body
// };

console.log('SMTP Configured');

	
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


// routes ==================================================
require('./app/routes')(app); // configure our routes



// start app ===============================================
app.listen(port);										// startup our app at http://localhost:8080
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app