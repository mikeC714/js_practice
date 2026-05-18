// Build a Node http server that serves JSON on GET /api/time and 404s everything else.
// GET /api/time → { time: "2026-05-10T..." }
// GET /anything-else → 404 { error: "Not found" }
const http = require("node:http");
    

const PORT = 3000;
const time = Date.now();

const server = http.createServer((req, res) => {
    if(req.url === "/api/time" && req.method === "GET"){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(time));
    }else{
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }

})

server.listen(PORT, () => console.log(`Server is running smooth on PORT: ${PORT}`))