var fs=require('fs');

fs.readFile('dummy.txt', (err, data) => {
	if (err) 
		throw err;
		
	console.log("Content :  " + data);
});
				