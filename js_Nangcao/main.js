var http = require("node:http");
var fs = require("node:fs");
http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type":"application/plain"});

    // let car = ['BWN', 'Audi', 'toyota'];
    // JSON.stringify(car)
    res.end("Hoang Kien");
}).listen(6666);