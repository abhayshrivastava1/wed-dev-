const { log } = require('console');
const http = require('http')

const hostName = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req === '/'){
        res.statusCode = 2000
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello ice tea');
    }
    else if(condition){
        if(req.url === 'ice-tea'){
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end("Thnx for ordering ice tea");
        }
    }
});

server.listen(port, hostName, () => {
    console.log(`Server is listening to http://${hostName}:${port}`);
});

