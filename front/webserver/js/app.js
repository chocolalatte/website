const http = require("node:http");

const router = require("./router");


const port = 8888;
const hostname = "0.0.0.0";


http.createServer((req, res) => {
    router.route(req, res);
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})