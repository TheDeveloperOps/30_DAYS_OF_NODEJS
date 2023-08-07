var express = require('express')
var app = express()

app.get('/',(req, res)=>{
    res.send("hello world")
})

app.listen(3000,()=>{
    console.log("server listening on port 3000")
})