var stringdeco = require('string_decoder').StringDecoder
var sd = new stringdeco('utf-8')

var buff= Buffer('self learning')
console.log(buff)
console.log(sd.write)