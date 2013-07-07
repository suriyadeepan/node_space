var http = require('http');
var utils = require('util');
var fs = require('fs');

options = {
		'port' : 80,
		'host' : 'www.google.co.in',
		'path' : '/index.html',
		'method' : 'GET'
       	}

ws = fs.createWriteStream('google-response.html');

/* shortcute to perform GET request
 http.get(options,function(res){

	console.log("Response: "+res.statusCode);
});*/


// use HTTP request to perform GET request
http.get(options,function(res){
	
	// Status code of response
	//console.log("Response: "+res.statusCode);

	// lets get the headers from the response
 	//console.log("Headers: " + utils.inspect(res.headers));

	// pipe the response body to write stream (google-response.txt)
		res.pipe(ws)
	
}).end();

