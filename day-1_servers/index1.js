var http = require('http');

var host = '127.0.0.1'
var port = 3000

var server = http.createServer((request,response)=>{
    response.writeHead(200,{'content-type':'text/plain'});
    response.write("hello world ")
    response.end();
})

server.listen(port,host,(error)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log('the server is successfully created and listening on 3000')
    }
})