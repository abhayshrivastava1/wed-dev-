// const log  = require('console');
const http = require('http');

const hostName = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello ice tea');
    }
    else if(req.url === '/ice-tea'){
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end("Thnx for ordering ice tea");
    }
    else{
        res.statusCode = 404
         res.setHeader("Content-Type", "text/plain");
         res.end("404 not found!!");
    }
});

server.listen(port, hostName, () => {
    console.log(`Server is listening to http://${hostName}:${port}`);
});

