const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    console.log('request was made: ' + req.url);
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }else if(req.url === '/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }else if(req.url === '/api/people'){
        const people = [
            {name: 'robin', age:26},
            {name: 'kot', age: 36}
        ]
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(people));
    }else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/error.html').pipe(res);
    }
});

server.listen(8080, '127.0.0.1');
console.log("Listening...");
