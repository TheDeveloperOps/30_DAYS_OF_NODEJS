var zlib = require('zlib')
var fs = require('fs')
var unzip =zlib.createUnzip();

var read = fs.createReadStream('new_dummy.txt.gz')
var write = fs.createWriteStream('unzip.txt')

read.pipe(unzip).pipe(write)
console.log("unzipped successfully")