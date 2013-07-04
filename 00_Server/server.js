var http = require("http");

console.log("Starting!");

// set host and port
var host = "10.0.0.5";
var port = 27017;

// create a server with http.createServer() method
var server = http.createServer(function(request,response){

	// get url of request from client and print it!
	console.log("Requested URL: "+request.url);

	// set options for writing
	// content type, 200 -> "no error" id
	response.writeHead(200,{"Content-type":"text/plain"});
	
	// write a response
	response.write("Guys! this is a response from server running @ "+host+":"+port);
	
	// end of response
	response.end();

});

// now lets make the server listen to a port
server.listen(port,host,function(){

	console.log("Listening on "+host+":"+port);

});


	

