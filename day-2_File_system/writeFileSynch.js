var fs = require('fs')
var content = "also the new content"

fs.writeFileSync('dummy.txt',content)
console.log("file written successfully")