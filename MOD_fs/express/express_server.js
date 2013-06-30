var fs = require("fs");

// extract server configs from json file
var server_config = JSON.parse(fs.readFileSync("express_server_config.json"));
var port = server_config.port;
var host = server_config.host;

var express = require("express");

// create an express server
var app = express();

// Express splits up the request from client
//  handles each path (request) with individual callback function


// set the reference path
app.use(app.router);
// set static pages location
app.use(express.static(__dirname));


// respond to file requests
//  PATH => "/"
app.get("/",function(request,response){
	response.send("Dummy Response!");
});

// handling a different request
app.get("/key/:text", function(req,resp){
	resp.send(req.params.text);
});

// get an user id request from the client
//  and deliver appropriate response
var users = {
	1 : {
		"name" : "suriya",
		"mob"  : "43556676765"
	},

	2 : {
		"name" : "madi",
		"mob"  : "nil"
	}
};

app.get("/usr/:id",function(req,resp){
	
	var user = users[req.params.id];

	if(user)
	resp.send("Name: "+user.name);

	else
	resp.send("***Error! Check the ID...",404);
	
});

// making the server listen
app.listen(port,host);

