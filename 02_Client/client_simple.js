var http = require("http");

var options = {
	host : "127.0.0.1",
	port : 1786,
	path : "/",
	method : "POST"};

var request = http.request(options,function(response){

	response.on("data",function(data){
		console.log(data.toString());
	});

});


request.write("Some Request!");

request.end();
