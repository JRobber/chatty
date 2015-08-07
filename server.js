'use strict';

//run npm init on the command line

//run npm install --save express on the command line

// Here in the code add these lines of code to get express started:
// var express = require('express');
var express = require('express');
var bodyParser = require('body-parser');



// var app = express();
var app = express();

app.use(bodyParser.json());

//This is how you do headers
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'OPTIONS', 'GET', 'POST');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With , Content-Type, Accept');
    next();
});

var messages = ["DM5 Rocks!", "I can node", "Dev 4 life yo"];
//Step 8 Goes here:
app.get('/', function(request, sendBackGuyThingyPostman){
	sendBackGuyThingyPostman.send(JSON.stringify(messages));
});

//Step 9:
//run npm install body-parser --save on command line
//require it like you did express on line 9
//add app.use(bodyParser.json()); after you make your epxress app
//on your app listen for a post request on an empty url
app.post('/', function(reqie, respie){
	//Inside your listening function for post get the body out 
	// and add it to your messages 
	var newMessage = reqie.body.message;
	messages.push(newMessage);
	
	respie.send("It worked");
});

//Example of a body we're getting
// {
// 	"message": "We are winners"
// }

//Step 11: add a put listener on api/person/:id
app.put('/api/person/:id', function(req, res){
	var ourId = req.params.id; //req.params.name; req.params.favFood;
	res.send("Your id is " + ourId);
})
//in the put listener get a parameter out of hte url
//parameter name is :id
//The return "Your id is " + the id you got out of the url



// start the app listening: app.listen(8080);
app.listen(8080);























// // var messages = [{username: 'Philipp Schulte', message: 'This is a test!'}];
// var messages = [];

// var http = require('http');

// //process.argv is the list of arguments in node
// var port = process.argv[2] || 3000;


// http.createServer(function(req, res) {
// 	switch (req.method) {
// 		case 'GET':
// 		    res.writeHead(200, {
// 		      	'Connection': 'close',
// 		      	'Content-Type': 'application/json',
// 		     	'Access-Control-Allow-Origin': '*'
// 		    });
// 		    res.end(JSON.stringify(messages));
// 			break;
// 		case 'POST':
// 	       	var postData = '';
// 	       	req.on('data', function(chunk) {
// 	        	postData += chunk.toString();
// 	        });    
// 		    req.on('end', function() {
// 		      	//console.log(JSON.parse(postData));
// 		      	var msg = JSON.parse(postData);
// 		      	var timestamp = new Date();
// 		      	msg.timestamp = timestamp;
// 		      	messages.push(msg);
// 		     	res.writeHead(200, {
// 		        	'Connection': 'close',
// 		       		'Content-Type': 'application/json',
// 		        	'Access-Control-Allow-Origin': '*'
// 		    	});
// 		    	res.end(JSON.stringify(messages));
// 		    });
// 			break;
// 		case 'OPTIONS': 
// 			res.writeHead(200, {
// 	  			'Connection': 'close',
// 	  			'Content-Type': 'application/json',
// 	 			'Access-Control-Allow-Origin': '*',
// 	 			'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
// 	  			'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
// 			});
// 			res.end();
// 			break;
// 	}

// }).listen(port);