var http = require('http');     // Import Node.js core module
var server = http.createServer(function (req, res) {
    if (req.url == '/') {       // Check the URL of the current request

        // Set response header
        res.writeHead(200, {'Content-Type': 'text/html'})

        // Set response content
        res.write('<html><body><p>This is Home Page</html></body></p>')
        res.end();
    }

    else if (req.url == '/') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<html><body><p>This is Student Page</html></body></p>')
        res.end();
    }

    else if (req.url == '/') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<html><body><p>This is Admin Page</html></body></p>')
        res.end();
    }

    else {
        res.end('Invalid Request!');
    }
});

server.listen(9000);    // Listen for any incoming requests.
console.log('Node.js web server at port 5000 is running...')