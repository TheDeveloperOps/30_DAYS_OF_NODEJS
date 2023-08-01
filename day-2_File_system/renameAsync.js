const { error } = require('console')
var fs = require('fs')
fs.rename('new_name.txt','new_name.txt',(error)=>{
    if(error)
        throw error;
    console.log("file renamed")
})