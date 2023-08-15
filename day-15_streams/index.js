const { error } = require('console');
var fs = require('fs')
var wdata = "This is the data that gonna be updated on to the file"

var myWriteStream = fs.createWriteStream('aboutMe.txt')

myWriteStream.write(wdata)

myWriteStream.end();
myWriteStream.on('error',(error)=>{
    console.log(error)
})

myWriteStream.on('finish',()=>{
    console.log("Data written successfully using streams")
    console.log("Trying to read the data using read streams")

    var myReadStream = fs. createReadStream('aboutMe.txt')

    var rContent=''
    myReadStream.on('data',(chunk)=>{
        rContent += chunk
    })
    myReadStream.on('error', function(err){
		console.log(err);
	});
	myReadStream.on('end',function(){
		console.log('read: ' + rContent);
	});
	console.log('performed write and read using streams');
})