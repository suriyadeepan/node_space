var fsys = require('fs');

fsys.stat('fs.info',function(err,stats){

	if(err){

		console.log("File doesn't exist!");
	}
	else
	{
		var strStat = JSON.stringify(stats);
		console.log("Stats: "+strStat);
	}
});
