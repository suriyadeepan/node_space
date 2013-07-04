
var buf = new Buffer("hello");

console.log("\nBuffer.length = "+buf.length+"\n");

// lets now iterate thro' the buffer contents and 
//  print 'em out!
printBuf(buf);

// slicing a buffer
console.log("\n\n");
printBuf(buf.slice(1,3));


function printBuf(buff){
	for(var i=0;i<buff.length;i++){
	 
		console.log("Buf["+i+"] = "+String.fromCharCode(buff[i]));
	}
}



