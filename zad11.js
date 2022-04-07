
var http = require('http');
let jsonData = require('./osobe.json');
var nPort = 8000;
const jsonContent = JSON.stringify(jsonData);
console.log('Pokretanje servera na portu '+nPort);
http.createServer(function(request, response){
response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
response.write(jsonContent);
response.end();
}).listen(nPort);