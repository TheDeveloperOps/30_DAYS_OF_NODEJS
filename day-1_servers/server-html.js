var http = require("http")
var fs = require('fs')


var port = 3000
http.createServer(function (req,res) {
    console.log("port number"+ port)
    res.writeHead(200,{"content-type":"text/html"}) // mentioned as text/html, make sure always
    fs.readFile("index.html",(err,data)=>{
        if(err)
            throw err;
        console.log("operation success")
        res.end(data)
    })
}).listen(3000)