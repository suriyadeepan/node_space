var gpio = require("pi-gpio");
var fs = require("fs");

// extract server configs from json file
var server_config = JSON.parse(fs.readFileSync("express_server_config.json"));
var port = server_config.port;
var host = server_config.host;

// set GPIO pin
var pin;


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

app.get("/on/:text", function(req,resp){

	pin = parseInt(req.params.text,10);
	writeToPin(pin,1);
	resp.end("pin " + pin +" on");

});

app.get("/off/:text",function(req,resp){

	pin = parseInt(req.params.text,10);
	writeToPin(pin,0);
	resp.end("pin "+pin +" off");

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

function writeToPin(pinNum,status){
	gpio.open(pinNum, "output", function(err) {       
        gpio.write(pinNum, status, function() {            
        gpio.close(pinNum);                       
    });
});

}

