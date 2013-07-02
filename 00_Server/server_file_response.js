var http = require("http");
var fs = require("fs");

// get server configuration from config.json file
var server_config = JSON.parse(fs.readFileSync("server_config.json"));
var port = server_config.port;
var host = server_config.host;

console.log("Starting!");

// create a server
server = http.createServer(function(request,response){

	console.log("Request: "+request.url);

	// here the client requests for a file 
	//  the server reads a file and displays its contents
	var reqFileContents = fs.readFile("."+request.url,function(error,contents){

		if(error){
			response.writeHeader(404,{"Content-type":"text/plain"});
			response.end("Error! Check URL boss!");
		}else{
			response.writeHeader(200,{"Content-type":"text/plain"});
			response.write(contents);
			response.end();
		}
	});

});


// now lets make the server to listen on a port
server.listen(port,host,function(){

	console.log("Listening on "+host+":"+port);

});

// we need to watch the config file for changes
//  if server configurations like port or host is changed
//   we need to stop the server and restart it with new configs
fs.watchFile("server_config.json",function(current,previous){

	console.log("\n\n***Change in Config file detected!\nDEAR LORD! WE ARE DOOMED!\n");

	// get new configs
	server_config = JSON.parse(fs.readFileSync("server_config.json"));
	port = server_config.port;
	host = server_config.host;

	// shutdown the server
	server.close();

	// start the server with new configs
	server.listen(port,host,function(){
		console.log("Starting server with new configuration");
		console.log("Listening on "+host+":"+port+"\n");
	});

});

