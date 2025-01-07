// const http = require("http");
// const fs = require("fs");
// const path = require("path");
//
// const port = 3000;
//
// const server = http.createServer((req, res) => {
//   const filePath = path.join(
//     __dirname,
//     req.url === "/" ? "index.html" : req.url
//   );
//   console.log(filePath);
//
//   const extName = String(path.extname(filePath)).toLowerCase();
//
//   const mimeTypes = {
//     ".html": "text/html",
//     ".css": "text/css",
//     ".js": "text/javascript",
//     ".png": "text/png",
//   };
//
//   const contentType = mimeTypes[extName] || "application/octet-stream";
//
//   fs.readFile(filePath, (err, content) => {
//     if (err) {
//       if (err.code === "ENOENT") {
//         res.writeHead(404, { "Content-Type": "text/html" });
//         res.end("404: File Not Found BRooooo");
//       }
//     } else {
//       res.writeHead(200, { "Content-Type": contentType });
//       res.end(content, "utf-8");
//     }
//   });
// });
//
// server.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });
//
//

const http = require('http');
const fs = require("fs");
const path = require('path');


const port = 3000;

const server = http.createServer((request, response) => {
  // request.url === '/' then serve me index.html
  const filePath = path.join(__dirname, request.url === '/' ? "index.html" : request.url);
  console.log(filePath)

 const extName =  String(path.extname(filePath).toLowerCase());

 const mimeType = {
   '.html': 'text/html',
   '.css': 'text/css',
   '.js': 'text/js',
   '.png': 'text/png',
 };


 const contentType = mimeType[extName] || 'application/octet-stream';


 fs.readFile(filePath, (err, content) => {
   if (err){
     if(err.code === "ENOENT"){
       response.writeHead(404,{"Content-Type": "text/html"});
       response.end("File not found bruv!!!")

     }
   }
   else{
     response.writeHead(200, {"Application-Type": contentType});
     response.end(content, "utf-8");

   }
 })

});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});