var fs = require("fs")
var filename = 'index.html'
var  str = fs.readFileSync(filename).toString();
var pattern = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim;
var myArray = str.match(pattern)
var len = myArray.length;
console.log(" the number of occurances of the patter is : " + len)