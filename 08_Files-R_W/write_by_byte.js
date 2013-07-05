fs = require('fs');

fs.open('dummy_text_file.txt','a',function(err,fd){
	if(err)
		console.log("Error opening!");
	else
	{
		console.log("File opened!");
		buff = new Buffer("//Writing to file byte by byte");
		bLength = buff.length;
		bOffset = 0;
		filePos = null; // gonna append

		// lets get rollin
		fs.write(fd,buff,bOffset,bLength,filePos,function(err,writtenBytes){

			if(err)
				console.log("Error reading!");
			else
				console.log("Written bytes: "+writtenBytes+"; Content: "+buff.slice(0,writtenBytes));

		});// end of write

	}// end of else
});


