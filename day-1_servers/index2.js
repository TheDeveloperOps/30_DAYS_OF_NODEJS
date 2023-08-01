const { error } = require('console');
var http = require('http')
var host = `127.0.0.1`
var port = 3000

var server = http.createServer((request,response)=>{
    response.writeHead(200,{"content-type":"text/plain"});
    console.log("server Working")
    response.end("server working success")
})

server.listen(port,host, (error)=>{
    if(error){
        return console.log(error);
    }
    console.log("server is listening on " + host + ':' + "port")
})