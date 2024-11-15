const fs = require("node:fs");
const path = require("node:path");


const html = {"Content-type": "text/html"}
const css = {"Content-type": "text/css"}
const js = {"Content-type": "text/javascript"}
const json = {"Content-type": "text/json"}


// fix css loading on index page then test webserver in container
function route(req, res) {
	console.log(`loading ${req.url}`)
	if (String(req.url).replace("/", "") === "") {
		load(req, res, "./html/home.html", html)
	} else if (path.extname(String(req.url)) === ".html") {
		load(req, res, `./html${req.url}`, html)
	} else if (path.extname(String(req.url)) === ".css") {
		load(req, res, `./css/style.css`, css)
	} else if (path.extname(String(req.url)) === ".js") {
		load(req, res, `./js${req.url}`, js)
	} else if (path.extname(String(req.url)) === ".json") {
		load(req, res, `.${req.url}`, json)
	} else if (path.extname(String(req.url)) == ".ico") {
		load(req, res, `./img/favicon.ico`, {"Content-type": "text/ico"})
	}
}

function load(req, res, loc, type) {
	console.log(`loading ${req.url}`)
	fs.readFile(loc, (err, data) => {
  		res.writeHeader(200, type)
		res.end(data)
	})
}


module.exports.route = route;