const http = require('http');
const fs = require('fs');

let myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
let myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt', 'utf8');

myReadStream.on('data', chunk =>{
    console.log('new chunk received: ');
    myWriteStream.write(chunk);
});

/*
const server = http.createServer((req, res)=>{
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Hey there");
});

server.listen(8080, '127.0.0.1');
console.log("Listening...");
*/  