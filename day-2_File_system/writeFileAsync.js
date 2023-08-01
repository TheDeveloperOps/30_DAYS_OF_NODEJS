const { error } = require('console')
var fs = require('fs')
var content = " this is the new content "
fs.writeFile('dummy.txt',content,(error)=>{
    if(error)
        throw error;
    console.log("the file saved")
})