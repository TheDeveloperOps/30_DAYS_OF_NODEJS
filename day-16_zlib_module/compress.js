var zlib = require('zlib')
var fs = require('fs')

var zip = zlib.createGzip();

var read = fs.createReadStream('dummy.txt')
var write = fs.createWriteStream('new_dummy.txt.gz')

read.pipe(zip).pipe(write)
console.log("zipped successfully")