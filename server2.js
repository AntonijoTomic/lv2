
var http = require('http');
var nPort = 8080;
var rando = require("./script")
var i =0;
console.log("pokrecemo");
http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
while (i < 10) {
response.write(String(rando.dajSlucajanBroj(10,100) + "\n"));
i++;
}
response.end();
}).listen(nPort);