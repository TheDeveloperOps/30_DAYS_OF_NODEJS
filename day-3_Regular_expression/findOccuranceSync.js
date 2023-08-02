var fs = require('fs')
var filename = 'dummy.txt'
var  str = fs.readFileSync(filename).toString();
var pattern = /man/gim;
var myArray = str.match(pattern)
var len = myArray.length;
console.log("the number of occurance of the given word is : "+ len)