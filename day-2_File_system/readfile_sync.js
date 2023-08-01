var fs = require('fs');
var filename = 'dummy.txt'; //Name of the file to be read
var content = fs.readFileSync(filename);
console.log('Content : ' + content);