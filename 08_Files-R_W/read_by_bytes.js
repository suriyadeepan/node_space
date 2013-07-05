fs = require('fs');

// function signature
// fs.open(path, flags, [mode], callback)
fs.open('paths.js','r',function(err,fd){

	if(err){
		console.log("Error occured!");
	}else{
		console.log("Error did not occur! how weird!");
		console.log("File named paths.js opened!");
	}

	// we hav opened a file , got a file descriptor
	//  lets read it!
	buff = new Buffer(100);
 	bOffset = 0;
	bLenght = buff.length;
	filePos = 0;

	// function signature	
	// fs.read(fd, buffer, offset, length, position, callback)
	fs.read(fd,buff,bOffset,bLenght,filePos,function(err,readBytes){

		if(err)
			console.log("Error in reading!");
		else{
			if(readBytes > 0)
				console.log("Read(past) bytes: "+buff.slice(0,readBytes));
		}
	});

});
