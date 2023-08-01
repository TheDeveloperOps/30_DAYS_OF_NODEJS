var http = require("http")
var fs = require("fs")
const { error } = require("console")
var host = '127.0.0.1'
var port = 3000

http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"application/pdf"})
    fs.readFile('C:/Users/jarvi/Downloads/balamurugan_resume.pdf',(error,data)=>{
        if(error)
            throw error;
        res.write(data);
        res.end()
        console.log("completely fine, its working")
    })

}).listen(3000)