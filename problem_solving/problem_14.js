// Build a Node http server that serves JSON on GET /api/time and 404s everything else.
// GET /api/time → { time: "2026-05-10T..." }
// GET /anything-else → 404 { error: "Not found" }

const http = require("node:http");

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = res.method;
    let body = [];

    if(url === "/api/time" && method === "GET"){
        res.writeHead(200, {"Content-type": "application/json"})
        res.end(JSON.stringify())
    }

    res.writeHead(200, {"Content-type": "application/json"});
    res.end("OK");
});