const { error } = require('console')
var fs=require('fs')
var new_data = "data that gonna be updated"
fs.appendFile('dummy.txt',new_data,(error)=>{
    if(error)
        throw error;
    console.log("data appended")
})