console.log("\n*** Set Interval Test ***\n");
// lets test the setInterval(cb,interval_ms);
//  callback, cb occurs every interval_ms period of time

var timeNow = 0;

var intervalId;

intervalId = setInterval(function(){

	timeNow += 100;

	if(timeNow > 900 && timeNow < 2500){
	
        	console.log( (timeNow/1000) + "s");
	}
	else if(timeNow > 2500){

		// now we'll cancel the setInterval by using
		//  clearInterval(intervalId);
		console.log("cancelling!");			
		clearInterval(intervalId);
	}
	else
		console.log(timeNow+"ms");

},100);


