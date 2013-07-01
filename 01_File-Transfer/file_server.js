var http = require('http');
var fs = require('fs');

var port = 1786;
var host = "127.0.0.1";

var server = http.createServer(function(request,response){

	response.write("\n\n0% <");	

	var writeStream = fs.createWriteStream('temp_file.webm');

	var fileSize = request.headers['content-length'];
	var currentSize = 0;

	request.pipe(writeStream);

	request.on("end",function(){

		response.write("> 100%\n\n");	
		response.end("File upload complete!");
	});

	request.on("data",function(chunk){

		currentSize += chunk.length;

		var progress = parseInt((currentSize/fileSize) * 100,10);
		//response.write("Progress: "+parseInt(progress,10)+"%\n");	

		if(progress%2 ==0)
			response.write("=");
	});	

});

server.listen(port,host,function(){
	console.log("Listening on "+host+" : "+port);
});
