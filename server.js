var http = require("http");
var fs = require("fs");

console.log("http://localhost:3000")

http.createServer(function(request, response){
    fs.readFile("index.html", function(err, data){
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(data);
        response.end();
    })
}).listen(3000);

