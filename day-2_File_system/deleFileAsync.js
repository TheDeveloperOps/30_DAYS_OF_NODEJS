const { error } = require('console')
var fs = require('fs')
fs.unlink('chumma.txt',(error)=>{
    if(error)
        throw error;
    console.log("the file is deleted ")
})