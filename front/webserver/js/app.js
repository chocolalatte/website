const http = require("node:http");

const router = require("./router");


const port = 80;
const hostname = "127.0.0.1";


http.createServer((req, res) => {
    router.route(req, res);
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})