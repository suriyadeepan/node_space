// use of https module instead of http
var https = require('https');

// user name ( get the user's repos list )
var usrName = "rps-depan";

// a json file to send to the server
var options = {
	host : 'api.github.com',
	path : '/users/' + usrName + '/repos',
	method : 'GET',
	"User-Agent" : 'rps-depan' 
};

// send a request
var request = https.request(options, function(response){

	// whole content of response
	var body = '';

	response.on("data",function(chunk){

		body += chunk.toString('utf8');
	});

	response.on("end",function(){

		console.log(body);
	});
});

// End the request
request.end();

	
