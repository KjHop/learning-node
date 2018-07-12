const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'application/json'});
    const myObj ={
        name: "Kacper",
        job: "Junior Frontend Developer",
        age: 18
    };
    res.end(JSON.stringify(myObj));
});

server.listen(8080, '127.0.0.1');
console.log("Listening...");
