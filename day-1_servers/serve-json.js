var http = require('http')
var fs = require('fs')
var host = '127.0.0.1'
var port = 3000

http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"application/json"})
    let json_res={
        status : 200,
        message : 'successful',
        result : ['sunday','monday','tuesday'],
        code : 2000
    }
    console.log("port running")
    res.end(JSON.stringify(json_res))
}).listen(port)